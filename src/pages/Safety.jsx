import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function Safety() {
  return (
    <MetaProvider>
      <Title>Safety Tips - www.offk.ng</Title>
      <Meta
        name="description"
        content="While we verify and vet all agents before granting them access to student requests, it is still important to take precautions when searching for housing."
      ></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2 text-left">
            <h1 class="text-xl sm:text-3xl font-semibold space-y-0">
              Safety Tips
            </h1>
            <div class="my-6 space-y-6">
              <p>
                At OffK.ng, we prioritize your safety and security when
                connecting with house agents for off-campus accommodation. While
                we verify and vet all agents before granting them access to
                student requests, it is still important to take precautions when
                searching for housing.
              </p>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#1.</span>
                  <u>Always Meet in a Public Place First</u>
                </h2>
                <p>
                  Before visiting any property, arrange to meet the agent in a
                  public location to discuss details. Avoid going to unfamiliar
                  places alone.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#2.</span>
                  <u>Inspect the Property Before Making Payments</u>
                </h2>
                <p>
                  Never make any payment before physically inspecting the
                  property. Ensure it meets your expectations and verify
                  ownership.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#3.</span>
                  <u>Avoid Sharing Personal & Financial Information</u>
                </h2>
                <p>
                  Do not share sensitive information like your bank details,
                  passwords, or home address with any agent or third party.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#4.</span>
                  <u>Bring Someone Along for Inspections</u>
                </h2>
                <p>
                  If possible, visit the property with a friend or family member
                  for added security and a second opinion.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#5.</span>
                  <u>Verify the Property Ownership</u>
                </h2>
                <p>
                  Ask the agent for proof of ownership or the landlord’s contact
                  details or meet the landlord in person before making any
                  commitments.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#6.</span>
                  <u>Report Suspicious Activities</u>
                </h2>
                <p>
                  Trust your instincts—if something feels off, reconsider
                  proceeding.
                </p>
                <p>
                  Confirm agreements in writing—get a receipt or contract for
                  any payments made.
                </p>
                <p>
                  Report suspicious agents or requets to OffK.ng to help
                  maintain a safe platform for everyone.
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

export default Safety;
