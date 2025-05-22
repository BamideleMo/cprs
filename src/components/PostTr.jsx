import { A } from "@solidjs/router";
import { Show, Switch, createSignal } from "solid-js";
import Loading from "./Loading";
import ProcessingAnimation from "./ProcessingAnimation";
import Close from "./icons/Close";

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
        class="border-b border-dashed border-purple-800 hover:bg-purple-50 cursor-pointer"
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
        <td class="p-2 md:p-3 border-l border-dashed border-purple-800 space-y-2">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-4 mt-2.5 text-gray-300"
              >
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
            </span>
          </div>
          <span class="block text-gray-600">
            <span>{props.rsc.description}</span>
            <span class="block text-purple-600 text-xs">Chat on WhatsApp</span>
          </span>
        </td>
      </tr>
    </>
  );
}

export default PostTr;
