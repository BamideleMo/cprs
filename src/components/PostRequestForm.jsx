import { createSignal } from "solid-js";
import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import { Select } from "./Select";

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

  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    // await doLogin(formData().username, "1234");
  };
  return (
    <>
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
    </>
  );
}

export default PostRequestForm;
