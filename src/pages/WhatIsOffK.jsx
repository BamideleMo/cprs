import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function WhatIsOffK() {
  return (
    <MetaProvider>
      <Title>What is OffK? - www.offk.ng</Title>
      <Meta name="description" content="What is off.ng?"></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2">
            <div class="text-center">
              <h2 class="text-lg sm:text-xl sm:mt-2 text-gray-600 leading-tight">
                What is OffK.ng?
              </h2>
            </div>
            <div class="mt-8 md:mt-12 space-y-8">
              <p>OffK.ng is a simple website where students can:</p>
              <p class="flex space-x-1.5">
                <span>🔴</span>
                <span class="-mt-[1px]">
                  POST or FIND <u>hostel items for sale</u> (like mattress,
                  chairs, gas cylinder, foodstuff, wardrobes, etc.)
                </span>
              </p>

              <p>Very easy. No login. No long process.</p>
              <p class="py-10">
                <span class="block border border-purple-600 bg-purple-100 p-4 rounded-lg text-black md:leading-loose">
                  If you want to sell or buy an hostel item, OffK.ng is the
                  fastest and simplest way to sell to or buy from other students
                  on your campus.
                </span>
              </p>
              <p>
                See Frequently Asked Questions & answers:{" "}
                <A
                  href="/faqs"
                  class="hover:opacity-60 underline decoration-dashed decoration-purple-600"
                >
                  click here
                </A>
                .
              </p>
              <p>
                Want to make enquiries? Make report or raise observations? Send
                admin a WhatsApp chat now:
              </p>
              <div class="my-8">
                <p>
                  <a
                    href="https://wa.me/23407036935026"
                    target="_blank"
                    class="bg-green-700 text-white hover:opacity-60 p-3 rounded-lg"
                  >
                    070 3693 5026
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default WhatIsOffK;
