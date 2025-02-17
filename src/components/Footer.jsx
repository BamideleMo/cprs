import { A } from "@solidjs/router";
import { Show } from "solid-js";
import Logo from "./Logo";

function Footer(props) {
  return (
    <footer class="mt-20 py-10 border-t">
      <div class="w-11/12 lg:w-[900px] flex justify-between mx-auto">
        <ul
          class="flex-1 flex flex-col space-x-0 space-y-4 md:flex-row 
      md:space-y-0 md:space-x-4 lg:space-x-12"
        >
          <li>
            <span
              onClick={() => {
                props.setPopup(true);
                props.setPopHd("FAQs");
              }}
              class="cursor-pointer hover:text-orange-500 border-b border-dashed border-orange-500"
            >
              FAQs
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                props.setPopup(true);
                props.setPopHd("Get Verified");
              }}
              class="cursor-pointer hover:text-orange-500 border-b border-dashed border-orange-500"
            >
              Get Verified
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                props.setPopup(true);
                props.setPopHd("Terms & Conditions");
              }}
              class="cursor-pointer hover:text-orange-500 border-b border-dashed border-orange-500"
            >
              Ts & Cs
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                props.setPopup(true);
                props.setPopHd("Safety");
              }}
              class="cursor-pointer hover:text-orange-500 border-b border-dashed border-orange-500"
            >
              Safety
            </span>
          </li>
        </ul>
        <div class="flex-1 text-right space-x-1 text-gray-400">
          <div class="md:hidden mb-6">
            <Logo />
          </div>
          <span class="block md:inline">All rights reserved.</span>
          <span class="block md:inline">
            &copy; {new Date().getUTCFullYear()}.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
