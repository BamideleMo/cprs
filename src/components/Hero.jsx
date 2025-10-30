import { A } from "@solidjs/router";
import { Match, Show, Switch } from "solid-js";
import Close from "./icons/Close";
import { createSignal, createEffect, onMount } from "solid-js";
import PostItemForm from "./PostItemForm";
import Heart from "./icons/Heart";

function Hero() {
  const [showModal, setShowModal] = createSignal(false);
  const [modalContent, setModalContent] = createSignal("");

  createEffect(() => {});

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
            <div class="bg-white p-2 sm:p-4 border-t-8 border-purple-800 py-4">
              <Switch>
                <Match when={modalContent() === "request"}>
                  <h2 class="font-normal text-xl text-purple-800 text-center mb-4 border-b pb-4">
                    Make Post
                  </h2>
                  <PostItemForm />
                </Match>
              </Switch>
            </div>
          </div>
        </div>
      </Show>

      <section class="-mt-4">
        <div class="w-full px-1 sm:w-[620px] 2xl:w-[900px] mx-auto">
          <div class="mesh-bg pt-16 text-center">
            <h1
              class="boldTxt text-slate-500 text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-semibold leading-tight lg:leading-8 
            lg:w-[500px] lg:mx-auto"
            >
              FIND & POST
              <div class="sm:text-2xl lg:text-3xl 2xl:text-4xl text-black">
                <span class="underline decoration-green-400 decoration-2">
                  Campus Accommodation
                </span>
                , <br class="sm:hidden" />
                <span class="underline decoration-blue-400 decoration-2">
                  Events
                </span>
                , &{" "}
                <span class="underline decoration-red-400 decoration-2">
                  Items For Sale
                </span>
              </div>
            </h1>
            <h2 class="text-lg 2xl:text-lg leading-tight mt-2 text-gray-600">
              For{" "}
              <Show when={JSON.parse(localStorage.getItem("OffK"))}>
                <span class="bg-purple-100 px-1">
                  {JSON.parse(localStorage.getItem("OffK")).uni}
                </span>
              </Show>{" "}Students!
            </h2>
            <div class="pt-6 space-x-4">
              <span
                onClick={() => {
                  setShowModal(true);
                  setModalContent("request");
                }}
                class="cursor-pointer bg-purple-800 text-white p-2.5 rounded-lg hover:opacity-60"
              >
                👋 Make Post
              </span>
            </div>
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
      </section>
    </>
  );
}

export default Hero;
