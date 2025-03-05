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
          <div class="my-10 mx-2 text-left">
            <h1 class="text-xl sm:text-3xl font-semibold space-y-0">FAQs</h1>

            <div class="my-6 space-y-6">
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#1.</span>
                  <u>What is OffK.ng?</u>
                </h2>
                <p>
                  OffK.ng is a simple online portal that helps university
                  students find off-campus accommodation by allowing them to
                  post their housing needs. Registered and verified house agents
                  can then contact them directly via WhatsApp.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#2.</span>
                  <u>How does OffK.ng work?</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    Students post their accommodation requests on the platform.
                  </li>
                  <li>
                    Verified Agents browse the requests and contact students
                    whose requests match their available properties.
                  </li>
                  <li>Communication happens directly on WhatsApp—no hassle!</li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#3.</span>
                  <u>How do I post an accommodation request?</u>
                </h2>
                <p>
                  Simply click on the button labelled "Post Request", fill out
                  the request form with your accommodation preferences, and
                  submit. Your request will be visible to verified house agents.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#4.</span>
                  <u>Will I be contacted directly by agents?</u>
                </h2>
                <p>
                  Yes! Agents who have properties that match your request will
                  contact you via WhatsApp.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#5.</span>
                  <u>Do the agents work for OffK.ng?</u>
                </h2>
                <p>
                  No, OffK.ng is a platform that connects students and vetted
                  agents. They're not staff or employees of OffK.ng.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#6.</span>
                  <u>Can I edit or delete my request?</u>
                </h2>
                <p>
                  At the moment, requests cannot be edited after submission.
                  However, they expire after 1 month. If you find accommodation,
                  you can request removal via our support team.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#7.</span>
                  <u>As an agent, how do I register?</u>
                </h2>
                <p>
                  Click on the link at the top labelled "For Agents", then click
                  on "Create Account" and fill in your details. One of the
                  Admins will contact you for vetting/verification and when
                  successful, you can start accessing student requests.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#8.</span>
                  <u>As an agent, how do I contact students?</u>
                </h2>
                <p>
                  Once you find a request that matches your available
                  properties, click on it to chat directly with the student via
                  WhatsApp.
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
