import { A } from "@solidjs/router";
import { Show } from "solid-js";
import Logo from "./Logo";
import Close from "./icons/Close";

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
      md:space-y-0 md:space-x-4 lg:space-x-12"
          >
            <li>
              <A href="/faqs" class="cursor-pointer hover:opacity-60">
                FAQs
              </A>
            </li>
            <li>
              <A href="/terms" class="cursor-pointer hover:opacity-60">
                Ts & Cs
              </A>
            </li>
            <li>
              <A href="/safety" class="cursor-pointer hover:opacity-60">
                Safety Tips
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
      <div>
        <div class="mt-20">&nbsp;</div>
        <div class="bg-black text-gray-200 border-t px-2 flex items-center bottom-0 left-0 right-0 fixed h-20 overflow-hidden">
          <div class="w-full px-1 sm:w-[620px] mx-auto">
            <div class=" text-yellow-400">Advertisement:</div>
            <div>
              Sweet gist by students & for students of UNIABUJA every Saturday
              on:{" "}
              <a href="#" class="text-purple-400 hover:opacity-100 opacity-60">
                gist.offk.ng
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
