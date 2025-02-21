import { A } from "@solidjs/router";
import { Match, Show, Switch } from "solid-js";
import FAQs from "./FAQs";
import GetVerified from "./GetVerified";
import Terms from "./Terms";
import Safety from "./Safety";

function PopContent(props) {
  return (
    <div class="">
      <h2 class="border-b border-black pb-3 font-semibold text-xl">
        {props.hd}
      </h2>
      <div class="h overflow-y-auto my-4 md:pr-4">
        <Switch>
          <Match when={props.hd === "Post For Rent"}>1</Match>
          <Match when={props.hd === "Post Request"}>2</Match>
          <Match when={props.hd === "Filter List"}>3</Match>
          <Match when={props.hd === "FAQs"}>
            <FAQs />
          </Match>
          <Match when={props.hd === "Get Verified"}>
            <GetVerified />
          </Match>
          <Match when={props.hd === "Terms & Conditions"}>
            <Terms />
          </Match>
          <Match when={props.hd === "Safety"}>
            <Safety />
          </Match>
        </Switch>
      </div>
    </div>
  );
}

export default PopContent;
