import { A } from "@solidjs/router";
import { Match, Show, Switch } from "solid-js";
import Logo from "./Logo";
import { createEffect, createSignal } from "solid-js";
import { Select } from "./Select";

function Header() {
  const [showWhichUni, setShowWhichUni] = createSignal(false);
  const [showMenu, setShowMenu] = createSignal(false);
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
      <Show when={showMenu()}>
        <div class="fixed z-40 bg-slate-900 bg-opacity-90 flex items-center h-screen w-screen top-0 bottom-0 left-0 right-0">
          <div class="w-11/12 sm:w-[360px] mx-auto bg-white p-4 rounded-lg">
            <h2 class="font-normal mb-4 border-b pb-4 flex justify-between">
              <div class="text-xl text-purple-800">&nbsp;</div>
              <div
                onClick={() => setShowMenu(false)}
                class="-mt-0.5 text-gray-400 hover:opacity-60 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </h2>
            <div class="space-y-6">
              <A
                href="/what-is-offk"
                class="block bg-purple-50 hover:opacity-60 p-2 rounded border"
              >
                <b class="text-purple-800">About OffK.ng</b>
                <br />
                OffK.ng is a simple website where students can post and find
                hostel items for sale. <u>Learn more</u>.
              </A>
              <A
                href="/gists"
                class="block bg-purple-50 hover:opacity-60 p-2 rounded border"
              >
                <b class="text-purple-800">OffK Convos</b>
                <br />
                Interesting and informative conversations about happenings on
                campus. <u>See latest episode</u>.
              </A>
            </div>
          </div>
        </div>
      </Show>
      <header class="py-3 px-2">
        <div class="w-full px-1 sm:w-[620px] lg:w-[900px] xl:w-[1000px] flex justify-between mx-auto">
          <div class="flex flex-col -space-y-2">
            <Logo />
            <Show when={JSON.parse(localStorage.getItem("OffK"))}>
              <A href="/" class="mt-2 text-black text-xs font-normal">
                {JSON.parse(localStorage.getItem("OffK")).uni}
              </A>
            </Show>
          </div>
          <div class="w-fit space-x-6 md:space-x-10 pt-0 md:pt-0 text-sm flex items-center">
            <A
              href="https://newsletter.offk.ng"
              class="hover:opacity-60 uppercase"
            >
              Newsletter
            </A>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
