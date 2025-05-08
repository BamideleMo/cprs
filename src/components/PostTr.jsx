import { A } from "@solidjs/router";
import { Match, Show, Switch } from "solid-js";

function PostTr(props) {
  const getWhatsApp = (id) => {
    console.log(id);
  };

  return (
    <tr
      onClick={() => getWhatsApp(props.rsc.id)}
      class="border-b border-dashed border-purple-800 hover:bg-purple-50 cursor-pointer"
    >
      <td class="p-2 md:p-3 text-xs">
        {props.rsc.days === 0 ? (
          <span class="capitalize">Today</span>
        ) : props.rsc.days <= 1 ? (
          props.rsc.days + " day ago"
        ) : (
          props.rsc.days + " days ago"
        )}
      </td>
      <td class="p-2 md:p-3 border-l border-dashed border-purple-800 space-y-2">
        <span class="text-[11px] text-gray-400">
          <b>ID:</b> OffK{props.rsc.id}
        </span>
        <span class="block space-x-2 text-xs">
          <Switch>
            <Match when={props.rsc.type === "Accommodation"}>
              <span class="bg-blue-300 border border-blue-600 p-0.5 rounded">
                {props.rsc.type}
              </span>
            </Match>
            <Match when={props.rsc.type === "For Sale"}>
              <span class="bg-orange-300 border border-orange-600 p-0.5 rounded">
                {props.rsc.type}
              </span>
            </Match>
          </Switch>
          <span class="space-x-1 bg-gray-300 border border-gray-400 p-0.5 rounded">
            <b>
              {props.rsc.category === "Accommodation" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4 inline -mt-0.5 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                  />
                </svg>
              ) : (
                props.rsc.category + ":"
              )}
            </b>
            <span>{props.rsc.item}</span>
          </span>
        </span>
        <span class="block text-gray-600">
          <span>{props.rsc.description}</span>
          <span class="block text-purple-600 text-xs">Chat on WhatsApp</span>
        </span>
      </td>
    </tr>
  );
}

export default PostTr;
