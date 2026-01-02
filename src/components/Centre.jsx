import { A } from "@solidjs/router";
import ArrRight from "./icons/ArrRight";

function Centre(props) {
  return (
    <div class="bg-blue-700 py-10 lg:py-20 text-white">
      <div class="w-11/12 lg:w-[1200px] text-sm mx-auto">
        <h2 class="mt-6 text-xl lg:text-2xl font-bold text-blue-200">
          Centre for Professional Development (CPD)
        </h2>
        <div class="mt-6 text-lg flex flex-col lg:flex-row justify-between">
          <div class="lg:w-4/5">
            The Institute’s academic/training division – The Centre for
            Professional Development (CPD) fills a huge gap in the training and
            capacity – building of prospective and established practitioners in
            the human and social development sector in Nigeria.
          </div>
          <div class="lg:w-1/5 pt-8 lg:pt-4 lg:text-center">
            <A
              href="/cpd"
              class="border border-black p-3 bg-green-700 hover:opacity-60"
            >
              <ArrRight />
              <span>Learn More</span>
            </A>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Centre;
