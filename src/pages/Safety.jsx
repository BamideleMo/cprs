import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function Terms() {
  return (
    <MetaProvider>
      <Title>Safety Rules - www.offk.ng</Title>
      <Meta name="description" content="Our Safety Rules."></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2 text-left">
            <div class="text-center">
              <h2 class="text-lg sm:text-xl sm:mt-2 text-gray-600 leading-tight">
                Safety Rules
              </h2>
            </div>

            <div class="my-6 space-y-6">
              <p>
                While we strive to keep OffK.ng simple and useful, we strongly
                encourage you to follow these safety guidelines when using this
                platform:
              </p>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#1.</span>
                  <u>Always Verify Before You Pay</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    Never send money in advance without physically inspecting
                    the item or apartment.
                  </li>
                  <li>Be cautious of deals that seem too good to be true.</li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#2.</span>
                  <u>Meet in Safe, Public Places</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    When buying or selling hostel items, always meet in a public
                    and well-lit area on campus..
                  </li>
                  <li>Avoid isolated locations or late-night meetups.</li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#3.</span>
                  <u>Use WhatsApp to Communicate</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    All conversations happen directly through WhatsApp. Keep
                    chats there for transparency and reference.
                  </li>
                  <li>
                    If someone asks to move to another platform or act
                    suspiciously, proceed with caution.
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#4.</span>
                  <u>Report Suspicious Listings or Behavior</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    If you come across any suspicious post or behavior, report
                    it immediately so we can investigate and take action.
                  </li>
                  <li>We take community safety seriously.</li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#5.</span>
                  <u>Use Your Judgment</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    OffK.ng does not guarantee the accuracy of listings. Users
                    are expected to use common sense and discretion when
                    interacting with others on the platform.
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#6.</span>
                  <u>We’re Counting On You</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    OffK.ng is built as a helpful, trustworthy tool for
                    students. Help us keep the platform clean and safe by
                    following these rules and encouraging others to do the same.
                  </li>
                </ul>
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
