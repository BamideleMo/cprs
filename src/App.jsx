import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";
import logo from "../CPRS-logo.jpg";
import chatIcon from "./assets/whatsapp-icon.png";
import welcomePicture from "./assets/CPRS-graduation-picture-2025.jpg";
import TextCarousel from "./components/TextCarousel";
import ArrRight from "./components/icons/ArrRight";

function App() {
  return (
    <MetaProvider>
      <Title>College of Peace and Reconciliation Studies (CPRS) Jos</Title>
      <Meta name="description" content="CPRS"></Meta>
      <div class="bg-white text-sm">
        <header class="border-t-2 border-yellow-400 py-2">
          <div class="w-11/12 lg:w-[1200px] mx-auto">
            <div class="flex justify-between">
              <div class="w-fit space-x-1 flex">
                <div class="w-20">
                  <img src={logo} class="w-full" />
                </div>
                <div class="drop-shadow-lg uppercase -space-y-2 pt-3 font-bold text-lg">
                  <div>College of Peace</div>
                  <div>and Reconciliation Studies, Jos</div>
                </div>
              </div>
              <div class="w-fit drop-shadow-lg">
                <ul class="text-sm mt-6 flex space-x-12">
                  <li>
                    <A
                      href="#"
                      class="border-b border-green-600 hover:border-dotted"
                    >
                      About CPRS
                    </A>
                  </li>
                  <li>
                    <A
                      href="#"
                      class="border-b border-green-600 hover:border-dotted"
                    >
                      Programmes
                    </A>
                  </li>
                  <li>
                    <A
                      href="#"
                      class="border-b border-green-600 hover:border-dotted"
                    >
                      Admissions
                    </A>
                  </li>
                  <li>
                    <A
                      href="#"
                      class="border-b border-green-600 hover:border-dotted"
                    >
                      Tuition
                    </A>
                  </li>
                  <li>
                    <A
                      href="#"
                      class="border-b border-green-600 hover:border-dotted"
                    >
                      Contact Us
                    </A>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div class="border-t border-yellow-200 bg-green-700 py-2 text-center text-white text-sm">
          <div class="w-11/12 lg:w-[1200px] mx-auto">
            Sales of Admission forms is ongoing.{" "}
            <A href="/" class="underline hover:opacity-60">
              Apply Now!
            </A>
          </div>
        </div>
        <div class="bg-blue-800 flex">
          <div class="flex-1">
            <div class="w-8/12 mx-auto">
              <h1 class="mt-40 mb-6 uppercase text-base [word-spacing:5px] text-blue-200 font-bold">
                College of Peace and Reconciliation Studies, Jos
              </h1>
              <TextCarousel />
              <div class="flex space-x-6 mt-4 font-bold text-sm">
                <A
                  href="/"
                  class="bg-green-700 text-white p-3 border border-black hover:opacity-60"
                >
                  View Programmes
                </A>
                <A
                  href="/"
                  class="flex w-fit space-x-1 text-red-700 bg-gray-50 p-3 border border-red-700 hover:opacity-60"
                >
                  <span>
                    <img src={chatIcon} class="w-4 mt-0.5" />
                  </span>
                  <span>Chat with Admissions Office</span>
                </A>
              </div>
            </div>
          </div>
          <div class="flex-1 bg-image">&nbsp;</div>
        </div>
        <div class="w-11/12 lg:w-[1200px] text-sm mx-auto text-gray-500 my-20">
          <div class="flex space-x-28 drop-shadow-xl">
            <div class="flex-1">
              <img src={welcomePicture} class="w-full rounded-lg" />
            </div>
            <div class="flex-1">
              <h1 class="mt-6 uppercase text-base [word-spacing:5px] text-red-700 font-bold">
                Welcome to CPRS
              </h1>
              <h2 class="my-6 text-2xl font-bold text-black">
                Join the College of Peace and Reconciliation Studies
              </h2>
              <h2 class="text-lg">
                We have dedicated and experienced faculty members with national
                and international experiences that are committed to
                professionalism and integrity. You will find in them a rich
                contextual experience in peacebuilding.
              </h2>
              <div class="mt-10 text-green-700">
                <A
                  href="#"
                  class="w-fit font-bold text-base flex space-x-1 hover:opacity-60"
                >
                  <span class="-mt-0.5">
                    <ArrRight />
                  </span>
                  <span class="">About CPRS</span>
                </A>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-300 mt-20">
          <div class="w-11/12 lg:w-[1200px] text-sm mx-auto text-gray-500 my-20">
            xx
          </div>
        </div>
      </div>
    </MetaProvider>
  );
}

export default App;
