import { A } from "@solidjs/router";
import chatIcon from "../assets/whatsapp-icon.png";
import TextCarousel from "./TextCarousel";

function Hero(props) {
  return (
    <div class="bg-blue-800 flex flex-col lg:flex-row">
      <div class="lg:flex-1">
        <div class="w-11/12 lg:w-8/12 mx-auto">
          <h1 class="mt-10 leading-tight lg:mt-40 lg:mb-6 uppercase text-base [word-spacing:5px] text-blue-200 font-bold">
            College of Peace and Reconciliation Studies, Jos
          </h1>
          <TextCarousel />
          <div class="pb-6 flex space-x-3 lg:space-x-6 mt-4 font-bold text-xs md:text-sm">
            <A
              href="/"
              class="bg-green-700 text-white p-2 lg:p-3 border border-black hover:opacity-60"
            >
              View Programmes
            </A>
            <A
              href="/"
              class="flex w-fit space-x-1 text-red-700 bg-gray-50 p-2 lg:p-3 border border-red-700 hover:opacity-60"
            >
              <span>
                <img src={chatIcon} class="w-4 lg:mt-0.5" />
              </span>
              <span>Chat with Admissions Office</span>
            </A>
          </div>
        </div>
      </div>
      <div class="lg:flex-1 bg-image min-h-[200px] lg:min-h-[616px]">&nbsp;</div>
    </div>
  );
}

export default Hero;
