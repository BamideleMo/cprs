import Header from "../components/Header";
import Footer from "../components/Footer";
import { createEffect, createSignal, Show } from "solid-js";
import { createStore } from "solid-js/store";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A, useSearchParams, useNavigate } from "@solidjs/router";
import Loading from "../components/Loading";
import PostTr from "../components/PostTr";
import Close from "../components/icons/Close";
import FilterForm from "../components/FilterForm";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Filtered() {
  const [isFetching, setIsFetching] = createSignal(false);
  const [noData, setNoData] = createSignal(false);
  const [listings, setListings] = createStore([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const daysBetweenDates = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    const diffInMs = Math.abs(d2 - d1);
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  };

  var arrObj = [];
  const doFilter = async () => {
    try {
      const response = await fetch(
        VITE_API_URL +
          "/open/api/filter-listings?category=" +
          searchParams.category +
          "&item=" +
          searchParams.item,
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
      if (result.response.length < 1) {
        setNoData(true);
        setIsFetching(false);
      } else {
        var arr = result.response;

        const today = new Date();
        const todayString = today.toISOString().slice(0, 10);

        for (let i = 0; i < arr.length; i++) {
          var numOfDays = daysBetweenDates(
            arr[i].created_at.substring(0, 10),
            todayString
          );
          if (numOfDays <= 30) {
            var obj = {
              type:
                arr[i].category === "Accommodation"
                  ? "Accommodation"
                  : "For Sale",
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
        }
        if (arrObj.length < 1) {
          setNoData(true);
          setIsFetching(false);
        } else {
          setListings(arrObj);
          setIsFetching(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  createEffect(() => {
    setIsFetching(true);
    doFilter();
  });
  return (
    <MetaProvider>
      <Title>
        {" "}
        {searchParams.item
          ? "Results for: " + searchParams.item + " in " + searchParams.category
          : "Filtering"}
      </Title>
      <Meta name="description" content="Filtered List on off.ng?"></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[320px] mx-auto">
          <div class="my-6 sm:my-10 mx-2">
            <div class="text-center">
              <h2 class="text-lg sm:text-xl sm:mt-2 text-gray-600 leading-tight">
                Filtered List
              </h2>
            </div>
            <div class="mt-8 flex justify-between text-sm sm:text-sm ">
              <h2 class="font-normal">
                Showing results for:{" "}
                <span class="text-gray-700">{searchParams.item}</span>
                {/* in{" "}
                <span class="text-gray-700">{searchParams.category}</span> */}
              </h2>
              <div class="-mt-1.5">
                <A
                  href="/"
                  class="block w-fit p-2 rounded bg-gray-900 text-white hover:opacity-60 cursor-pointer"
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
                      d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                    />
                  </svg>
                </A>
              </div>
            </div>

            <div class="mt-1 space-y-6 text-sm md:text-sm">
              <Show
                when={isFetching()}
                fallback={
                  <Show
                    when={noData()}
                    fallback={
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        class="w-full border-x border-purple-800 border-dashed"
                      >
                        <thead>
                          <tr class="font-normal bg-slate-300 text-black border-y border-dashed border-purple-800 space-x-1">
                            <td class="w-14 md:w-20 p-1 md:px-3">Posted</td>
                            <td class="p-1 md:px-3 border-l border-dashed border-purple-800">
                              Description
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <For each={listings}>
                            {(listing, i) => <PostTr rsc={listing} />}
                          </For>
                        </tbody>
                      </table>
                    }
                  >
                    <div class="pt-4 text-center p-2 border-t border-gray-100 text-slate-600">
                      0 posts found.
                    </div>
                  </Show>
                }
              >
                <Loading />
              </Show>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default Filtered;
