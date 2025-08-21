import { A } from "@solidjs/router";
import { Show, Switch, createSignal } from "solid-js";
import ProcessingAnimation from "./ProcessingAnimation";
import Close from "./icons/Close";
import naira from "../assets/naira.png";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function PostTr(props) {
  const [showModal, setShowModal] = createSignal(false);
  const [isProcessing, setIsProcessing] = createSignal(false);
  const [number, setNumber] = createSignal();
  const [description, setDescription] = createSignal();

  const getWhatsApp = (id) => {
    setShowModal(true);
    setIsProcessing(true);
    getListing(id);
  };

  const getListing = async (id) => {
    const response = await fetch(VITE_API_URL + "/open/api/listing/" + id, {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "GET",
    });
    const result = await response.json();
    setNumber(result.response.number);
    setDescription(
      encodeURIComponent(
        "Found you on OffK.ng. Is this still available: *" +
          "_" +
          result.response.item +
          "_" +
          result.response.description +
          "*"
      )
    );
    setIsProcessing(false);
  };

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
              <h2 class="font-normal text-xl text-purple-800 text-center mb-4 border-b pb-4">
                Chat With Poster
              </h2>
              <div>
                <Show
                  when={isProcessing()}
                  fallback={
                    <div class="space-y-4 text-center">
                      <a
                        target="_blank"
                        href={
                          "https://wa.me/234" +
                          number() +
                          "?text=" +
                          description()
                        }
                        class="block w-fit mx-auto bg-green-600 p-3 rounded-lg text-white hover:opacity-60"
                      >
                        Begin WhatsApp Chat
                      </a>
                      <p>
                        Click the green button above to start a direct WhatsApp
                        chat with the poster.
                      </p>
                    </div>
                  }
                >
                  <ProcessingAnimation />
                </Show>
              </div>
            </div>
          </div>
        </div>
      </Show>
      <tr
        onClick={() => getWhatsApp(props.rsc.id)}
        class="hover:underline cursor-pointer border-t border-dashed border-black"
      >
        <td class="py-5 space-y-2">
          <div class="text-gray-600">
            <div class="flex justify-between text-xs">
              <span class="bg-yellow-100 py-1.5 px-2 rounded-full">
                {props.rsc.category}
              </span>
              <div class="flex space-x-1">
                <span class="bg-blue-100 py-1.5 px-2 rounded-full">
                  <b>ID:</b> K{props.rsc.id}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="mt-1 size-5 text-gray-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div class="py-2">
              <div class="flex justify-between">
                <h2 class="text-base text-red-600">{props.rsc.item}</h2>
              </div>
              <div class="text-gray-600 text-sm">{props.rsc.description}</div>
            </div>
            <div class="flex justify-between mt-3 text-xs text-gray-600">
              <div class="flex space-x-2">
                <span class="bg-gray-200 py-1.5 px-2 rounded-full">
                  {props.rsc.days === 0 ? (
                    <span class="capitalize">Today</span>
                  ) : props.rsc.days <= 1 ? (
                    props.rsc.days + " Day Ago"
                  ) : (
                    props.rsc.days + " Days Ago"
                  )}
                </span>
                <span class="flex space-x-1 bg-green-200 py-1.5 px-2 rounded-full">
                  <span>
                    <img src={naira} class="h-4" />
                  </span>
                  <span>{props.rsc.price}</span>
                </span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="mt-0.5 size-6 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}

export default PostTr;
