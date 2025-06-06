import { createSignal, Match, Switch } from "solid-js";
import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import { A, useNavigate } from "@solidjs/router";
import { Select } from "./Select";
import ProcessingAnimation from "./ProcessingAnimation";

const schema = z.object({
  category: z.string().min(1, "*Invalid"),
});

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function FilterForm() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    navigate("/filtered?category=" + formData().category, { replace: true });
  };

  return (
    <>
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
              {
                value: "Other Hostel Items",
                label: "Other Hostel Items",
              },
            ]}
            formHandler={formHandler}
          />
        </div>
        <div class="text-white">
          <Show
            when={formHandler.isFormInvalid()}
            fallback={
              <>
                <button
                  type="submit"
                  class="bg-black rounded-lg w-full px-2 h-12 text-center hover:opacity-60"
                >
                  Filter
                </button>
              </>
            }
          >
            <button
              disabled
              class="bg-gray-600 rounded-lg w-full px-2 h-12 text-center cursor-not-allowed"
            >
              Filter
            </button>
          </Show>
        </div>
      </form>
    </>
  );
}

export default FilterForm;
