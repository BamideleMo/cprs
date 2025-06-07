import { A } from "@solidjs/router";
import { Match, Show, Switch } from "solid-js";
import Logo from "./Logo";
import { createEffect, createSignal } from "solid-js";
import { Select } from "./Select";

function Header() {
  const [showWhichUni, setShowWhichUni] = createSignal(false);
  const [notAvailable, setNotAvailable] = createSignal(false);

  const doUni = (val) => {
    if (val === "no") {
      setNotAvailable(true);
    } else {
      var store = {
        uni: val,
      };

      localStorage.setItem("OffK", JSON.stringify(store));
      window.location.reload();
    }
  };

  createEffect(() => {
    if (JSON.parse(localStorage.getItem("OffK"))) {
      setShowWhichUni(true);
    } else {
      console.log("No uni");
    }
  });
  return (
    <>
      <Show when={!showWhichUni()}>
        <div class="fixed z-40 bg-slate-900 bg-opacity-90 flex items-center h-screen w-screen top-0 bottom-0 left-0 right-0">
          <div class="w-11/12 sm:w-[360px] mx-auto bg-white p-4 rounded-lg">
            <Switch>
              <Match when={notAvailable()}>
                <h2 class="font-normal text-xl text-purple-800 text-center mb-4 border-b pb-4">
                  We're yet to Launch
                </h2>
                <div class="mt-4 space-y-4 text-gray-600">
                  <p>Hi,</p>
                  <p>
                    We are yet to launch in your university. But we'll launch
                    soon. We're working on it.
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
              <Match when={!notAvailable()}>
                <>
                  <h2 class="font-normal text-xl text-purple-800 text-center mb-4 border-b pb-4">
                    Select Your University
                  </h2>
                  <div class="mt-2 max-h-80 overflow-y-auto space-y-6 text-center">
                    <Select
                      onChange={(e) => {
                        doUni(e.currentTarget.value);
                      }}
                      label="University:"
                      name="item"
                      required={true}
                      options={[
                        { value: "", label: "Select" },
                        {
                          value: "no",
                          label: "Nassarawa State University, Keffi",
                        },
                        {
                          value: "UNIABUJA",
                          label: "University of Abuja",
                        },
                        {
                          value: "no",
                          label: "University of Jos",
                        },
                      ]}
                    />
                  </div>
                </>
              </Match>
            </Switch>
          </div>
        </div>
      </Show>
      <header class="border-b py-3 px-2">
        <div class="w-full px-1 sm:w-[620px] flex justify-between mx-auto">
          <div class="flex flex-col -space-y-2">
            <Logo />
            <Show when={JSON.parse(localStorage.getItem("OffK"))}>
              <A href="/" class="text-black text-xs font-semibold">
                {JSON.parse(localStorage.getItem("OffK")).uni}
              </A>
            </Show>
          </div>
          <div class="w-fit space-x-6 md:space-x-10 pt-3 md:pt-3 text-sm flex">
            <A
              href="/gists"
              class="hover:opacity-60 underline decoration-dashed decoration-purple-600"
            >
              Gists
            </A>
            <A
              href="/what-is-offk"
              class="hover:opacity-60 underline decoration-dashed decoration-purple-600"
            >
              What is OffK?
            </A>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
