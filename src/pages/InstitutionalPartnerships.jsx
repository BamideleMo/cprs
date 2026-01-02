import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";
import ArrRight from "../components/icons/ArrRight";

function InstitutionalPartnerships() {
  return (
    <MetaProvider>
      <Title>Institutional Partnerships</Title>
      <Meta name="description" content="Institutional Partnerships"></Meta>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] 2xl:w-[900px] mx-auto pb-20">
          <div class="my-6 sm:my-10 mx-2 text-left">
            <div class="text-center">
              <h2 class="text-lg sm:text-xl sm:mt-2 text-gray-600 leading-tight">
                Institutional Partnerships
              </h2>
            </div>

            <div class="my-6 space-y-6 text-base text-gray-700 text-pretty text-justify">
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">
                    Programmes in Collaboration with Christian University For
                    Leadership Education and Development (CULED) USA.
                  </span>
                </h2>
                <div class="my-4">
                  <a
                    href="https://www.culed.org/institutions"
                    target="_blank"
                    class="text-green-700 flex hover:opacity-60"
                  >
                    <ArrRight />
                    <span class="-mt-1">Link to CULED</span>
                  </a>
                </div>
                <p>
                  As part of its expanded development, CPRS and CULED entered a
                  collaborative MOU to serve as a training centre for the
                  following programmes in Nigeria:
                </p>
              </div>
              <div>
                <ul class="space-y-1 list-disc mx-6">
                  <li>PhD Peace & Conflict Studies</li>
                  <li>PhD Restorative Justice</li>
                  <li>PhD Pastoral Care & Counselling</li>
                  <li>PhD Christian Education</li>
                  <li>PhD Organizational Leadership</li>
                  <li>PhD Theological Studies</li>
                  <li>PhD Christian Leadership</li>
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

export default InstitutionalPartnerships;
