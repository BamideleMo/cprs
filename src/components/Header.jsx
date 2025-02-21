import { A } from "@solidjs/router";
import { Show } from "solid-js";
import Logo from "./Logo";
import { createSignal } from "solid-js";
import Popup from "./PopContent";

function Header(props) {
  return (
    <>
      <header class="border-b py-3">
        <div class="w-11/12 lg:w-[900px] flex justify-between mx-auto">
          <div>
            <Logo />
          </div>
          <div class="w-fit space-x-3 pt-2.5 uppercase text-xs">
            <span
              onClick={() => {
                props.setPopup(true);
                props.setPopHd("Post For Rent");
              }}
              class="cursor-pointer bg-blue-900 hover:opacity-60 text-white p-3 rounded-full"
            >
              Gist
            </span>
            <span
              onClick={() => {
                props.setPopup(true);
                props.setPopHd("Post Request");
              }}
              class="cursor-pointer bg-purple-600 hover:opacity-60 text-white p-3 rounded-full"
            >
              Make Request
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
