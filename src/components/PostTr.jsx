import { A } from "@solidjs/router";
import { Show } from "solid-js";

function PostTr(props) {
  const getWhatsApp = (id) => {
    console.log(id);
  };

  return (
    <tr
      onClick={() => getWhatsApp(props.rsc.id)}
      class="border-b border-dashed border-cyan-800 hover:bg-cyan-50 cursor-pointer"
    >
      <td class="p-1 md:p-3 text-xs">
        {props.rsc.days === 0 ? (
          <span class="capitalize">Today</span>
        ) : props.rsc.days <= 1 ? (
          props.rsc.days + " day ago"
        ) : (
          props.rsc.days + " days ago"
        )}
      </td>
      <td class="p-1 md:p-3 pt-3 border-l border-dashed border-cyan-800 space-y-2">
        <span class="block space-x-2 text-xs">
          <span class="space-x-1 bg-gray-300 border border-gray-400 p-0.5 rounded">
            <b>{props.rsc.category}:</b>
            <span>{props.rsc.item}</span>
          </span>
          <span class="space-x-1 bg-gray-300 border border-gray-400 p-0.5 rounded">
            <b>ID:</b>
            <span>HS{props.rsc.id}</span>
          </span>
        </span>
        <span class="block text-gray-600">
          <span>{props.rsc.description}</span>
          <span class="block text-right text-blue-600 text-xs">
            Chat on WhatsApp
          </span>
        </span>
      </td>
    </tr>
  );
}

export default PostTr;
