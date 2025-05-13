import { createSignal, Match, Switch } from "solid-js";
import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import { A, useNavigate } from "@solidjs/router";
import { Select } from "./Select";
import ProcessingAnimation from "./ProcessingAnimation";

const schema = z.object({
  category: z.string().min(1, "*Invalid"),
  item: z.string().min(1, "*Invalid"),
});

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function FilterForm() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    navigate(
      "/filtered?category=" + formData().category + "&item=" + formData().item,
      { replace: true }
    );
  };

  return (
    <>
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
                  value: "Kitchen Items",
                  label: "Kitchen Items",
                },
                {
                  value: "Accommodation",
                  label: "Accommodation",
                },
                {
                  value: "Food",
                  label: "Food",
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
                    {
                      value: "Refridgerator",
                      label: "Refridgerator",
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
                    {
                      value: "Rug",
                      label: "Rug",
                    },
                    {
                      value: "Reading Lamp",
                      label: "Reading Lamp",
                    },
                  ]}
                  formHandler={formHandler}
                />
              </Match>
              <Match when={formData().category === "Kitchen Items"}>
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
                      value: "Bedspace",
                      label: "Bedspace",
                    },
                    {
                      value: "Room(s)",
                      label: "Room(s)",
                    },
                    {
                      value: "Flat",
                      label: "Flat",
                    },
                  ]}
                  formHandler={formHandler}
                />
              </Match>
              <Match when={formData().category === "Food"}>
                <Select
                  label="Item:"
                  name="item"
                  required={true}
                  options={[
                    { value: "", label: "Select" },
                    {
                      value: "Cooked Food",
                      label: "Cooked Food",
                    },
                    {
                      value: "Foodstuff",
                      label: "Foodstuff",
                    },
                  ]}
                  formHandler={formHandler}
                />
              </Match>
            </Switch>
          </div>
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
