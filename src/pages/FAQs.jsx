import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function FAQs() {
  return (
    <MetaProvider>
      <Title>Frequently Asked Questions (FAQs) - www.offk.ng</Title>
      <Meta
        name="description"
        content="Frequently Asked Questions (FAQs)"
      ></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2 text-left">
            <div class="text-center">
              <h2 class="text-lg sm:text-xl sm:mt-2 text-gray-600 leading-tight">
                Frequently Asked Questions (FAQs)
              </h2>
            </div>

            <div class="my-6 space-y-6">
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#1.</span>
                  <u>What exactly is OffK.ng?</u>
                </h2>
                <p>
                  OffK.ng is a super-simple website where university students
                  can find or post hostel-related items for sale (like Mattress,
                  chairs, gas cylinder, etc.) and student accommodations for
                  rent. No login — just a simple table of listings.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#2.</span>
                  <u>
                    Do I need to create an account to post or view listings?
                  </u>
                </h2>
                <p>
                  No. OffK.ng does not require any login or account creation.
                  Anyone can visit the website to view listings or post one
                  themselves.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#3.</span>
                  <u>Is it free to use OffK.ng?</u>
                </h2>
                <p>
                  Yes! Posting and browsing listings on OffK.ng is completely
                  free.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#4.</span>
                  <u>What kind of things can I list for sale?</u>
                </h2>
                <p class="my-2">You can list hostel-related items such as:</p>
                <p>
                  Food, Mattress, Chair, Table, Reading lamp, Gas cooker,
                  Wardrobe, Shelves, Bucket, Fan, Rugs, etc.
                </p>
                <p class="my-2">
                  We keep it focused on items that are commonly bought or sold
                  around campus.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#5.</span>
                  <u>Can I add pictures to my listings?</u>
                </h2>
                <p>
                  No. Listings are text-only to keep the website simple, fast,
                  and low on data usage. If buyers want to see pictures, they
                  can message the seller on WhatsApp.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#6.</span>
                  <u>How does someone contact me after I post a listing?</u>
                </h2>
                <p>
                  When you post a listing, interested persons will click on the
                  listing to start a WhatsApp chat with you directly. Your phone
                  number is never publicly displayed.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#7.</span>
                  <u>How long do listings stay on the site?</u>
                </h2>
                <p>
                  Each listing automatically expires after 30 days to keep the
                  platform clean and up-to-date.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#8.</span>
                  <u>Is OffK.ng available for all Nigerian universities?</u>
                </h2>
                <p>
                  For now, OffK.ng focuses on selected campuses. We're starting
                  small and expanding gradually to ensure quality and relevance.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#9.</span>
                  <u>Is there any verification involved?</u>
                </h2>
                <p>
                  No. All listings are peer-to-peer, meaning anyone can post. We
                  do not verify items or posters. Always exercise caution and
                  meet in public when transacting. You can read our{" "}
                  <A
                    href="/safety"
                    class="hover:opacity-60 underline decoration-dashed decoration-purple-600"
                  >
                    safety rules
                  </A>
                  .
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

export default FAQs;
