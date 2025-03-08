import { A } from "@solidjs/router";
import { Show } from "solid-js";
import Logo from "./Logo";
import Close from "./icons/Close";

function Footer(props) {
  return (
    <>
      <footer class="mt-10 py-10 mx-2 border-t mb-28">
        <div class="w-full px-1 sm:w-[620px] flex justify-between mx-auto">
          <ul
            class="flex-1 flex flex-col space-x-0 space-y-4 md:flex-row 
      md:space-y-0 md:space-x-4 lg:space-x-12"
          >
            <li>
              <A
                href="/faqs"
                class="cursor-pointer hover:text-purple-800 border-b border-dashed border-purple-800"
              >
                FAQs
              </A>
            </li>
            <li>
              <A
                href="/terms"
                class="cursor-pointer hover:text-purple-800 border-b border-dashed border-purple-800"
              >
                Ts & Cs
              </A>
            </li>
            <li>
              <A
                href="/safety"
                class="cursor-pointer hover:text-purple-800 border-b border-dashed border-purple-800"
              >
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
      <div class="bg-blue-50 border-t border-blue-300 px-2 py-4 bottom-0 left-0 right-0 fixed h-28">
        <div class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="font-semibold">Ad:</div>
          <div>
            Read the latest news and interviews by students and for students
            published every Saturday on{" "}
            <a href="#" class="text-blue-600 font-semibold">
              OffK Weekly
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
