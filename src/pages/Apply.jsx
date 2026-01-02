import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";
import ArrRight from "../components/icons/ArrRight";

function Apply() {
  return (
    <MetaProvider>
      <Title>Apply to CPRS</Title>
      <Meta name="description" content="Apply to CPRS"></Meta>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] 2xl:w-[900px] mx-auto pb-20">
          <div class="my-6 sm:my-10 mx-2 text-left">
            <div class="text-center">
              <h2 class="text-lg sm:text-xl sm:mt-2 text-gray-600 leading-tight">
                Apply to CPRS
              </h2>
            </div>

            <div class="my-6 space-y-6 text-base text-gray-700 text-pretty text-justify">
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">
                    How to apply
                  </span>
                </h2>
                
                <p>
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

export default Apply;
