import { A } from "@solidjs/router";
import { Show } from "solid-js";

function PromotedTr(props) {
  return (
    <tr class="border-b border-dashed border-cyan-800 bg-yellow-200">
      <td colSpan={2} class="">
        <a href={props.link} class="block p-2 md:p-3 hover:bg-cyan-50">
          <b class="text-cyan-600">{props.topic}</b>
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
