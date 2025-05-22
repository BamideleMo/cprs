import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import { A, useNavigate } from "@solidjs/router";
import TextInput from "./TextInput";

const schema = z.object({
  search: z.string().min(1, "*Invalid"),
});

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function SearchForm() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    navigate("/searched?search=" + formData().search, { replace: true });
  };

  return (
    <>
      <form autocomplete="off" onSubmit={submit} class="space-y-3 my-4">
        <div>
          <TextInput
            label="Search:"
            name="search"
            required={true}
            type="text"
            formHandler={formHandler}
            placeholder="What are you searching for?"
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
                  Search
                </button>
              </>
            }
          >
            <button
              disabled
              class="bg-gray-600 rounded-lg w-full px-2 h-12 text-center cursor-not-allowed"
            >
              Search
            </button>
          </Show>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
