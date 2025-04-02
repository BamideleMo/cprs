import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function ChoosePlan() {
  return (
    <MetaProvider>
      <Title>Choose Plan - www.offk.ng</Title>
      <Meta
        name="description"
        content="Choose a plan and help more Students find Off-Campus Accommodation."
      ></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2">
            <div class="text-center">
              <h1 class="text-xl sm:text-3xl font-semibold space-y-0">
                <div>Choose Plan</div>
              </h1>
              <h2 class="text-lg sm:text-xl mt-4 sm:mt-4 text-gray-600 leading-tight">
                Choose a plan. Start helping students find their perfect place
                today!
              </h2>
            </div>
            <div class="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="rounded-2xl border border-black p-4 md:p-6">
                <h2 class="font-normal text-xl text-purple-800 text-center mb-4 border-b pb-4">
                  Starter Plan
                </h2>
                <div class="mt-2 space-y-2">
                  <p class="border-b pb-3">Get verified & vetted.</p>
                  <p class="border-b pb-3">
                    Access contacts of up to <b>3 student requests per month</b>
                    .
                  </p>
                  <p class="border-b pb-3">
                    Perfect for agents who are just getting started and want to
                    test the platform!
                  </p>
                  <p class="border-b pb-3">₦ 0 every year</p>
                  <p class="pt-2">
                    <A
                      href="/create-account/starter-plan"
                      class="block w-fit mx-auto text-white bg-black p-3 rounded-xl hover:opacity-60"
                    >
                      Choose this plan
                    </A>
                  </p>
                </div>
              </div>
              <div class="rounded-2xl border border-black p-4 md:p-6">
                <h2 class="font-normal text-xl text-purple-800 text-center mb-4 border-b pb-4">
                  Premium Plan
                </h2>
                <div class="mt-2 space-y-2">
                  <p class="border-b pb-3">Get verified & vetted.</p>
                  <p class="border-b pb-3">
                    Access contacts of{" "}
                    <b>unlimited number of students requests</b>.
                  </p>
                  <p class="border-b pb-3">
                    Best for serious agents looking to maximize their reach and
                    business growth!
                  </p>
                  <p class="border-b pb-3">₦ 5,000 every year</p>
                  <p class="pt-2">
                    <A
                      href="/create-account/premium-plan"
                      class="block w-fit mx-auto text-white bg-black p-3 rounded-xl hover:opacity-60"
                    >
                      Choose this plan
                    </A>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default ChoosePlan;
