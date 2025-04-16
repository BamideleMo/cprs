import { A } from "@solidjs/router";
import { Show } from "solid-js";

function Logo(props) {
  return (
    <A href="/" class="text-black font-semibold text-2xl">
      Hostel<span class="text-cyan-800">Sell</span>
    </A>
  );
}

export default Logo;
