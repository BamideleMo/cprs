import { A } from "@solidjs/router";
import { Show } from "solid-js";

function Logo(props) {
  return (
    <A href="/" class="text-black font-semibold text-3xl">
      Off<span class="text-purple-800">K</span>
    </A>
  );
}

export default Logo;
