import { A } from "@solidjs/router";
import { Show } from "solid-js";
import Logo from "./Logo";

function Header(props) {
  return (
    <>
      <header class="border-b py-3">
        <div class="w-full px-1 sm:w-[620px] flex justify-between mx-auto">
          <div>
            <Logo />
          </div>
          <div class="w-fit space-x-3 pt-2 text-sm">
            <A href="/agents" class="hover:opacity-60">
              For Agents
            </A>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
