import { A } from "@solidjs/router";
import Logo from "./Logo";

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
      md:space-y-0 md:space-x-6 lg:space-x-8"
          >
            <li class="md:pt-0">
              <A href="/how-it-works" class="hover:opacity-60">
                How it works
              </A>
            </li>
            <li class="md:pt-0">
              <A href="/safety" class="hover:opacity-60">
                Safety Rules
              </A>
            </li>
            <li>
              <A href="/terms" class="hover:opacity-60">
                Ts & Cs
              </A>
            </li>
          </ul>
          <div class="flex-1 text-right space-x-1 text-gray-400">
            <div class="md:hidden -mt-1 mb-6">
              <Logo />
            </div>
            <span class="block md:inline">All rights reserved.</span>
            <span class="block md:inline">
              Copyright &copy; {new Date().getUTCFullYear()}.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
