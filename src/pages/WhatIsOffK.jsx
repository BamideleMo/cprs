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
            <div class="mt-8 md:mt-12">
              <p>OffK.ng is a simple website for hostel deals. Students can:</p>
              <ul class="space-y-8 m-8 list-decimal">
                <li>
                  Find or post <u>hostel items for sale</u> (like beds, chairs,
                  gas cookers, etc.)
                </li>
                <li>
                  Find or post <u>hostels for rent</u> (on or around campus).
                </li>
              </ul>
              <p>No login. No long process. Just a simple table of listings.</p>
              <p class="py-10">
                <span class="block bg-cyan-100 p-4 rounded-lg text-xl text-cyan-900">
                  If you want to sell an hostel item or have hostel for rent, OffK.ng
                  is the fastest way to share your deal.
                </span>
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default WhatIsOffK;
