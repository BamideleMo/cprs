import { A } from "@solidjs/router";
import { Show } from "solid-js";

function Logo(props) {
  return (
    <A href="/" class="boldTxt text-black font-semibold text-3xl">
      Uni<span class="text-purple-800">Post</span>
    </A>
  );
}

export default Logo;
