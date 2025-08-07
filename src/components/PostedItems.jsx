import { createSignal, createResource, Show, Switch, Match } from "solid-js";
import Loading from "../components/Loading";
import { createStore } from "solid-js/store";
import PostTr from "./PostTr";
import PromotedTr from "./PromotedTr";
import Close from "./icons/Close";
import FilterForm from "./FilterForm";
import SearchForm from "./SearchForm";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function PostedItems() {
  const [noData, setNoData] = createSignal(false);
  const [showModal, setShowModal] = createSignal(false);
  const [modalContent, setModalContent] = createSignal("");
  const [advert1, setAdvert1] = createSignal();
  const [advert2, setAdvert2] = createSignal();
  const [listings1, setListings1] = createStore([]);
  const [listings2, setListings2] = createStore([]);
  const [listings3, setListings3] = createStore([]);

  const daysBetweenDates = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    const diffInMs = Math.abs(d2 - d1);
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  };

  const getListings = async () => {
    getAdverts();
    const response = await fetch(
      VITE_API_URL +
        "/open/api/view-listings?uni=" +
        JSON.parse(localStorage.getItem("OffK")).uni,
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

      var arrObj1 = [];
      var arrObj2 = [];
      var arrObj3 = [];

      var arr = result.response;

      const today = new Date();
      const todayString = today.toISOString().slice(0, 10);

      // for (let i = 0; i < arr.length; i++)
      for (let i = 0; i < 3; i++) {
        if (arr[i]) {
          var numOfDays = daysBetweenDates(
            arr[i].created_at.substring(0, 10),
            todayString
          );
          if (numOfDays <= 30) {
            var obj1 = {
              type:
                arr[i].category === "Accommodation"
                  ? "Accommodation"
                  : "For Sale",
              category: arr[i].category,
              item: arr[i].item,
              description: arr[i].description,
              id: arr[i].id,
              price: arr[i].price,
              days: daysBetweenDates(
                arr[i].created_at.substring(0, 10),
                todayString
              ),
            };
            arrObj1.push(obj1);
          }
        } else {
          console.log("no items found");
        }
      }
      for (let i = 3; i < 8; i++) {
        if (arr[i]) {
          var numOfDays = daysBetweenDates(
            arr[i].created_at.substring(0, 10),
            todayString
          );
          if (numOfDays <= 30) {
            var obj2 = {
              type:
                arr[i].category === "Accommodation"
                  ? "Accommodation"
                  : "For Sale",
              category: arr[i].category,
              item: arr[i].item,
              description: arr[i].description,
              id: arr[i].id,
              price: arr[i].price,
              days: daysBetweenDates(
                arr[i].created_at.substring(0, 10),
                todayString
              ),
            };
            arrObj2.push(obj2);
          }
        } else {
          console.log("no items found");
        }
      }
      for (let i = 8; i < arr.length; i++) {
        if (arr[i]) {
          var numOfDays = daysBetweenDates(
            arr[i].created_at.substring(0, 10),
            todayString
          );
          if (numOfDays <= 30) {
            var obj3 = {
              type:
                arr[i].category === "Accommodation"
                  ? "Accommodation"
                  : "For Sale",
              category: arr[i].category,
              item: arr[i].item,
              description: arr[i].description,
              id: arr[i].id,
              price: arr[i].price,
              days: daysBetweenDates(
                arr[i].created_at.substring(0, 10),
                todayString
              ),
            };
            arrObj3.push(obj3);
          }
        } else {
          console.log("no items found");
        }
      }

      setListings1(arrObj1);
      setListings2(arrObj2);
      setListings3(arrObj3);
    }
    return {
      listings1,
      listings2,
      listings3,
    };
  };

  const getAdverts = async () => {
    const response = await fetch(
      VITE_API_URL +
        "/open/api/view-adverts-where?uni=" +
        JSON.parse(localStorage.getItem("OffK")).uni,
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
      setAdvert2(result.response[0]);
      setAdvert1(result.response[1]);
    }
  };

  const [resources] = createResource(getListings);
  return (
    <>
      <Show when={showModal()}>
        <div class="fixed z-40 bg-slate-900 bg-opacity-90 flex items-center h-screen w-screen top-0 bottom-0 left-0 right-0">
          <div class="w-11/12 sm:w-[360px] mx-auto">
            <div class="text-right mb-1 -mt-20">
              <span onClick={() => setShowModal(false)}>
                <Close />
              </span>
            </div>
            <Switch>
              <Match when={modalContent() === "filter"}>
                <div class="bg-white p-2 sm:p-4 border-t-8 border-purple-800 py-4">
                  <h2 class="font-normal text-xl text-purple-800 text-center mb-4 border-b pb-4">
                    Filter by Category
                  </h2>
                  <FilterForm />
                </div>
              </Match>
              <Match when={modalContent() === "search"}>
                <div class="bg-white p-2 sm:p-4 border-t-8 border-purple-800 py-4">
                  <h2 class="font-normal text-xl text-purple-800 text-center mb-4 border-b pb-4">
                    Search List
                  </h2>
                  <SearchForm />
                </div>
              </Match>
            </Switch>
          </div>
        </div>
      </Show>

      <div class="mt-3 space-y-6 text-sm md:text-sm">
        <Show
          when={resources.loading}
          fallback={
            <>
              <table
                cellpadding="0"
                cellspacing="0"
                class="w-full border-x border-purple-800 border-dashed"
              >
                <thead>
                  <tr class="border-t border-dashed border-purple-800">
                    <td
                      colspan="3"
                      class="px-2 py-3 bg-slate-100 text-black border-y border-dashed border-purple-800"
                    >
                      <div class="flex justify-between">
                        <h2 class="font-normal -ml-1 flex">
                          <span>📍</span>{" "}
                          <span class="lg:-mt-0.5 font-semibold text-slate-800">
                            Recent Posts:
                          </span>
                        </h2>

                        <div class="pt-0 flex">
                          {/* <div>
                            <span
                              onClick={() => {
                                setShowModal(true);
                                setModalContent("search");
                              }}
                              class="block w-fit p-1.5 rounded-full text-white bg-slate-800 hover:opacity-60 cursor-pointer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-4"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                              </svg>
                            </span>
                          </div>
                          <div>
                            <span
                              onClick={() => {
                                setShowModal(true);
                                setModalContent("filter");
                              }}
                              class="block w-fit p-1.5 rounded-full text-white bg-slate-800 hover:opacity-60 cursor-pointer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-4"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                                />
                              </svg>
                            </span>
                          </div> */}
                          <div
                            onClick={() => {
                              setShowModal(true);
                              setModalContent("search");
                            }}
                            class="cursor-pointer text-purple-600 hover:opacity-60 border-r border-dashed border-purple-800 pr-4"
                          >
                            Search
                          </div>
                          <div
                            onClick={() => {
                              setShowModal(true);
                              setModalContent("filter");
                            }}
                            class="cursor-pointer text-purple-600 hover:opacity-60 pl-4"
                          >
                            Filter
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/* <tr class="font-normal bg-slate-300 text-black border-y border-dashed border-purple-800 space-x-1"> */}
                  {/* <td class="w-10 md:w-24 p-1 md:px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5 mx-auto"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                        />
                      </svg>
                    </td> */}
                  {/* <td class="p-1 md:px-3 border-x border-dashed border-purple-800">
                      Description
                    </td> */}
                  {/* <td class="lg:w-24 p-1 md:px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5 mx-auto"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                        />
                      </svg>
                    </td> */}
                  {/* </tr> */}
                </thead>
                <tbody>
                  <Show
                    when={noData()}
                    fallback={
                      <>
                        <For each={resources().listings1}>
                          {(resource, i) => <PostTr rsc={resource} />}
                        </For>
                        {advert1() ? (
                          <PromotedTr
                            link={advert1().link}
                            topic={advert1().title}
                            text={advert1().description}
                          />
                        ) : (
                          ""
                        )}
                        <For each={resources().listings2}>
                          {(resource, i) => <PostTr rsc={resource} />}
                        </For>
                        <For each={resources().listings3}>
                          {(resource, i) => <PostTr rsc={resource} />}
                        </For>
                      </>
                    }
                  >
                    <tr class="border-b border-dashed border-purple-800 hover:bg-purple-50 cursor-pointer">
                      <td
                        colspan={3}
                        class="p-2 md:p-3 text-xs text-center text-gray-600"
                      >
                        No data found.
                      </td>
                    </tr>
                  </Show>
                </tbody>
              </table>
            </>
          }
        >
          <Show when={JSON.parse(localStorage.getItem("OffK"))}>
            <Loading />
          </Show>
        </Show>
      </div>
    </>
  );
}

export default PostedItems;
