import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function BuySell() {
  return (
    <MetaProvider>
      <Title>Buy & Sell - www.offk.ng</Title>
      <Meta
        name="description"
        content="List of hostel items available for sale on OffK.ng"
      ></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2 text-left">
            <h1 class="text-xl sm:text-3xl font-semibold space-y-0">
              <div>Buy & Sell</div>
            </h1>
            <h2 class="text-lg sm:text-xl mt-4 sm:mt-4 text-gray-600 leading-tight">
              A simple table that shows hostel-centric items available for sale
              to students in{" "}
              <span class="uppercase">
                {JSON.parse(localStorage.getItem("OffKUni")).uni}
              </span>
              :
            </h2>
            <h3 class="mt-4">
              <b>Want to sell an item?</b>{" "}
              <span class="border-b-4 border-purple-700 hover:opacity-60 cursor-pointer">
                Post it now
              </span>
            </h3>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 text-gray-400 mx-auto mt-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                />
              </svg>
            </div>

            <div class="mt-8 sm:mt-12 flex justify-between">
              <h2 class="text-base sm:text-lg font-normal">Items for sale:</h2>
              <div class="flex space-x-6 pt-1">
                <span class="flex items-center text-xs bg-black text-white px-2 rounded hover:opacity-60 cursor-pointer">
                  Filter
                </span>
              </div>
            </div>
            <div class="mt-2 space-y-6 text-xs lg:text-sm">
              <table cellpadding="0" cellspacing="0" class="w-full">
                <thead>
                  <tr class="font-normal bg-purple-700 text-white space-x-1">
                    <td class="w-16 lg:w-20 p-1 lg:p-3 rounded-tl-lg">
                      Posted
                    </td>
                    <td class="p-1 lg:p-3 border-x border-dashed border-purple-400">
                      Item Desc.
                    </td>
                    <td class="w-10 p-1 lg:p-3 rounded-tr-lg">Chat</td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-dashed border-purple-400">
                    <td class="p-1 lg:p-3">Today</td>
                    <td class="p-1 lg:p-3 pt-3 border-x border-dashed border-purple-400 space-y-2">
                      <span class="block space-x-2 text-xs">
                        <span class="space-x-1 bg-gray-200 border border-gray-300 p-0.5 rounded">
                          <b>Gadget:</b>
                          <span>Phone</span>
                        </span>
                        <span class="space-x-1 bg-gray-200 border border-gray-300 p-0.5 rounded">
                          <b>ID:</b>
                          <span>OffK1</span>
                        </span>
                      </span>
                      <span class="block text-gray-600">
                        Bring 125k for Samsung S3. Clean and working perfectly.
                      </span>
                    </td>
                    <td class="p-1 lg:p-3">
                      <a
                        href="#"
                        class="bg-green-300 text-green-900 p-1 rounded-md hover:opacity-60"
                      >
                        Chat
                      </a>
                    </td>
                  </tr>
                  <tr class="border-b border-dashed border-purple-400">
                    <td class="p-1 lg:p-3">3 days ago</td>
                    <td class="p-1 lg:p-3 pt-3 border-x border-dashed border-purple-400 space-y-2">
                      <span class="block space-x-2 text-xs">
                        <span class="space-x-1 bg-gray-200 border border-gray-300 p-0.5 rounded">
                          <b>Gadget:</b>
                          <span>Laptop</span>
                        </span>
                        <span class="space-x-1 bg-gray-200 border border-gray-300 p-0.5 rounded">
                          <b>ID:</b>
                          <span>OffK2</span>
                        </span>
                      </span>
                      <span class="block text-gray-600">
                        HP Probook is available for sale at student price. Chat
                        me for pictures & price
                      </span>
                    </td>
                    <td class="p-1 lg:p-3">
                      <a
                        href="#"
                        class="bg-green-300 text-green-900 p-1 rounded-md hover:opacity-60"
                      >
                        Chat
                      </a>
                    </td>
                  </tr>
                  <tr class="border-b border-dashed border-purple-400">
                    <td class="p-1 lg:p-3">15 days ago</td>
                    <td class="p-1 lg:p-3 pt-3 border-x border-dashed border-purple-400 space-y-2">
                      <span class="block space-x-2 text-xs">
                        <span class="space-x-1 bg-gray-200 border border-gray-300 p-0.5 rounded">
                          <b>Furniture:</b>
                          <span>Mattress</span>
                        </span>
                        <span class="space-x-1 bg-gray-200 border border-gray-300 p-0.5 rounded">
                          <b>ID:</b>
                          <span>OffK1</span>
                        </span>
                      </span>
                      <span class="block text-gray-600">
                        I have 4 by 6 mattress in good condition. 40K
                      </span>
                    </td>
                    <td class="p-1 lg:p-3">
                      <a
                        href="#"
                        class="bg-green-300 text-green-900 p-1 rounded-md hover:opacity-60"
                      >
                        Chat
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default BuySell;
