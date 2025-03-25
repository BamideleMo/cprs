import { A } from "@solidjs/router";
import { Match, Show, Switch } from "solid-js";
import Close from "./icons/Close";
import { createSignal } from "solid-js";
import PostRequestForm from "./PostRequestForm";

function Hero() {
  const [showModal, setShowModal] = createSignal(false);
  const [modalContent, setModalContent] = createSignal("");

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
              <Switch>
                <Match when={modalContent() === "request"}>
                  <h2 class="font-normal text-xl text-purple-800">
                    Post Request:
                  </h2>
                  <PostRequestForm />
                </Match>
                <Match when={modalContent() === "how"}>
                  <h2 class="font-normal text-xl text-purple-800">
                    How it Works:
                  </h2>
                  <div class="space-y-4 my-4">
                    <ul class="space-y-4">
                      <li class="flex flex-col space-y-1">
                        <b class="text-base">1️⃣ Post Your Request:</b>
                        <ul class="list-disc mx-8 space-y-1">
                          <li>
                            Click on the "Post Request" button, provide your
                            WhatsApp contact & details like location, budget,
                            preferences, etc.
                          </li>
                        </ul>
                      </li>
                      <li class="flex flex-col space-y-1">
                        <b class="text-base">2️⃣ Wait for Agents to Chat You:</b>
                        <ul class="list-disc mx-8 space-y-1">
                          <li>
                            Only verified & vetted house agents can access and contact you via
                            WhatsApp.
                          </li>
                          <li>
                            If any of them has a suitable property, he/she will
                            chat you on WhatsApp.
                          </li>
                        </ul>
                      </li>
                      <li class="flex flex-col space-y-1">
                        <b class="text-base">3️⃣ Finalize Your Accommodation:</b>
                        <ul class="list-disc mx-8 space-y-1">
                          <li>
                            Review options from different agents. Choose the
                            best option & secure your accommodation stress-free.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </Match>
              </Switch>
            </div>
          </div>
        </div>
      </Show>

      <div class="my-10 text-center">
        <h1 class="text-xl sm:text-3xl font-semibold">
          The Simplest Way to Find
          <br class="" />
          Off-Campus Accommodation.
        </h1>
        <h2 class="text-sm sm:text-lg mt-2 sm:mt-2 text-gray-600">
          Verified & Vetted Agents Come to You!
        </h2>
        <div class="pt-6 space-x-4">
          <span
            onClick={() => {
              setShowModal(true);
              setModalContent("request");
            }}
            class="cursor-pointer border border-purple-800 bg-purple-800 text-white p-2 rounded-lg hover:opacity-60"
          >
            👋 Post Request
          </span>
          <span
            onClick={() => {
              setShowModal(true);
              setModalContent("how");
            }}
            class="cursor-pointer border border-black text-black p-2 rounded-lg hover:opacity-60"
          >
            How it works
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
    </>
  );
}

export default Hero;
