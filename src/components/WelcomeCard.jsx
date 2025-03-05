import { A } from "@solidjs/router";
import { Show } from "solid-js";
import Badge from "./icons/Close";

function WelcomeCard(props) {
  return (
    <div class="space-y-1 text-black grow border border-yellow-200 bg-yellow-100 bg-opacity-20 p-2 rounded-lg">
      <div class="text-lg text-blue-900">Welcome to OffK.ng</div>
      <div>
        A Fast & Easy Way to Find Off-Campus Accommodation with Trusted House
        Agents!
      </div>
    </div>
  );
}

export default WelcomeCard;
