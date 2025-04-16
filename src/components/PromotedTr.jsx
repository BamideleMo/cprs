import { A } from "@solidjs/router";
import { Show } from "solid-js";

function PromotedTr(props) {
  return (
    <tr
      class={
        props.bg === "yellow"
          ? "border-b border-dashed border-cyan-800 bg-yellow-100"
          : "border-b border-dashed border-cyan-800 bg-green-200"
      }
    >
      <td colSpan={2} class="">
        <a href={props.link} class="block p-1 md:p-3 hover:bg-cyan-50">
          <b class="text-red-800">{props.topic}</b>
          <br />
          <span>
            {props.text}&nbsp;
            <span class="text-blue-600">Click here</span>.
          </span>
        </a>
      </td>
    </tr>
  );
}

export default PromotedTr;
