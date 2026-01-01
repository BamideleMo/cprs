import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function Admissions() {
  return (
    <MetaProvider>
      <Title>Admissions</Title>
      <Meta name="description" content="Admissions"></Meta>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] 2xl:w-[900px] mx-auto pb-20">
          <div class="my-6 sm:my-10 mx-2 text-left">
            <div class="text-center">
              <h2 class="text-lg sm:text-xl sm:mt-2 text-gray-600 leading-tight">
                Admissions
              </h2>
            </div>

            <div class="my-6 space-y-6 text-base text-gray-700">
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">
                    Entry Requirements
                  </span>
                </h2>
                <p>
                  The minimum entry requirements into the various programmes are
                  as follows:
                </p>
              </div>
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">
                    Diploma Programmes
                  </span>
                </h2>
                <p>
                  The minimum entry requirement for the Diploma Programs is; 4
                  Credit Passes in WAEC/NECO/NABTEB. A credit in English is
                  required.
                </p>
              </div>
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">
                    Undergraduate Programmes
                  </span>
                </h2>
                <p>
                  The minimum entry requirement for the Undergraduate Degree
                  programme is 5 Credit passes in WAEC, NECO or NABTEB. A Credit
                  in English and Mathematics is required.
                </p>
              </div>
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">
                    Graduate Programmes
                  </span>
                </h2>
                <p>
                  The minimum entry requirement for the Postgraduate Diploma is
                  a first degree or HND in any field.
                </p>
              </div>
              <div>
                <p>
                  The minimum entry requirement for the Masters programme is a
                  First Degree.
                </p>
              </div>
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">
                    Application Forms
                  </span>
                </h2>
                <p>
                  Application forms are on sale throughout the year and
                  admission is on a rolling basis.
                </p>
              </div>
              <div>
                <p>
                  CPRS does not conduct formal interviews but can only do so
                  with candidates where issues have been noted in their
                  application documents that warrants an interview. Such
                  interviews may be done face to face or by telephone call.
                </p>
              </div>
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">
                    Application Form fees are as follows:
                  </span>
                </h2>
                <p>
                  Diploma Courses - ₦3,000
                  <br />
                  Undergraduate Courses – ₦5,000
                  <br />
                  Graduate Courses – ₦10,000
                </p>
              </div>
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">Scholarship</span>
                </h2>
                <p>
                  We understand that funding your education is a herculean task.
                  Therefore, all admitted students are provided with a RETA
                  Scholarship Fund to support your education. This is a tuition
                  fee reduction provided by Reconciliation Trainers Africa
                  (RETA) as its support for the education and advancement of
                  peace projects in Nigeria.
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

export default Admissions;
