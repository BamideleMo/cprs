import { A } from "@solidjs/router";
import { Match, Show, Switch } from "solid-js";
import Close from "./icons/Close";
import { createSignal } from "solid-js";
import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import { Select } from "./Select";

const schema = z.object({
  fullname: z.string().min(4, "*Invalid"),
  level: z.string().min(1, "*Invalid"),
  email: z.string().email("*Invalid"),
  phone: z.string().length(11, "*Invalid"),
  request: z.string().min(60, "*Too short").max(160, "*Too much"),
});

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Hero(props) {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const [message, setMessage] = createSignal("");
  const [isProcessing, setIsProcessing] = createSignal(false);

  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    // await doLogin(formData().username, "1234");
  };

  const [showModal, setShowModal] = createSignal(false);
  const [modalContent, setModalContent] = createSignal("");

  return (
    <>
      <Show when={showModal()}>
        <div class="fixed z-40 bg-slate-900 bg-opacity-90 flex items-center h-screen w-screen top-0 bottom-0 left-0 right-0">
          <div class="w-11/12 sm:w-[620px] mx-auto">
            <div class="text-right mb-1">
              <span onClick={() => setShowModal(false)}>
                <Close />
              </span>
            </div>
            <div class="bg-white p-4  border-t-8 border-purple-800 py-4">
              <Switch>
                <Match when={modalContent() === "request"}>
                  <h2 class="font-semibold text-xl text-purple-800">
                    Post Request:
                  </h2>
                  <form
                    autocomplete="off"
                    onSubmit={submit}
                    class="space-y-3 my-4"
                  >
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <TextInput
                          label="Fullname:"
                          name="fullname"
                          required={true}
                          type="text"
                          formHandler={formHandler}
                        />
                      </div>
                      <div>
                        <Select
                          label="Current Level:"
                          name="level"
                          required={true}
                          options={[
                            { value: "", label: "Select" },
                            {
                              value: "100",
                              label: "100 Level",
                            },
                            {
                              value: "200",
                              label: "200 Level",
                            },
                            {
                              value: "300",
                              label: "300 Level",
                            },
                            {
                              value: "400",
                              label: "400 Level",
                            },
                            {
                              value: "500",
                              label: "500 Level",
                            },
                            {
                              value: "600",
                              label: "600 Level",
                            },
                            {
                              value: "PG",
                              label: "Postgraduate Level",
                            },
                          ]}
                          formHandler={formHandler}
                        />
                      </div>
                      <div>
                        <TextInput
                          label="Email:"
                          name="email"
                          required={true}
                          type="text"
                          formHandler={formHandler}
                        />
                      </div>
                      <div>
                        <TextInput
                          label="WhatsApp Number:"
                          name="phone"
                          required={true}
                          type="number"
                          formHandler={formHandler}
                          placeholder="You'll be contacted via WhatsApp"
                          pattern="[0-9]*"
                          inputmode="numeric"
                        />
                      </div>
                    </div>
                    <div>
                      <TextArea
                        label="Your Request:"
                        name="request"
                        required={true}
                        type="text"
                        formHandler={formHandler}
                        placeholder="Include details like the location you want, budget, accommodation type, urgency, etc."
                      />
                    </div>
                    <div class="text-white">
                      <Show
                        when={formHandler.isFormInvalid()}
                        fallback={
                          <>
                            <Show
                              when={isProcessing()}
                              fallback={
                                <button
                                  type="submit"
                                  class="bg-black rounded-lg w-full px-2 h-12 text-center hover:opacity-60"
                                >
                                  Submit
                                </button>
                              }
                            >
                              <button
                                disabled
                                class="bg-gray-600 rounded-lg cursor-none w-full px-2 h-12 text-center animate-pulse"
                              >
                                Posting.. .
                              </button>
                            </Show>
                          </>
                        }
                      >
                        <button
                          disabled
                          class="bg-gray-600 rounded-lg w-full px-2 h-12 text-center cursor-not-allowed"
                        >
                          Submit
                        </button>
                      </Show>
                    </div>
                  </form>
                </Match>
                <Match when={modalContent() === "how"}>
                  <h2 class="font-semibold text-xl text-purple-800">
                    How it Works:
                  </h2>
                  <div class="space-y-4 my-4">
                    <ul class="space-y-6">
                      <li class="flex flex-col space-y-2">
                        <b class="text-base">1️⃣ Post Your Request:</b>
                        <span>
                          Tell us what kind of accommodation you need by
                          clicking the "Post Request" button. Fill the simple
                          form & include details like budget, the location you
                          want, house type, etc.
                        </span>
                      </li>
                      <li class="flex flex-col space-y-2">
                        <b class="text-base">
                          2️⃣ Wait for Agents to Contact You:
                        </b>
                        <span>
                          Your request is instantly visible to a group of
                          verified & trusted house agents.
                          <br />
                          The agents with suitable apartments for you, will then
                          contact you via WhatsApp chat.
                        </span>
                      </li>
                      <li class="flex flex-col space-y-2">
                        <b class="text-base">3️⃣ Secure Apartment:</b>
                        <span>
                          Visit apartments, conclude transaction, and secure
                          your new home!
                        </span>
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
        <h1 class="text-xl sm:text-4xl font-semibold">
          The Simplest Way to Find
          <br class="" />
          Off-Campus Accommodation.
        </h1>
        <h2 class="text-lg sm:text-xl mt-2 sm:mt-2 text-gray-600">
          Agents Come to You!
        </h2>
        <div class="pt-6 space-x-4">
          <span
            onClick={() => {
              setShowModal(true);
              setModalContent("request");
            }}
            class="cursor-pointer border border-purple-800 bg-purple-800 text-white p-2 rounded-lg hover:opacity-60"
          >
            Post Request
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
      </div>
    </>
  );
}

export default Hero;
