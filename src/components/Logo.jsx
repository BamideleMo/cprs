import { A } from "@solidjs/router";
import { Show } from "solid-js";

function Logo(props) {
  return (
    <A href="/" class="boldTxt text-black font-semibold text-3xl">
      On<span class="text-purple-800">C</span>
    </A>
  );
}

export default Logo;
