import { A } from "@solidjs/router";
import { Show } from "solid-js";

function Requests() {
  return (
    <>
      <div class="mt-12 sm:mt-24">
        <div class="flex justify-between mx-4 mb-1">
          <h2 class="text-lg sm:text-xl font-semibold">
            👋 Students Requests:
          </h2>
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
          <div class="space-y-2 border border-gray-300 bg-gray-50 p-3 rounded-lg hover:bg-purple-100 cursor-pointer">
            <div class="flex space-x-2 text-xs text-gray-600 lowercase">
              <span class="bg-gray-200 border border-gray-300 py-0.5 px-1 rounded-full">
                2 Days Ago
              </span>
              <span class="bg-gray-200 border border-gray-300 py-0.5 px-1 rounded-full">
                200 level student
              </span>
            </div>
            <div>
              I am looking for 1 room self contained around the main gate.
            </div>
          </div>
          <div class="space-y-2 border border-gray-300 bg-gray-50 p-3 rounded-lg hover:bg-purple-100 cursor-pointer">
            <div class="flex space-x-2 text-xs text-gray-600 lowercase">
              <span class="bg-gray-200 border border-gray-300 py-0.5 px-1 rounded-full">
                23 Days Ago
              </span>
              <span class="bg-gray-200 border border-gray-300 py-0.5 px-1 rounded-full">
                400 level student
              </span>
            </div>
            <div>
              In need of room anywhere around the school back gate please. It is
              very urgent.
            </div>
          </div>
          <div class="space-y-2 border border-gray-300 bg-gray-50 p-3 rounded-lg hover:bg-purple-100 cursor-pointer">
            <div class="flex space-x-2 text-xs text-gray-600 lowercase">
              <span class="bg-gray-200 border border-gray-300 py-0.5 px-1 rounded-full">
                29 Days Ago
              </span>
              <span class="bg-gray-200 border border-gray-300 py-0.5 px-1 rounded-full">
                400 level student
              </span>
            </div>
            <div>
              I'm looking for 2 rooms any area close to school. I will pay
              immediately.
            </div>
          </div>
          <div class="space-y-2 border border-gray-300 bg-gray-50 p-3 rounded-lg hover:bg-purple-100 cursor-pointer">
            <div class="flex space-x-2 text-xs text-gray-600 lowercase">
              <span class="bg-gray-200 border border-gray-300 py-0.5 px-1 rounded-full">
                30 Days Ago
              </span>
              <span class="bg-gray-200 border border-gray-300 py-0.5 px-1 rounded-full">
                400 level student
              </span>
            </div>
            <div>
              I and my friends are looking for 2 bedroom flat. Should be at most
              1 drop from main campus. Very URGENT pls.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Requests;
