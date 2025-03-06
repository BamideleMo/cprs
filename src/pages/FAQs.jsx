import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function FAQs() {
  return (
    <MetaProvider>
      <Title>FAQs - www.offk.ng</Title>
      <Meta
        name="description"
        content="Frequently Asked Questions (FAQs)."
      ></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2 text-left">
            <h1 class="text-xl sm:text-3xl font-semibold space-y-0">FAQs</h1>

            <div class="my-6 space-y-6">
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#1.</span>
                  <u>What is OffK.ng?</u>
                </h2>
                <p>
                  OffK.ng is a simple online portal that connects university
                  students looking for off-campus accommodation with verified &
                  vetted house agents who can help them find a suitable place.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#2.</span>
                  <u>How does OffK.ng work?</u>
                </h2>
                <p>
                  Just post your accommodation request on the portal, and
                  verified & vetted house agents will reach out to you via
                  WhatsApp if they have a property that matches your needs.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#3.</span>
                  <u>Why use OffK.ng?</u>
                </h2>
                <ul class="space-y-2">
                  <li>
                    ✅ <b>No Need to Search</b> – You simply post, and agents
                    come to you.
                  </li>
                  <li>
                    ✅ <b>Verified Agents Only</b> – This will help you avoid
                    scams and unreliable agents.
                  </li>
                  <li>
                    ✅ <b>Fast & Effective</b> – Chat instantly with agents.
                    Save time and save your money.
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#4.</span>
                  <u>Can I trust the agents?</u>
                </h2>
                <p>
                  Yes! Because only verified & vetted agents can access your
                  contact details. OffK.ng ensures that every agent goes through
                  a verification process before they can connect with students.
                  You should also read our{" "}
                  <A href="/safety" class="text-purple-700 hover:opacity-60">
                    Safety Rules
                  </A>
                  .
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#5.</span>
                  <u>How long does it take to get responses from agents?</u>
                </h2>
                <p>
                  It depends on availability, but agents typically respond
                  within a few hours to a few days after posting your request.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#6.</span>
                  <u>Can I edit or delete my accommodation request?</u>
                </h2>
                <p>
                  No, but your request automatically expires after 30 days to
                  keep listings fresh and relevant.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#7.</span>
                  <u>As an agent, how do I register?</u>
                </h2>
                <p>
                  At the top of this website, click the link labelled "For
                  Agents", then click on "Create Account" & fill in your
                  details. Our representative will contact you for
                  vetting/verification; when successful, you can start accessing
                  student requests.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#8.</span>
                  <u>How does OffK.ng work for house agents?</u>
                </h2>
                <p>
                  After registering and completing the verification process,
                  agents with suitable accommodation can click on a student's
                  request & chat with student directly via WhatsApp.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#9.</span>
                  <u>Why do agents need to be verified & vetted?</u>
                </h2>
                <p>
                  Verification helps ensure trust and security, reducing the
                  risk of scams and fraud on the platform.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#10.</span>
                  <u>Are the agents staff of OffK.ng?</u>
                </h2>
                <p>
                  No.
                  <br />
                  OffK.ng simply connects students with verified agents who have
                  available accommodations. None of the agents is a staff or
                  employee of OffK.ng.
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
