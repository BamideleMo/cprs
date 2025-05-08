import { A } from "@solidjs/router";
import { Show } from "solid-js";

function PromotedTr(props) {
  return (
    <tr class="border-b border-dashed border-purple-800 bg-purple-100">
      <td colSpan={2} class="">
        <a href={props.link} class="block p-2 md:p-3 pb-4 hover:bg-purple-50">
          <span class="text-red-600">{props.topic}</span>
          <br />
          <span>
            {props.text}&nbsp;
            <span class="text-purple-600">Click here</span>.
          </span>
        </a>
      </td>
    </tr>
  );
}

export default PromotedTr;
