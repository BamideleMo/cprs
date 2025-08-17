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
                <div class="bg-white p-2 sm:p-4 border-t-8 border-black py-4">
                  <h2 class="font-normal text-xl text-purple-800 text-center mb-4 border-b pb-4">
                    Filter by Category
                  </h2>
                  <FilterForm />
                </div>
              </Match>
              <Match when={modalContent() === "search"}>
                <div class="bg-white p-2 sm:p-4 border-t-8 border-black py-4">
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
                class="w-full"
              >
                <thead>
                  <tr class="">
                    <td
                      colspan="3"
                      class="py-3 font-bold text-slate-900 border-y border-black"
                    >
                      <div class="flex justify-between">
                        <h2 class="-ml-1 flex">
                          <span>📍</span>{" "}
                          <span class="lg:-mt-0.5 uppercase">
                            Recent Posts:
                          </span>
                        </h2>

                        <div class="pt-0 flex">
                          <div
                            onClick={() => {
                              setShowModal(true);
                              setModalContent("search");
                            }}
                            class="cursor-pointer hover:opacity-60 border-r  border-slate-900 pr-4"
                          >
                            Search
                          </div>
                          <div
                            onClick={() => {
                              setShowModal(true);
                              setModalContent("filter");
                            }}
                            class="cursor-pointer hover:opacity-60 pl-4"
                          >
                            Filter
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
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
                    <tr class="border-b  border-black hover:bg-purple-50 cursor-pointer">
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
