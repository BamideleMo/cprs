import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function Academics() {
  return (
    <MetaProvider>
      <Title>Academics</Title>
      <Meta name="description" content="Academics"></Meta>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] 2xl:w-[900px] mx-auto pb-20">
          <div class="my-6 sm:my-10 mx-2 text-left">
            <div class="text-center">
              <h2 class="text-lg sm:text-xl sm:mt-2 text-gray-600 leading-tight">
                Academics
              </h2>
            </div>

            <div class="my-6 space-y-6 text-base text-gray-700">
              <div>
                <p>
                  Our programs are conducted on Full and part time basis and we
                  use the Semester System.
                </p>
              </div>
              <div>
                <p>
                  Each contact/semester is an intensive study consisting
                  lectures, interactions, trips, research and examinations.
                  There are two contacts/semesters in each academic year. Our
                  academic year begins from early September and ends in late May
                  of the following year.
                </p>
              </div>
              <div>
                <p>
                  You can equally study through any of the following methods:
                </p>
              </div>
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">
                    Campus Study
                  </span>
                </h2>
                <p>
                  You can Study full time/part time through our Campuses in Jos
                  or Lafia.
                </p>
              </div>
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">
                    Weekend/Online Study
                  </span>
                </h2>
                <p>You can Study by weekends or online.</p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:border-y md:py-5">
                <div>
                  <h2 class="text-lg mb-1 leading-tight">
                    <span class="text-gray-400 block underline">
                      Diploma Programmes
                    </span>
                  </h2>
                  <ul class="my-4 space-y-6">
                    <li class="border-l border-dotted border-red-700 leading-tight pl-1">
                      Diploma in Peace and Conflict Studies
                    </li>

                    <li class="border-l border-dotted border-red-700 leading-tight pl-1">
                      Diploma in Peace and Counselling Studies
                    </li>
                    <li class="border-l border-dotted border-red-700 leading-tight pl-1">
                      Diploma in Security Management Technology
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="text-lg mb-1 leading-tight">
                    <span class="text-gray-400 block underline">
                      Undergraduate Programmes
                    </span>
                  </h2>
                  <ul class="my-4 space-y-6">
                    <li class="border-l border-dotted border-red-700 leading-tight pl-1">
                      Bachelor of Science Peace & Conflict Studies
                    </li>

                    <li class="border-l border-dotted border-red-700 leading-tight pl-1">
                      Bachelor of Science, Criminology and Security Technology
                    </li>
                    <li class="border-l border-dotted border-red-700 leading-tight pl-1">
                      Bachelor of Arts, Peace and Counselling Studies
                    </li>
                    <li class="border-l border-dotted border-red-700 leading-tight pl-1">
                      Bachelor of Arts Education & Conflict Studies
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="text-lg mb-1 leading-tight">
                    <span class="text-gray-400 block underline">
                      Postgraduate Diploma
                    </span>
                  </h2>
                  <ul class="my-4 space-y-6">
                    <li class="border-l border-dotted border-red-700 leading-tight pl-1">
                      Postgraduate Diploma Conflict Transformation
                    </li>

                    <li class="border-l border-dotted border-red-700 leading-tight pl-1">
                      Postgraduate Diploma Criminology & Security Technology
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="text-lg mb-1 leading-tight">
                    <span class="text-gray-400 block underline">
                      Masters Programmes
                    </span>
                  </h2>
                  <ul class="my-4 space-y-6">
                    <li class="border-l border-dotted border-red-700 leading-tight pl-1">
                      Master of Arts Conflict Transformation
                    </li>
                    <li class="border-l border-dotted border-red-700 leading-tight pl-1">
                      Master of Science Criminology & Security Studies
                    </li>
                    <li class="border-l border-dotted border-red-700 leading-tight pl-1">
                      Master of Arts Peace & Public Policy
                    </li>
                    <li class="border-l border-dotted border-red-700 leading-tight pl-1">
                      Master of Arts Theology & Conflict Studies
                    </li>
                    <li class="border-l border-dotted border-red-700 leading-tight pl-1">
                      Master of Arts Education & Conflict Studies
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default Academics;
