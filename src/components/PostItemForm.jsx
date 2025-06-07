import { createSignal, Match, Switch } from "solid-js";
import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import { Select } from "./Select";
import ProcessingAnimation from "./ProcessingAnimation";

const schema = z.object({
  category: z.string().min(1, "*Invalid"),
  item: z.string().min(1, "*Invalid"),
  price: z.string().min(1, "*Invalid"),
  number: z.string().length(11, "*Invalid"),
  description: z.string().min(60, "*Too short").max(100, "*Too much"),
});

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function PostItemForm() {
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
      const response = await fetch(VITE_API_URL + "/open/api/create-listing", {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          category: formData().category,
          item: formData().item.trimEnd(),
          number: formData().number.trimEnd(),
          description: formData().description,
          price: formData().price,
          uni: JSON.parse(localStorage.getItem("OffK")).uni,
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
            <p>Item successfully posted!</p>
            <p>
              <b>What next?</b>
            </p>
            <p>
              Wait a bit... students in need of the item wil Chat you on
              WhatsApp.
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
          <ProcessingAnimation />
        </Match>
        <Match when={!success()}>
          <form autocomplete="off" onSubmit={submit} class="space-y-3 my-4">
            <div>
              <Select
                label="Category:"
                name="category"
                required={true}
                options={[
                  { value: "", label: "Select" },
                  {
                    value: "Gadgets & Electronics",
                    label: "Gadgets & Electronics",
                  },
                  {
                    value: "Furniture",
                    label: "Furniture",
                  },
                  {
                    value: "Kitchen Items",
                    label: "Kitchen Items",
                  },
                  {
                    value: "Foodstuff",
                    label: "Foodstuff",
                  },
                  {
                    value: "Books & Study",
                    label: "Books & Study",
                  },
                  {
                    value: "Accommodation",
                    label: "Accommodation",
                  },
                ]}
                formHandler={formHandler}
              />
            </div>
            <div class="grid grid-cols-2 gap-1">
              <div>
                <TextInput
                  label="Item:"
                  name="item"
                  required={true}
                  type="text"
                  formHandler={formHandler}
                  placeholder="e.g. 6kg Gas Cylinder"
                />
              </div>
              <div>
                <TextInput
                  label="Price:"
                  name="price"
                  required={true}
                  type="text"
                  formHandler={formHandler}
                  placeholder="e.g. 25k - Negotiable"
                />
              </div>
            </div>
            <div>
              <TextInput
                label="WhatsApp Number:"
                name="number"
                required={true}
                type="number"
                formHandler={formHandler}
                placeholder="You'll be contacted via WhatsApp"
                pattern="[0-9]*"
                inputmode="numeric"
              />
            </div>
            <div>
              <TextArea
                label="Description:"
                name="description"
                required={true}
                type="text"
                formHandler={formHandler}
                placeholder="Include useful details about the deal"
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
                          Post
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
                  Post
                </button>
              </Show>
            </div>
          </form>
        </Match>
      </Switch>
    </>
  );
}

export default PostItemForm;
