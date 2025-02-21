import { A } from "@solidjs/router";
import { Show } from "solid-js";

function Logo(props) {
  return (
    <A href="/" class="text-purple-600 font-semibold text-3xl">
      Off<span class="text-blue-900">K</span>
    </A>
  );
}

export default Logo;
