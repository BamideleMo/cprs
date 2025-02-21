import { A } from "@solidjs/router";
import { Show } from "solid-js";
import Badge from "./Badge";
import a1 from "../assets/images/agents/test-user-1.png";

function PostCard(props) {
  return (
    <div
      class={
        props.badge === "verified"
          ? "cursor-pointer hover:bg-purple-50 border-2 border-blue-600 rounded-lg p-2 overflow-hidden"
          : "cursor-pointer hover:bg-purple-50 border-2 border-gray-400 rounded-lg p-2 overflow-hidden"
      }
    >
      <div class="grow grid grid-cols-6 md:grid-cols-4 lg:grid-cols-5 gap-1 space-x-1">
        <div class="w-12 h-12 bg-gray-300 rounded-full overflow-hidden shadow-lg">
          <img src={props.img} class="w-full" />
        </div>
        <div class="col-span-5 md:col-span-3 lg:col-span-4 pt-0.5 space-y-1">
          <div class="flex space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class={
                props.badge === "verified"
                  ? "size-6 -ml-1 text-blue-600"
                  : "size-6 -ml-1 text-gray-200"
              }
            >
              <path
                fill-rule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="mt-0.5">{props.fullname}</span>
          </div>
          <div class="space-x-2 flex text-xs">
            <span class="space-x-0.5">
              <span>Rating</span>
              <span class="bg-green-600 py-0.5 px-1 text-white rounded rounded-bl-none">
                {props.rating}
              </span>
            </span>
            <span>.</span>
            <span class="text-gray-600">{props.rev} reviews</span>
            <span>.</span>
            <span class="text-gray-600 flex space-x-0.5">
              <span>{props.comments}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {/* <div class="text-xs max-h-16 border-y border-gray-100 my-2 py-2 text-gray-400 leading-tight overflow-hidden text-ellipsis">
        {props.bio}
      </div> */}
      <div class="flex justify-between border-t pt-1 mt-2">
        <div class="flex space-x-2">
          <span>Inspection fee:</span>
          <span class="space-x-1">
            <span class="line-through text-red-400">₦{props.fifee}</span>
            <span class="">₦{props.rifee}</span>
          </span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
