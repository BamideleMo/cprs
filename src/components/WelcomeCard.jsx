import { A } from "@solidjs/router";
import { Show } from "solid-js";
import Badge from "./Badge";

function WelcomeCard(props) {
  return (
    <div class="space-y-1 text-black grow border border-yellow-200 bg-yellow-100 bg-opacity-20 p-2 rounded-lg">
      <div class="text-lg font-semibold">Welcome to OffK</div>
      <div>
        A simple online portal for finding off-campus accommodations; easier &
        faster!
      </div>
    </div>
  );
}

export default WelcomeCard;
