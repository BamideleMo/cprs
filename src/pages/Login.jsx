import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";

const schema = z.object({
  email: z.string().email("*Invalid"),
  password: z.string().min(8, "*Invalid"),
});

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Login() {
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
    <MetaProvider>
      <Title>Log In - www.offk.ng</Title>
      <Meta
        name="description"
        content="Log In to access Ready-to-Rent students actively looking for off-campus accommodation."
      ></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2 text-left">
            <h1 class="text-xl sm:text-3xl font-semibold space-y-0">Welcome</h1>
            <h2 class="text-lg sm:text-xl mt-4 sm:mt-4 text-gray-600 leading-tight">
              Please Log In!
            </h2>
            <div class="sm:my-6 space-y-3">
              <p>
                Don't have an account?{" "}
                <A
                  href="/create-account"
                  class="text-purple-600 hover:opacity-60"
                >
                  Create Account
                </A>
              </p>
              <form
                autocomplete="off"
                onSubmit={submit}
                class="space-y-6 border border-gray-200 p-4"
              >
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <PasswordInput
                      label="Password:"
                      name="password"
                      required={true}
                      passId="pass1"
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

export default Login;
