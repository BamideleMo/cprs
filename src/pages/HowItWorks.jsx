import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function HowItWorks() {
  return (
    <MetaProvider>
      <Title>How it works - www.hostelsell.ng</Title>
      <Meta name="description" content="How hostelsell.ng works."></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2">
            <div class="text-center">
              <h1 class="text-xl sm:text-3xl font-semibold space-y-0">
                <div>A simple way to sell & buy hostel stuff!</div>
              </h1>
              <h2 class="text-lg sm:text-xl sm:mt-2 text-gray-600 leading-tight">
                Fast, Simple, & Direct.
              </h2>
            </div>
            <div class="mt-8 md:mt-12">
              <ul class="space-y-8">
                <li class="flex flex-col space-y-4">
                  <b class="text-base">1️⃣ Post Your Item:</b>
                  <p>
                    Got something you want to sell — a mattress, reading table,
                    gas cylinder, fan, extension box, or anything
                    hostel-related?
                  </p>
                  <p>
                    Just tap on the "Post Item" button, fill out a simple form
                    and tell us:
                  </p>
                  <ul class="list-disc mx-8 space-y-4">
                    <li>What you're selling.</li>
                    <li>A short, clear description.</li>
                    <li>
                      Your WhatsApp number (Don’t worry — it won’t be
                      displayed).
                    </li>
                  </ul>
                  <p>
                    Your item will be posted immediately and stay up for 30 days
                    before it expires automatically. No logins, no uploads, no
                    stress.
                  </p>
                </li>
                <li class="flex flex-col space-y-4">
                  <b class="text-base">2️⃣ Buyers Browse & Chat:</b>
                  <p>
                    Students looking for items to buy can scroll through &
                    filter the table of items.
                  </p>
                  <ul class="list-disc mx-8 space-y-4">
                    <li>
                      If interested in an item, a buyer taps on it — and it
                      opens WhatsApp for direct chat with seller.
                    </li>
                    <li>
                      Buyer can ask questions, negotiate, or request pictures,
                      and stay in control of the conversation on WhatsApp.
                    </li>
                  </ul>
                </li>
                <li class="flex flex-col space-y-4">
                  <b class="text-base">3️⃣ Deal or No Deal:</b>
                  <p>
                    Once buyer and seller agree, the deal goes from there.
                    HostelSell.ng doesn’t get in the way.
                  </p>
                  <ul class="list-disc mx-8 space-y-4">
                    <li>No middlemen.</li>
                    <li>No registration.</li>
                    <li>No commission.</li>
                  </ul>
                  <p>
                    Just a clean notice board that connects students to
                    students.
                  </p>
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
