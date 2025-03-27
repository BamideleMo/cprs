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
            <div class="mt-12 bg-purple-100 p-3 lg:p-6 rounded-lg">
              <h2 class="text-base font-semibold">2 Core Principles:</h2>
              <ul class="space-y-8 my-4">
                <li>
                  ✌🏾 <u>Simplicity:</u>
                  <br />
                  Remove the stress of searching through countless listings or
                  dealing with unreliable sources. Instead simply post your
                  accommodation requests, and verified & vetted agents will
                  reach out if they have suitable options.
                  <br />
                  <br />
                  No complicated processes, no unnecessary steps—just a
                  straightforward way to find housing.
                </li>
                <li>
                  ⛑️ <u>Safety:</u>
                  <br />
                  Unlike random online listings or unverified agents, OffK.ng
                  ensures that only verified & vetted house agents can access
                  student requests. This reduces the risk of scams, fraud, and
                  unsafe housing arrangements. By prioritizing trust and
                  security, we provide students with a safer way to find their
                  ideal accommodation.
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
