import Header from "../components/Header";
import Footer from "../components/Footer";
import Close from "../components/icons/Close";
import { createSignal, createResource } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";
import PostItemForm from "../components/PostItemForm";
import Loading from "../components/Loading";
import { createStore } from "solid-js/store";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function BuySell() {
  const [showModal, setShowModal] = createSignal(false);
  const [noData, setNoData] = createSignal(false);
  const [listings, setListings] = createStore([]);

  const [showRestriction, setShowRestriction] = createSignal(false);

  const daysBetweenDates = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    const diffInMs = Math.abs(d2 - d1);
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  };

  const getListings = async () => {
    const response = await fetch(
      VITE_API_URL +
        "/open/api/view-listings?uni=" +
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
          category: arr[i].category,
          item: arr[i].item,
          description: arr[i].description,
          id: arr[i].id,
          days: daysBetweenDates(
            arr[i].created_at.substring(0, 10),
            todayString
          ),
        };

        arrObj.push(obj);
      }
      setListings(arrObj);
    }
    return {
      listings,
    };
  };

  const [resources] = createResource(getListings);
  return (
    <>
      <Show when={showModal()}>
        <div class="fixed z-40 bg-slate-900 bg-opacity-90 flex items-center h-screen w-screen top-0 bottom-0 left-0 right-0">
          <div class="w-11/12 sm:w-[620px] mx-auto">
            <div class="text-right mb-1 -mt-20">
              <span onClick={() => setShowModal(false)}>
                <Close />
              </span>
            </div>
            <div class="bg-white p-4  border-t-8 border-purple-800 py-4">
              <h2 class="font-normal text-xl text-purple-800">
                Post Item for Sale:
              </h2>
              <PostItemForm />
            </div>
          </div>
        </div>
      </Show>
      <MetaProvider>
        <Title>Buy & Sell - www.offk.ng</Title>
        <Meta
          name="description"
          content="List of hostel-centric items available for sale on OffK.ng"
        ></Meta>
        <Link rel="preload" as="image" href={screen}></Link>
        <div class="bg-white text-sm">
          <Header />
          <section class="w-full px-1 sm:w-[620px] mx-auto">
            <div class="my-6 sm:my-10 mx-2 text-left">
              <div class="text-center">
                <h1 class="text-xl sm:text-3xl font-semibold space-y-0">
                  <div>Buy & Sell</div>
                </h1>
                <h2 class="text-lg sm:text-xl mt-4 sm:mt-4 text-gray-600 leading-tight">
                  A simple table showing hostel-centric items available for sale
                  to students in{" "}
                  <span class="uppercase">
                    {JSON.parse(localStorage.getItem("OffKUni")).uni}
                  </span>
                  :
                </h2>
                <h3 class="mt-4">
                  <b>Want to sell an item?</b>{" "}
                  <span
                    onClick={() => setShowModal(true)}
                    class="border-b-4 border-purple-700 hover:opacity-60 cursor-pointer"
                  >
                    Post it now
                  </span>
                </h3>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-8 text-gray-400 mx-auto mt-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                    />
                  </svg>
                </div>
              </div>

              <div class="mt-8 sm:mt-12 flex justify-between">
                <h2 class="text-base sm:text-lg font-normal">
                  Items for sale:
                </h2>
                <div class="flex space-x-6 pt-1">
                  <span class="flex items-center text-xs bg-black text-white px-2 rounded hover:opacity-60 cursor-pointer">
                    Filter
                  </span>
                </div>
              </div>
              <div class="mt-2 space-y-6 text-xs md:text-sm">
                <Show
                  when={resources.loading}
                  fallback={
                    <>
                      <Show
                        when={noData()}
                        fallback={
                          <table cellpadding="0" cellspacing="0" class="w-full">
                            <thead>
                              <tr class="font-normal bg-purple-700 text-white space-x-1">
                                <td class="w-16 md:w-28 p-1 md:p-3 rounded-tl-lg">
                                  Posted
                                </td>
                                <td class="p-1 md:p-3 border-x border-dashed border-purple-400">
                                  Item Desc.
                                </td>
                                <td class="w-10 p-1 md:p-3 rounded-tr-lg">
                                  Chat
                                </td>
                              </tr>
                            </thead>

                            <tbody>
                              <For each={resources().listings}>
                                {(resource, i) => (
                                  <tr class="border-b border-dashed border-purple-400">
                                    <td class="p-1 md:p-3">
                                      {resource.days === 0 ? (
                                        <span class="capitalize">Today</span>
                                      ) : resource.days <= 1 ? (
                                        resource.days + " Day ago"
                                      ) : (
                                        resource.days + " Days ago"
                                      )}
                                    </td>
                                    <td class="p-1 md:p-3 pt-3 border-x border-dashed border-purple-400 space-y-2">
                                      <span class="block space-x-2 text-xs">
                                        <span class="space-x-1 bg-gray-200 border border-gray-300 p-0.5 rounded">
                                          <b>{resource.category}:</b>
                                          <span>{resource.item}</span>
                                        </span>
                                        <span class="space-x-1 bg-gray-200 border border-gray-300 p-0.5 rounded">
                                          <b>ID:</b>
                                          <span>OffK{resource.id}</span>
                                        </span>
                                      </span>
                                      <span class="block text-gray-600">
                                        {resource.description}
                                      </span>
                                    </td>
                                    <td class="p-1 md:p-3">
                                      <a
                                        href="#"
                                        class="bg-green-300 text-green-900 p-1 rounded-md hover:opacity-60"
                                      >
                                        Chat
                                      </a>
                                    </td>
                                  </tr>
                                )}
                              </For>
                            </tbody>
                          </table>
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
          </section>
          <Footer />
        </div>
      </MetaProvider>
    </>
  );
}

export default BuySell;
