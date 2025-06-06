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
                        Click the green button above to start a WhatsApp chat
                        with the poster.
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
        class="border-b border-dashed border-purple-800 hover:bg-purple-200 cursor-pointer"
      >
        <td class="p-2 md:p-3 text-xs leading-none">
          {props.rsc.days === 0 ? (
            <span class="capitalize">Today</span>
          ) : props.rsc.days <= 1 ? (
            props.rsc.days + " day ago"
          ) : (
            props.rsc.days + " days ago"
          )}
        </td>
        <td class="p-2 md:p-3 border-x border-dashed border-purple-800 space-y-2">
          <div class="flex flex-col md:flex-row md:justify-between">
            <div>
              <div class="flex space-x-1">
                <span class="block mt-0 space-x-1 text-[11px]">
                  <span class="bg-orange-300 border border-orange-600 p-0.5 rounded">
                    {props.rsc.category}
                  </span>
                  <span class=" bg-gray-300 border border-gray-600 p-0.5 rounded">
                    <b>ID:</b> OffK{props.rsc.id}
                  </span>
                </span>
                <span class="w-fit">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-5 text-red-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg> */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-5 text-gray-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div class="block my-1.5 text-gray-600 space-x-1">
                <b class="text-purple-900">{props.rsc.item}:</b>
                <span>{props.rsc.description}</span>
              </div>
              <div class="space-x-1 flex">
                <span>
                  <img src={naira} class="h-5"/>
                </span>
                <span class="text-black mt-0 font-semibold">
                  {props.rsc.price}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td class="p-3 md:px-3 text-xs -space-y-0.5">
          <span class="block text-center">Chat</span>
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
        </td>
      </tr>
    </>
  );
}

export default PostTr;
