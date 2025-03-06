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
            <h1 class="text-xl sm:text-3xl font-semibold space-y-0">
              Terms & Conditions
            </h1>

            <div class="my-6 space-y-6">
              <p>Last Updated: Thu 6 Mar 2025</p>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#1.</span>
                  <u>Introduction</u>
                </h2>
                <p>
                  Welcome to OffK.ng! By using our website, you agree to comply
                  with the following Terms & Conditions. Please read them
                  carefully.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#2.</span>
                  <u>Definitions</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    "Platform" refers to OffK.ng, the website facilitating
                    accommodation connections.
                  </li>
                  <li>
                    "User" refers to anyone using the platform, including
                    students and house agents.
                  </li>
                  <li>
                    "Student" refers to any user posting an accommodation
                    request.
                  </li>
                  <li>
                    "Agent" refers to registered house agents who access and
                    respond to student requests.
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#3.</span>
                  <u>Eligibility</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    Students must be at least 18 years old to use the platform.
                  </li>
                  <li>
                    Agents must provide accurate details and comply with local
                    laws governing property rental services.
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#4.</span>
                  <u>How OffK.ng Works</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    Students post accommodation requests with relevant details.
                  </li>
                  <li>
                    Agents browse these requests and contact students directly
                    via WhatsApp.
                  </li>
                  <li>
                    OffK.ng is only a platform for connection and is not
                    involved in any transactions between students and agents.
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#5.</span>
                  <u>User Responsibilities</u>
                </h2>
                <p class="pb-2">For Students:</p>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    Ensure that the information provided in your accommodation
                    request is accurate.
                  </li>
                  <li>
                    OffK.ng is not liable for any financial transactions or
                    disputes between you and an agent.
                  </li>
                </ul>

                <p class="py-2">For Agents:</p>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    Only contact students if you have suitable accommodations
                    matching their requests.
                  </li>
                  <li>Do not send spam, misleading, or fraudulent offers.</li>
                  <li>
                    Respect all relevant property rental laws and guidelines.
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#6.</span>
                  <u>Prohibited Activities</u>
                </h2>
                <p>Users must not:</p>
                <ul class="list-disc mx-8 space-y-4">
                  <li>Post false or misleading information.</li>
                  <li>Attempt to scam, defraud, or deceive other users.</li>
                  <li>
                    Use OffK.ng for activities unrelated to accommodation
                    search.
                  </li>
                  <li>Harass, threaten, or abuse other users.</li>
                </ul>
                <p>
                  Failure to comply may result in account suspension or
                  termination.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#7.</span>
                  <u>Disclaimer & Liability</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    We are not responsible for any issues, losses, or damages
                    resulting from transactions made outside our platform.
                  </li>
                  <li>Users interact at their own risk.</li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#8.</span>
                  <u>Amendments to Terms</u>
                </h2>
                <p>
                  OffK.ng reserves the right to update or modify these Terms &
                  Conditions at any time. Continued use of the platform after
                  updates signifies acceptance of the new terms.
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
