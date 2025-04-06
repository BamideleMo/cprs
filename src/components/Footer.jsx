import { A } from "@solidjs/router";
import { Show } from "solid-js";
import Logo from "./Logo";
import Close from "./icons/Close";
import Advert from "./Advert";

function Footer(props) {
  return (
    <>
      <footer
        class="mt-10 py-10 mx-2 border-t 
      "
      >
        <div class="w-full px-1 sm:w-[620px] flex justify-between mx-auto">
          <ul
            class="flex-1 flex flex-col space-x-0 space-y-4 md:flex-row 
      md:space-y-0 md:space-x-4 lg:space-x-8"
          >
            <li>
              <A
                href="/faqs"
                class="bg-cyan-600 text-white px-2 py-1 rounded-xl hover:opacity-60"
              >
                Saturday Gist
              </A>
            </li>
            <li class="pt-2 md:pt-0">
              <A href="/faqs" class="hover:opacity-60">
                FAQs
              </A>
            </li>
            <li>
              <A href="/terms" class="hover:opacity-60">
                Ts & Cs
              </A>
            </li>
          </ul>
          <div class="flex-1 text-right space-x-1 text-gray-400">
            <div class="md:hidden mb-6">
              <Logo />
            </div>
            <span class="block md:inline">All rights reserved.</span>
            <span class="block md:inline">
              Copyright &copy; {new Date().getUTCFullYear()}.
            </span>
          </div>
        </div>
      </footer>
      {/* <Advert/> */}
    </>
  );
}

export default Footer;
