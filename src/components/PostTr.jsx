import { A } from "@solidjs/router";
import { Show, Switch, createSignal } from "solid-js";
import Loading from "./Loading";
import ProcessingAnimation from "./ProcessingAnimation";
import Close from "./icons/Close";
import chat from "../assets/whatsapp.png";

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
        <td class="p-2 md:p-3 text-xs">
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
              <div class="flex justify-between">
                <span class="block w-fit mt-2 space-x-1 text-[11px]">
                  <span class="space-x-1 bg-orange-300 border border-orange-600 p-0.5 rounded">
                    <b>{props.rsc.category + ":"}</b>
                    <span>{props.rsc.item}</span>
                  </span>
                  <span class=" bg-gray-300 border border-gray-600 p-0.5 rounded">
                    <b>ID:</b> OffK{props.rsc.id}
                  </span>
                </span>
                <span>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-6 text-green-600 mt-1 -mr-1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 text-gray-400 mt-1.5 -mb-1 -mr-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
                    />
                  </svg>
                </span>
              </div>
              <span class="block mt-2 text-gray-600">
                <span>{props.rsc.description}</span>
              </span>
            </div>
          </div>
        </td>
        <td class="p-3 md:px-3 text-xs">
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
