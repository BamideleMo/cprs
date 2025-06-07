import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function WhatIsOffK() {
  return (
    <MetaProvider>
      <Title>What is OffK? - www.offk.ng</Title>
      <Meta name="description" content="What is offk.ng?"></Meta>
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
              <p>
                OffK.ng is a super-simple website where university students can:
              </p>
              <p class="flex space-x-1.5">
                {/* <span>🔴</span> */}
                <b class="-mt-[1px]">
                  POST or FIND hostel-related items for sale!
                </b>
              </p>
              <p>
                Items like mattress, chairs, gas cylinder, foodstuff, wardrobe,
                bedspace, etc.
              </p>

              <p>Very easy. No login. No long process.</p>
              <p class="py-0">
                <span class="block border-2 border-purple-600 bg-purple-100 p-4 rounded-lg text-black md:leading-6">
                  If you want to sell or buy an hostel-related item, OffK.ng is
                  the fastest and simplest way to sell to or buy from other
                  students on your campus.
                </span>
              </p>
              <p>
                Have questions? See the FAQs page:{" "}
                <A
                  href="/faqs"
                  class="hover:opacity-60 underline decoration-dashed decoration-purple-600"
                >
                  click here
                </A>
                .
              </p>
              <p>
                Want to make enquiries? Report a post, or raise observations?
                Send admin a WhatsApp chat now:
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
