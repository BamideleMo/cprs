import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function Terms() {
  return (
    <MetaProvider>
      <Title>Terms & Conditions - www.hostelsell.ng</Title>
      <Meta name="description" content="Our Terms & Conditions."></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2 text-left">
            <h1 class="text-center text-xl sm:text-3xl font-semibold space-y-0">
              Terms & Conditions
            </h1>

            <div class="my-6 space-y-6">
              <p>Last Updated: Thu 6 Mar 2025</p>
              <p>
                Welcome to HostelSell.ng! By using this website, you agree to
                follow the terms below. Please read them carefully.
              </p>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#1.</span>
                  <u>About HostelSell.ng</u>
                </h2>
                <p>
                  HostelSell.ng is a simple digital notice board that allows
                  university students to post hostel-related items for sale.
                </p>
                <p>
                  We are not a marketplace, middleman, or payment processor. We
                  do not verify, inspect, or take responsibility for any items
                  listed on the platform.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#2.</span>
                  <u>Posting Items</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    You may only post hostel-related items (e.g., mattresses,
                    tables, fans, gadgets, gas cookers, etc.).
                  </li>
                  <li>
                    All items must be legal, safe, and in your possession.
                  </li>
                  <li>Each listing automatically expires after 30 days.</li>
                  <li>
                    We reserve the right to edit, reject, or remove any listing
                    that violates these terms or looks suspicious.
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#3.</span>
                  <u>WhatsApp Use</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    You are required to provide a valid WhatsApp number when
                    posting an item.
                  </li>
                  <li>Your number will not be publicly displayed.</li>
                  <li>
                    Interested buyers will initiate a WhatsApp chat
                    tapping/clicking on your post.
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#4.</span>
                  <u>Buyer-Seller Responsibility</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    All transactions are between the buyer and the seller only.
                  </li>
                  <li>
                    HostelSell.ng does not guarantee the quality, safety,
                    accuracy, or legitimacy of items listed.
                  </li>
                  <li>We do not handle payments, deliveries, or refunds.</li>
                  <li>
                    Always meet in safe, public locations and take necessary
                    safety precautions.
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#5.</span>
                  <u>Prohibited Listings</u>
                </h2>
                <p class="pb-2">You must not list:</p>
                <ul class="list-disc mx-8 space-y-4">
                  <li>Stolen, illegal, or harmful items.</li>
                  <li>Weapons, drugs, or banned substances.</li>
                  <li>Academic materials meant to promote cheating</li>
                  <li>Scam attempts or fake listings</li>
                </ul>

                <p class="py-2">
                  Violating these rules may result in your listings being
                  deleted, your number being permanently blocked and we may
                  report you to relevant authorities like the police.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#6.</span>
                  <u>Ads & Sponsored Listings</u>
                </h2>
                <p>
                  We may display ads or offer sponsored listing options for
                  sellers. Use of these features may be governed by additional
                  guidelines.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#7.</span>
                  <u>Changes to These Terms</u>
                </h2>
                <p>
                  We may update these terms occasionally. Continued use of
                  HostelSell.ng means you accept the latest version.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#8.</span>
                  <u>Your Confirmation</u>
                </h2>
                <p>
                  By using HostelSell.ng, you confirm that you are a university
                  student (or acting responsibly on behalf of one) and that you
                  agree to follow these terms.
                </p>
                <p>Thanks for keeping it simple, safe, and smart!</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default Terms;
