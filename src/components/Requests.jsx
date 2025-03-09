import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { createSignal, createResource } from "solid-js";
import { createStore } from "solid-js/store";
import Close from "./icons/Close";
import TextInput from "./TextInput";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Requests() {
  const [noData, setNoData] = createSignal(false);
  const [requests, setRequests] = createStore([]);

  const [showSearch, setShowSearch] = createSignal(false);

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
      {/* <Show when={showSearch()}>
        <div class="fixed z-40 bg-slate-900 bg-opacity-90 flex items-center h-screen w-screen top-0 bottom-0 left-0 right-0">
          <div class="w-11/12 sm:w-[620px] mx-auto">
            <div class="text-right mb-1 -mt-20">
              <span onClick={() => setShowSearch(false)}>
                <Close />
              </span>
            </div>
            <div class="bg-white p-4  border-t-8 border-purple-800 py-4">
              <h2 class="font-semibold text-xl text-purple-800">
                Search Requests:
              </h2>
              <form>
                <div>
                  <TextInput
                    label="WhatsApp Number:"
                    name="phone"
                    required={false}
                    type="text"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Show> */}
      <div class="mt-12 sm:mt-24">
        <div class="flex justify-between mx-4 mb-1">
          <h2 class="text-base sm:text-xl font-semibold">
            👋 Students Requests:
          </h2>
          <div>
            {/* <svg
              onClick={() => setShowSearch(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 sm:size-8 sm:-mt-0.5 text-black cursor-pointer hover:opacity-60"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg> */}
          </div>
        </div>
        <div class="mx-4 space-y-4">
          <Show
            when={resources.loading}
            fallback={
              <>
                <Show when={noData()}>
                  <div class="pt-4">
                    <span class="text-center p-2 bg-gray-100 text-slate-600">
                      No data found.
                    </span>
                  </div>
                </Show>
                <For each={resources().requests}>
                  {(resource, i) => (
                    <div
                      onClick={() => processPost(resource.id)}
                      class="space-y-2 border border-gray-400 bg-gray-100 p-3 rounded-lg hover:bg-purple-100 cursor-pointer"
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
                          <span class="uppercase">{resource.level}</span> level
                          student
                        </span>
                        <span class="bg-gray-100 border border-gray-400 py-0.5 px-1 rounded flex space-x-1">
                          <span class="-mt-0.5">🏫</span>
                          <span class="uppercase">
                            {JSON.parse(localStorage.getItem("OffKUni")).uni}
                          </span>
                        </span>
                      </div>
                      <div>{resource.request}</div>
                    </div>
                  )}
                </For>
              </>
            }
          >
            <div class="pt-4">
              <span class="text-center p-2 bg-gray-100 text-slate-600">
                Fetching.. .
              </span>
            </div>
          </Show>
        </div>
      </div>
    </>
  );
}

export default Requests;
