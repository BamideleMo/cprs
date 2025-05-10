import { createSignal, Match, Switch } from "solid-js";
import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import ProcessingAnimation from "./ProcessingAnimation";

const schema = z.object({
  title: z.string().min(1, "*Invalid"),
  link: z.string().min(1, "*Invalid"),
  description: z.string().min(60, "*Too short").max(160, "*Too much"),
});

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function PostAdvertForm(props) {
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
      const response = await fetch(
        VITE_API_URL + "/open/api/edit-advert/" + props.id,
        {
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            uni: props.id.slice(0, -1),
            link: formData().link,
            title: formData().title,
            description: formData().description,
          }),
        }
      );
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
            <p>Advert posted!</p>

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
          <ProcessingAnimation />
        </Match>
        <Match when={!success()}>
          <form autocomplete="off" onSubmit={submit} class="space-y-3 my-4">
            <div>
              <TextInput
                label="Custom Id.:"
                name="cid"
                required={true}
                type="text"
                value={props.id}
                disabled
              />
            </div>
            <div>
              <TextInput
                label="Title:"
                name="title"
                required={true}
                type="text"
                formHandler={formHandler}
              />
            </div>
            <div>
              <TextArea
                label="Description:"
                name="description"
                required={true}
                type="text"
                formHandler={formHandler}
                placeholder="Include useful details about the deal."
              />
            </div>
            <div>
              <TextInput
                label="URL:"
                name="link"
                required={true}
                type="url"
                formHandler={formHandler}
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

export default PostAdvertForm;
