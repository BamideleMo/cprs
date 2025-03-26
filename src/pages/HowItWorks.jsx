import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function HowItWorks() {
  return (
    <MetaProvider>
      <Title>How it works - www.offk.ng</Title>
      <Meta name="description" content="How OffK.ng works."></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2">
            <div class="text-center">
              <h1 class="text-xl sm:text-3xl font-semibold space-y-0">
                <div>How it works</div>
              </h1>
            </div>
            <div class="mt-12">
              <ul class="space-y-8">
                <li class="flex flex-col space-y-4">
                  <b class="text-base">1️⃣ Post Your Request:</b>
                  <ul class="list-disc mx-8 space-y-4">
                    <li>
                      Click on the "Post Request" button, provide your WhatsApp
                      contact & details like location, budget, preferences, etc.
                    </li>
                  </ul>
                </li>
                <li class="flex flex-col space-y-4">
                  <b class="text-base">2️⃣ Wait for Agents to Chat You:</b>
                  <ul class="list-disc mx-8 space-y-4">
                    <li>
                      Only verified & vetted house agents can access and contact
                      you via WhatsApp.
                    </li>
                    <li>
                      If any of them has a suitable property, he/she will chat
                      you on WhatsApp.
                    </li>
                  </ul>
                </li>
                <li class="flex flex-col space-y-4">
                  <b class="text-base">3️⃣ Finalize Your Accommodation:</b>
                  <ul class="list-disc mx-8 space-y-4">
                    <li>
                      Review options from different agents. Choose the best
                      option & secure your accommodation stress-free.
                    </li>
                  </ul>
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

export default HowItWorks;
