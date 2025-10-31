import { A } from "@solidjs/router";
import Logo from "./Logo";

function Footer(props) {
  return (
    <>
      <footer
        class="mt-10 py-10 mx-2 border-t 
      "
      >
        <div class="w-full px-1 sm:w-[620px] lg:w-[900px] xl:w-[1000px] flex justify-between mx-auto">
          <div class="w-44 space-x-1 text-gray-400">
            {/* <div class="md:hidden -mt-1 mb-0">
              <Logo />
            </div>
            <span class="block mb-6 md:hidden leading-tight">
              <span class="text-black">
                FIND & POST Accommodation, Events, & Items for Sale.
              </span>{" "}
              <span class="block">
                For {JSON.parse(localStorage.getItem("OffK")).uni} Students.{" "}
                <br />
                Easy & Fast!
              </span>
            </span> */}
            <span class="block md:inline">
              Copyright &copy; {new Date().getUTCFullYear()}.
            </span>
          </div>
          <ul
            class="w-fit flex flex-row space-x-6 space-y-0 md:flex-row 
      md:space-y-0 md:space-x-6 lg:space-x-8  text-right"
          >
            {/* <li class="md:pt-0">
              <A
                href="/faqs"
                class="hover:opacity-60 underline decoration-dashed decoration-purple-600"
              >
                FAQs
              </A>
            </li> */}
            {/* <li class="">
              <A
                href="/safety"
                class="hover:opacity-60 underline decoration-dashed decoration-purple-600"
              >
                Safety Rules
              </A>
            </li> */}
            <li class="">
              <A
                href="/report"
                class="hover:opacity-60 underline decoration-dashed decoration-purple-600"
              >
                Report
              </A>
            </li>
            <li>
              <A
                href="/terms"
                class="hover:opacity-60 underline decoration-dashed decoration-purple-600"
              >
                Terms of use
              </A>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
