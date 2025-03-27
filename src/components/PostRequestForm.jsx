import { createSignal, Match, Switch } from "solid-js";
import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import { Select } from "./Select";
import submittingImg from "../assets/submitting.gif";

const schema = z.object({
  level: z.string().min(1, "*Invalid"),
  phone: z.string().length(11, "*Invalid"),
  request: z.string().min(60, "*Too short").max(160, "*Too much"),
});

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function PostRequestForm() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const [message, setMessage] = createSignal("");
  const [isProcessing, setIsProcessing] = createSignal(false);
  const [success, setSuccess] = createSignal(false);

  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    await doPost();
  };

  const doPost = async () => {
    try {
      const response = await fetch(VITE_API_URL + "/open/api/create-post", {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          level: formData().level,
          number: formData().phone,
          request: formData().request,
          uni: JSON.parse(localStorage.getItem("OffKUni")).uni,
        }),
      });
      const result = await response.json();
      if (!result.success) {
        setMessage(result.response);
        setIsProcessing(false);
      } else {
        setIsProcessing(false);
        setSuccess(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Switch>
        <Match when={success()}>
          <div class="mt-4 space-y-4">
            <div class="h-16 w-16 text-3xl border-2 border-green-600 text-center rounded-full pt-3">
              👍🏽
            </div>
            <p>Your request has been successfully posted!</p>
            <p>
              <b>What next?</b>
            </p>
            <p>
              Wait for Agents to Chat You. If any of them has a suitable
              property, he/she will chat you on WhatsApp.
            </p>
            <p>
              Depending on availability, agents will typically respond within a
              few hours to a few days from now.
            </p>
            <p class="pb-4 pt-2">
              <span
                onClick={() => window.location.reload()}
                class="bg-black p-2 rounded-lg text-white cursor-pointer hover:opacity-60"
              >
                Okay
              </span>
            </p>
          </div>
        </Match>
        <Match when={isProcessing()}>
          <img src={submittingImg} class="mx-auto h-36" />
        </Match>
        <Match when={!success()}>
          <form autocomplete="off" onSubmit={submit} class="space-y-3 my-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                label="Request:"
                name="request"
                required={true}
                type="text"
                formHandler={formHandler}
                placeholder="Include details like your gender, the location you want, budget, accommodation type, urgency, etc."
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
      </Switch>
    </>
  );
}

export default PostRequestForm;
