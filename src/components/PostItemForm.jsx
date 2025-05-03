import { createSignal, Match, Switch } from "solid-js";
import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import { Select } from "./Select";
import submittingImg from "../assets/submitting.gif";
import ProcessingAnimation from "./ProcessingAnimation";

const schema = z.object({
  category: z.string().min(1, "*Invalid"),
  item: z.string().min(1, "*Invalid"),
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
          item: formData().item,
          number: formData().number,
          description: formData().description,
          uni: JSON.parse(localStorage.getItem("HostelSell")).uni,
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
            <p>Deal successfully posted!</p>
            <p>
              <b>What next?</b>
            </p>
            <p>
              Wait for students in need of the deal to Chat you on WhatsApp.
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
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Select
                  label="Category:"
                  name="category"
                  required={true}
                  options={[
                    { value: "", label: "Select" },
                    {
                      value: "Gadget",
                      label: "Gadget",
                    },
                    {
                      value: "Furniture",
                      label: "Furniture",
                    },
                    {
                      value: "Kitchen",
                      label: "Kitchen",
                    },
                    {
                      value: "Accommodation",
                      label: "Accommodation",
                    },
                  ]}
                  formHandler={formHandler}
                />
              </div>
              <div>
                <Switch>
                  <Match when={formData().category === ""}>
                    <Select
                      label="Item:"
                      name="item"
                      placeholder="Select"
                      required={true}
                      options={[]}
                      formHandler={formHandler}
                    />
                  </Match>
                  <Match when={formData().category === "Gadget"}>
                    <Select
                      label="Item:"
                      name="item"
                      required={true}
                      options={[
                        { value: "", label: "Select" },
                        {
                          value: "Phone",
                          label: "Phone",
                        },
                        {
                          value: "Extension Box",
                          label: "Extension Box",
                        },
                        {
                          value: "Standing Fan",
                          label: "Standing Fan",
                        },
                        {
                          value: "TV",
                          label: "TV",
                        },
                        {
                          value: "Laptop",
                          label: "Laptop",
                        },
                        {
                          value: "Bluetooth Speaker",
                          label: "Bluetooth Speaker",
                        },
                        {
                          value: "Home Theater",
                          label: "Home Theater",
                        },
                      ]}
                      formHandler={formHandler}
                    />
                  </Match>
                  <Match when={formData().category === "Furniture"}>
                    <Select
                      label="Item:"
                      name="item"
                      required={true}
                      options={[
                        { value: "", label: "Select" },
                        {
                          value: "Mattress",
                          label: "Mattress",
                        },
                        {
                          value: "Chair",
                          label: "Chair",
                        },
                        {
                          value: "Table",
                          label: "Table",
                        },
                        {
                          value: "Wardrobe",
                          label: "Wardrobe",
                        },
                      ]}
                      formHandler={formHandler}
                    />
                  </Match>
                  <Match when={formData().category === "Kitchen"}>
                    <Select
                      label="Item:"
                      name="item"
                      required={true}
                      options={[
                        { value: "", label: "Select" },
                        {
                          value: "Pot",
                          label: "Pot",
                        },
                        {
                          value: "Bucket",
                          label: "Bucket",
                        },
                        {
                          value: "Foodstuff",
                          label: "Foodstuff",
                        },
                        {
                          value: "Gas Cylinder",
                          label: "Gas Cylinder",
                        },
                        {
                          value: "Stove",
                          label: "Stove",
                        },
                      ]}
                      formHandler={formHandler}
                    />
                  </Match>
                  <Match when={formData().category === "Accommodation"}>
                    <Select
                      label="Item:"
                      name="item"
                      required={true}
                      options={[
                        { value: "", label: "Select" },
                        {
                          value: "1 Room",
                          label: "1 Room",
                        },
                        {
                          value: "Flat",
                          label: "Flat",
                        },
                        {
                          value: "Shared Space",
                          label: "Shared Space",
                        },
                      ]}
                      formHandler={formHandler}
                    />
                  </Match>
                </Switch>
              </div>
              <div class="sm:col-span-2">
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

export default PostItemForm;
