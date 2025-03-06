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
          <div class="my-10 mx-2 text-left">
            <h1 class="text-xl sm:text-3xl font-semibold space-y-0">
              <div>Are you a House Agent?</div>
              <div>Help more Students find Off-Campus Accommodation.</div>
            </h1>
            <h2 class="text-lg sm:text-xl mt-4 sm:mt-4 text-gray-600 leading-tight">
              Join OffK.ng today and getting more clients!
            </h2>
            <div class="my-12 space-x-3">
              <A
                href="/create-account"
                class="border border-gray-600 text-gray-600 p-2 rounded-lg hover:opacity-60"
              >
                Create Account
              </A>
              <span>or</span>
              <A
                href="/login"
                class="border border-gray-600 text-gray-600 p-2 rounded-lg hover:opacity-60"
              >
                Log In
              </A>
            </div>
            <div class="bg-gray-100 p-3 rounded-lg">
              <h2 class="text-base font-semibold">
                5 Reasons Why Agents Love OffK.ng
              </h2>
              <ul class="space-y-4 my-4">
                <li>
                  🛑 <u>Get Access to Ready-to-Rent Students:</u>
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
                  🛑 <u>Direct WhatsApp Contact:</u>
                  <br />
                  Start chatting with students who need your services instantly
                  without delays.
                </li>
                <li>
                  🛑 <u>More Deals, More Earnings:</u>
                  <br />
                  OffK will bring you more clients which means more money to be
                  earned.
                </li>
                <li>
                  🛑 <u>Start for FREE:</u>
                  <br />
                  Create an Account to start for free.
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
