import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { createSignal, createResource } from "solid-js";
import { createStore } from "solid-js/store";
import Close from "./icons/Close";
import TextInput from "./TextInput";
import Logo from "./Logo";
import Loading from "./Loading";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Requests() {
  const [noData, setNoData] = createSignal(false);
  const [requests, setRequests] = createStore([]);

  const [showRestriction, setShowRestriction] = createSignal(false);

  const daysBetweenDates = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    const diffInMs = Math.abs(d2 - d1);
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  };

  const processPost = async (val) => {
    if (JSON.parse(localStorage.getItem("OffKUser"))) {
      console.log(val);
    } else {
      console.log("not an agent");
      setShowRestriction(true);
    }
  };

  const getRequests = async () => {
    const response = await fetch(
      VITE_API_URL +
        "/open/api/view-posts?uni=" +
        JSON.parse(localStorage.getItem("OffKUni")).uni,
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    );
    const result = await response.json();
    if (!result.success) {
      setMessage(result.response);
      setIsProcessing(false);
    } else {
      if (result.response.length < 1) {
        setNoData(true);
      }
      var arrObj = [];
      var arr = result.response;

      const today = new Date();
      const todayString = today.toISOString().slice(0, 10);

      for (let i = 0; i < arr.length; i++) {
        var obj = {
          level: arr[i].level,
          request: arr[i].request,
          id: arr[i].id,
          days: daysBetweenDates(
            arr[i].created_at.substring(0, 10),
            todayString
          ),
        };

        arrObj.push(obj);
      }
      setRequests(arrObj);
    }
    return {
      requests,
    };
  };

  const [resources] = createResource(getRequests);
  return (
    <>
      <Show when={showRestriction()}>
        <div class="fixed z-40 bg-slate-900 bg-opacity-90 flex items-center h-screen w-screen top-0 bottom-0 left-0 right-0">
          <div class="w-11/12 sm:w-[620px] mx-auto">
            <div class="text-right mb-1 -mt-20">
              <span onClick={() => setShowRestriction(false)}>
                <Close />
              </span>
            </div>
            <div class="bg-white p-4  border-t-8 border-purple-800 py-4">
              <h2 class="text-xl text-purple-800 text-center mb-4 border-b pb-4">
                Oops!
              </h2>
              <div class="mt-6 space-y-4">
                <p>
                  Only verified and vetted agents can access posters & start
                  direct WhatsApp chat.
                </p>
                <p class="font-semibold">A verified and vetted agent?</p>
                <p>
                  <A href="/login" class="text-purple-700 hover:opacity-60">
                    Log in
                  </A>{" "}
                  now so you can connect with posters.
                </p>
                <p class="font-semibold">Don't have an account on OffK.ng?</p>
                <p>
                  <A
                    href="/create-account"
                    class="text-purple-700 hover:opacity-60"
                  >
                    Create Account
                  </A>{" "}
                  now for FREE. Get verified & vetted. Start getting more
                  clients, and make more money!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Show>
      <div class="mt-8 sm:mt-12">
        <div class="mx-4 mb-1 text-center">
          <h2 class="text-lg font-normal leading-snug">
            See recent requests by students:
          </h2>
          <div class="text-gray-500 text-xs">
            You may click/tap on any request for direct WhatsApp chat with
            poster.
          </div>
        </div>
        <div class="mx-4 mt-4 space-y-6">
          <Show
            when={resources.loading}
            fallback={
              <>
                <Show
                  when={noData()}
                  fallback={
                    <For each={resources().requests}>
                      {(resource, i) => (
                        <div
                          onClick={() => processPost(resource.id)}
                          class="space-y-2 border border-gray-900 border-dashed bg-gray-100 p-3 rounded-lg hover:bg-purple-100 cursor-pointer"
                        >
                          <div class="flex space-x-2 text-xs text-gray-600 lowercase">
                            <span class="bg-gray-100 border border-gray-400 py-0.5 px-1 rounded">
                              {resource.days === 0 ? (
                                <span class="capitalize">Today</span>
                              ) : resource.days <= 1 ? (
                                resource.days + " Day ago"
                              ) : (
                                resource.days + " Days ago"
                              )}
                            </span>
                            <span class="bg-gray-100 border border-gray-400 py-0.5 px-1 rounded">
                              <span class="uppercase">{resource.level}L</span>{" "}
                              student
                            </span>
                            <span class="bg-gray-100 border border-gray-400 py-0.5 px-1 rounded flex space-x-1">
                              <span class="-mt-0.5">🏫</span>
                              <span class="uppercase">
                                {
                                  JSON.parse(localStorage.getItem("OffKUni"))
                                    .uni
                                }
                              </span>
                            </span>
                          </div>
                          <div>{resource.request}</div>
                        </div>
                      )}
                    </For>
                  }
                >
                  <div class="pt-4 text-center p-2 border-t border-gray-100 text-slate-600">
                    No data found.
                  </div>
                </Show>
              </>
            }
          >
            <Show when={JSON.parse(localStorage.getItem("OffKUni"))}>
              <Loading />
            </Show>
          </Show>
        </div>
      </div>
    </>
  );
}

export default Requests;
