import { A } from "@solidjs/router";
import welcomePicture from "../assets/CPRS-graduation-picture-2025.jpg";
import ArrRight from "./icons/ArrRight";

function Welcome(props) {
  return (
    <div class="w-11/12 lg:w-[1200px] text-sm mx-auto text-gray-500 my-10 lg:my-20">
      <div class="flex lg:space-x-28 drop-shadow-xl">
        <div class="hidden lg:block lg:flex-1">
          <img src={welcomePicture} class="w-full rounded-lg" />
        </div>
        <div class="w-full lg:flex-1 drop-shadow-lg">
          <h1 class="lg:mt-6 uppercase text-base [word-spacing:5px] text-red-700 font-bold">
            Welcome to CPRS
          </h1>
          <h2 class="my-3 lg:my-6 text-2xl font-bold text-black leading-tight">
            Join the College of Peace and Reconciliation Studies
          </h2>
          <h2 class="text-lg">
            We have dedicated and experienced faculty members with national and
            international experiences that are committed to professionalism and
            integrity. You will find in them a rich contextual experience in
            peacebuilding.
          </h2>
          <div class="mt-4 lg:mt-10 text-green-700">
            <A
              href="/about-cprs"
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
  );
}

export default Welcome;
