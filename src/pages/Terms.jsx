import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function Terms() {
  return (
    <MetaProvider>
      <Title>Terms & Conditions - www.offk.ng</Title>
      <Meta name="description" content="Our Terms & Conditions."></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2 text-left">
            <div class="text-center">
              <h2 class="text-lg sm:text-xl sm:mt-2 text-gray-600 leading-tight">
                Terms & Conditions
              </h2>
            </div>

            <div class="my-6 space-y-6">
              <p>Last Updated: Thu 6 Mar 2025</p>
              <p>
                Welcome to OffK.ng — a simple platform created to help
                university students post or find hostel items for sale and post
                or find student accommodation. By using this website, you agree
                to abide by the following terms and conditions.
              </p>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#1.</span>
                  <u>Use of the Platform</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    OffK.ng is strictly for student-related hostel items and
                    accommodation listings.
                  </li>
                  <li>
                    Users may post or browse listings without creating an
                    account.
                  </li>
                  <li>
                    By posting a listing, you agree that the information you
                    provide is accurate, honest, and not misleading.
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#2.</span>
                  <u>Content Responsibility</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    All listings are user-generated. OffK.ng does not own,
                    verify, or guarantee any listing posted on the site.
                  </li>
                  <li>
                    Users are solely responsible for any interactions,
                    negotiations, or transactions arising from listings.
                  </li>
                  <li>
                    OffK.ng will not be held liable for any losses, fraud, or
                    damages resulting from deals between users.
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#3.</span>
                  <u>Prohibited Content</u>
                </h2>
                <p>Users must NOT post:</p>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    Items or listings unrelated to student accommodation or
                    hostel-related items.
                  </li>
                  <li>Inappropriate, offensive, or misleading content.</li>
                  <li>
                    Listings for items or properties they do not own or have
                    legal rights to post.
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#4.</span>
                  <u>Post Expiry</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    All listings automatically expire after 30 days to keep the
                    platform clean and relevant.
                  </li>
                  <li>
                    Users may repost items after expiry if they are still
                    available.
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#5.</span>
                  <u>Privacy and Contact</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    Phone numbers (WhatsApp only) are required when posting a
                    listing.
                  </li>
                  <li>
                    These numbers are not displayed openly—buyers must click the
                    listing to initiate a WhatsApp chat.
                  </li>
                  <li>We do not share or sell user data.</li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#6.</span>
                  <u>Platform Modifications</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    OffK.ng reserves the right to update or change these terms,
                    features, or policies at any time without prior notice.
                  </li>
                  <li>
                    Continued use of the site after changes implies acceptance
                    of the updated terms.
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#7.</span>
                  <u>Reporting Abuse</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    Users are encouraged to report suspicious listings or
                    behavior.
                  </li>
                  <li>
                    OffK.ng reserves the right to remove any listing or ban
                    users who violate these terms.
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  By using OffK.ng, you accept these terms and agree to use the
                  platform responsibly and ethically.
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

export default Terms;
