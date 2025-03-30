import { A } from "@solidjs/router";
import { Match, Show, Switch } from "solid-js";
import Logo from "./Logo";
import { createEffect, createSignal } from "solid-js";
import ArrowRight from "./icons/ArrowRight";

function Header() {
  const [showWhichUni, setShowWhichUni] = createSignal(false);
  const [notAvailable, setNotAvailable] = createSignal(false);

  const doUni = (val, val2) => {
    if (val2 === "yes") {
      var store = {
        uni: val,
      };

      localStorage.setItem("OffKUni", JSON.stringify(store));
      window.location.reload();
    } else {
      setNotAvailable(true);
    }
  };

  createEffect(() => {
    if (JSON.parse(localStorage.getItem("OffKUni"))) {
      console.log("Yes uni");
      setShowWhichUni(true);
    } else {
      console.log("No uni");
    }
  });
  return (
    <>
      <Show when={!showWhichUni()}>
        <div class="fixed z-40 bg-slate-900 bg-opacity-90 flex items-center h-screen w-screen top-0 bottom-0 left-0 right-0">
          <div class="w-11/12 sm:w-[620px] mx-auto bg-white p-4 rounded-lg">
            <Switch>
              <Match when={notAvailable()}>
                <h2 class="font-normal text-xl text-purple-800 text-center mb-4">
                  We're yet to Launch
                </h2>
                <div class="mt-4 space-y-4 text-gray-600">
                  <p>Hi,</p>
                  <p>
                    We are yet to launch our services in your university. But
                    we'll launch soon. We're working on it.
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
                  <h2 class="font-normal text-xl text-purple-800 text-center mb-4">
                    Select University
                  </h2>
                  <p class="text-gray-600">
                    <b>Student?</b> Select the university you're in.{" "}
                    <b>House Agent?</b> Select the university where you can
                    provide services to students.
                  </p>
                  <div class="border-t mt-2 space-y-6 py-6 h-60 overflow-y-auto">
                    <div
                      onClick={() => doUni("uniabuja", "yes")}
                      class="flex justify-between bg-gray-200 border border-gray-300 p-3 rounded-lg cursor-pointer hover:opacity-60"
                    >
                      <span>University of Abuja (UNIABUJA)</span>
                      <ArrowRight />
                    </div>
                    <div
                      onClick={() => doUni("nsuk", "no")}
                      class="flex justify-between bg-gray-200 border border-gray-300 p-3 rounded-lg cursor-pointer hover:opacity-60"
                    >
                      <span>Nasarawa State University, Keffi (NSUK)</span>
                      <ArrowRight />
                    </div>
                    <div
                      onClick={() => doUni("unijos", "no")}
                      class="flex justify-between bg-gray-200 border border-gray-300 p-3 rounded-lg cursor-pointer hover:opacity-60"
                    >
                      <span>University of Jos (UNIJOS)</span>
                      <ArrowRight />
                    </div>
                  </div>
                </>
              </Match>
            </Switch>
          </div>
        </div>
      </Show>

      <header class="border-b py-3 px-2">
        <div class="w-full px-1 sm:w-[620px] flex justify-between mx-auto">
          <div>
            <Logo />
          </div>
          <div class="w-fit space-x-10 pt-2 text-sm flex">
            <A href="/how-it-works">How it works</A>
            <Show
              when={JSON.parse(localStorage.getItem("OffKUser"))}
              fallback={
                <A href="/agents" class="hover:opacity-60">
                  For Agents
                </A>
              }
            >
              <>
                <span class="space-x-1">
                  <span class="text-gray-400">U</span>
                  <A href="/dashboard" class="hover:opacity-60">
                    Dashboard
                  </A>
                </span>
              </>
            </Show>
            {/* <A href="/buy-sell">Buy & Sell</A> */}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
