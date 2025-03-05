import { A } from "@solidjs/router";
import { Show } from "solid-js";

function Requests() {
  return (
    <>
      <div class="mt-8 sm:mt-24">
        <div class="flex justify-between mx-4 mb-4">
          <h2 class="text-base sm:text-2xl font-semibold">👋 Students Requests:</h2>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 sm:size-8 sm:-mt-0.5 text-black cursor-pointer hover:opacity-60"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <div class="mx-4 space-y-4">
          <div class="border border-gray-300 bg-gray-50 p-3 rounded-lg hover:bg-purple-200 cursor-pointer">
            <span class="text-gray-600">Moses&nbsp;in&nbsp;200 Level:</span>
            <br />I am looking for 1 room self contained around the main gate.
          </div>
          <div class="border border-gray-300 bg-gray-50 p-3 rounded-lg hover:bg-purple-200 cursor-pointer">
            <span class="text-gray-600">
              Rose Bello Odigi&nbsp;in&nbsp;400 Level:
            </span>
            <br />
            In need of room anywhere around the school back gate please. It is
            very urgent.
          </div>
          <div class="border border-gray-300 bg-gray-50 p-3 rounded-lg hover:bg-purple-200 cursor-pointer">
            <span class="text-gray-600">Bala&nbsp;in&nbsp;500 Level:</span>
            <br />
            I'm looking for 2 rooms any area close to school. I will pay
            immediately.
          </div>
        </div>
      </div>
    </>
  );
}

export default Requests;
