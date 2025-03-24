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
              A simple marketplace to buy & sell hostel-centric items posted by
              students in{" "}
              <span class="uppercase">
                {JSON.parse(localStorage.getItem("OffKUni")).uni}
              </span>
              :
            </h2>
            <h3 class="mt-4">
              <b>PS:</b> Want to sell an item?{" "}
              <span class="border-b-4 border-purple-700 hover:opacity-60 cursor-pointer">
                Post it now
              </span>
            </h3>

            <div class="mt-12 flex justify-between">
              <h2 class="text-base sm:text-xl font-normal">Items for sale:</h2>
              <span class="flex items-center text-xs bg-black text-white px-2 rounded hover:opacity-60 cursor-pointer">
                Filter
              </span>
            </div>
            <div class="mt-2 space-y-6 text-xs">
              <table cellpadding="0" cellspacing="0" class="w-full">
                <thead>
                  <tr class="font-normal bg-purple-700 text-white space-x-1">
                    <td class="w-16 p-1 rounded-tl-lg">ID</td>
                    <td class="p-1 border-x border-dashed border-purple-400">
                      Item Desc.
                    </td>
                    <td class="w-10 p-1 rounded-tr-lg">Chat</td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-dashed border-purple-400">
                    <td class="p-1">Today</td>
                    <td class="p-1 pt-3 border-x border-dashed border-purple-400 space-y-2">
                      <span class="block space-x-2">
                        <span class="space-x-1 bg-gray-200 border border-gray-300 p-0.5 rounded">
                          <b>Gadget:</b>
                          <span>Phone</span>
                        </span>
                        <span class="space-x-1 bg-gray-200 border border-gray-300 p-0.5 rounded">
                          <b>ID:</b>
                          <span>OffK1</span>
                        </span>
                      </span>
                      <span class="block">
                        Bring 125k for Samsung S3. Clean and working perfectly.
                      </span>
                    </td>
                    <td class="p-1">
                      <a
                        href="#"
                        class="bg-green-300 text-green-900 p-1 rounded-md hover:opacity-60"
                      >
                        Chat
                      </a>
                    </td>
                  </tr>
                  <tr class="border-b border-dashed border-purple-400">
                    <td class="p-1">3 days ago</td>
                    <td class="p-1 pt-3 border-x border-dashed border-purple-400 space-y-2">
                      <span class="block space-x-2">
                        <span class="space-x-1 bg-gray-200 border border-gray-300 p-0.5 rounded">
                          <b>Gadget:</b>
                          <span>Laptop</span>
                        </span>
                        <span class="space-x-1 bg-gray-200 border border-gray-300 p-0.5 rounded">
                          <b>ID:</b>
                          <span>OffK2</span>
                        </span>
                      </span>
                      <span class="block">
                        HP Probook is available for sale at student price. Chat
                        me for pictures & price
                      </span>
                    </td>
                    <td class="p-1">
                      <a
                        href="#"
                        class="bg-green-300 text-green-900 p-1 rounded-md hover:opacity-60"
                      >
                        Chat
                      </a>
                    </td>
                  </tr>
                  <tr class="border-b border-dashed border-purple-400">
                    <td class="p-1">15 days ago</td>
                    <td class="p-1 pt-3 border-x border-dashed border-purple-400 space-y-2">
                      <span class="block space-x-2">
                        <span class="space-x-1 bg-gray-200 border border-gray-300 p-0.5 rounded">
                          <b>Furniture:</b>
                          <span>Mattress</span>
                        </span>
                        <span class="space-x-1 bg-gray-200 border border-gray-300 p-0.5 rounded">
                          <b>ID:</b>
                          <span>OffK1</span>
                        </span>
                      </span>
                      <span class="block">
                        I have 4 by 6 mattress in good condition. 40K
                      </span>
                    </td>
                    <td class="p-1">
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
