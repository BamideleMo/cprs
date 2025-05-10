import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { createSignal, createEffect } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A, useNavigate } from "@solidjs/router";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import TextInput from "../../components/TextInput";

const schema = z.object({
  pass: z.string().min(1, "*Invalid"),
});

const VITE_PASS = import.meta.env["VITE_PASS_KEY"];

function PostAd1() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const [data, setData] = createSignal("");

  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = createSignal(false);

  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    if (formData().pass === VITE_PASS) {
      var store = {
        user: "admin",
        expiry: new Date().getTime() + 10800000,
      };
      setData(store);
      localStorage.setItem("OffKAdmin", JSON.stringify(data()));

      navigate("/post-ad/2", { replace: true });
      setIsProcessing(false);
    } else {
      navigate("/", { replace: true });
      setIsProcessing(false);
    }
  };

  createEffect(() => {
    if (JSON.parse(localStorage.getItem("OffKAdmin"))) {
      navigate("/post-ad/2", { replace: true });
    }
  });

  return (
    <MetaProvider>
      <Title>Post Add - www.offk.ng</Title>
      <Meta name="description" content="What is off.ng?"></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2">
            <div class="text-center">
              <h2 class="text-lg sm:text-xl sm:mt-2 text-gray-600 leading-tight">
                Post Add
              </h2>
            </div>
            <div class="mt-8 md:mt-12">
              <form autocomplete="off" onSubmit={submit} class="space-y-3 my-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div class="sm:col-span-2">
                    <TextInput
                      label="Passcode:"
                      name="pass"
                      required={true}
                      type="password"
                      formHandler={formHandler}
                    />
                  </div>
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
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default PostAd1;
