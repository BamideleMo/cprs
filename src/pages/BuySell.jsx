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
              A simple marketplace to buy & sell hostel-centric items for & by
              students in{" "}
              <span class="uppercase">
                {JSON.parse(localStorage.getItem("OffKUni")).uni}
              </span>
              :
            </h2>
            <h3 class="mt-4">
              <b>PS:</b> Want to sell an item?{" "}
              <span class="border-b-4 border-purple-700 hover:opacity-60 cursor-pointer">
                Click here
              </span>
            </h3>

            <h2 class="mt-12 flex justify-between">
              <span>Items for sale:</span>
              <span class="text-xs bg-black text-white py-1 px-2 rounded hover:opacity-60 cursor-pointer">
                Filter
              </span>
            </h2>
            <div class="mt-2 space-y-6">
              <div class="space-y-2 border border-gray-400 border-dashed bg-gray-100 p-3 rounded-lg hover:bg-purple-100 cursor-pointer">
                <div class="text-xs text-gray-600 space-x-2">
                  <span class="bg-gray-100 border border-gray-400 py-0.5 px-1 rounded space-x-2">
                    <span>Electronics:</span>
                    <span class="text-gray-900">Standing Fan</span>
                  </span>
                  <span class="bg-gray-100 border border-gray-400 py-0.5 px-1 rounded space-x-2">
                    4 days ago
                  </span>
                </div>
                <div>
                  I have a standing fan in good condition for sale. 30k but
                  slightly negotiable
                </div>
              </div>
              <div class="space-y-2 border border-gray-400 border-dashed bg-gray-100 p-3 rounded-lg hover:bg-purple-100 cursor-pointer">
                <div class="text-xs text-gray-600 space-x-2">
                  <span class="bg-gray-100 border border-gray-400 py-0.5 px-1 rounded space-x-2">
                    <span>Furniture:</span>
                    <span class="text-gray-900">Reading Table</span>
                  </span>
                  <span class="bg-gray-100 border border-gray-400 py-0.5 px-1 rounded space-x-2">
                    5 days ago
                  </span>
                </div>
                <div>Reading table for sale. 10k</div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default BuySell;
