import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function Agents() {
  return (
    <MetaProvider>
      <Title>For Agents - www.offk.ng</Title>
      <Meta
        name="description"
        content="Are you a House Agent? Help more Students find Off-Campus Accommodation."
      ></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2">
            <div class="text-center">
              <h1 class="text-xl sm:text-3xl font-semibold space-y-0">
                <div>Are you a House Agent?</div>
              </h1>
              <h2 class="text-lg sm:text-xl mt-4 sm:mt-4 text-gray-600 leading-tight">
                Join OffK.ng Today & Start Getting More Clients!
              </h2>
              <div class="my-12 space-x-3">
                <A
                  href="/create-account"
                  class="border border-black bg-black text-white p-2 rounded-lg hover:opacity-60"
                >
                  Create Account
                </A>
                <span>or</span>
                <A
                  href="/login"
                  class="border border-black bg-black text-white p-2 rounded-lg hover:opacity-60"
                >
                  Log In
                </A>
              </div>
            </div>
            <div class="bg-gray-100 p-3 rounded-lg">
              <h2 class="text-base font-semibold">
                3 Reasons Why Agents Love OffK.ng
              </h2>
              <ul class="space-y-4 my-4">
                <li>
                  🛑 <u>Access to Ready-to-Rent Students:</u>
                  <br />
                  Connect directly with students who are actively searching for
                  off-campus accommodation.
                </li>
                <li>
                  🛑 <u>Save Time & Effort:</u>
                  <br />
                  No need to scout for tenants—simply browse student requests
                  that match your available listings.
                </li>
                <li>
                  🛑 <u>FREE & Easy to Start:</u>
                  <br />
                  Create an account & start for free. Get more clients, and make
                  more money!
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default Agents;
