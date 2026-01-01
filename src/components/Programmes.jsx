import { A } from "@solidjs/router";
import welcomePicture from "../assets/CPRS-graduation-picture-2025.jpg";
import ArrRight from "./icons/ArrRight";
import Files from "./icons/Files";

function Programmes(props) {
  return (
    <div class="border-t border-gray-300 mt-4 lg:mt-20 py-10">
      <div class="w-11/12 lg:w-[1200px] text-sm mx-auto text-gray-500 lg:my-20">
        <h1 class="mt-6 uppercase text-base [word-spacing:5px] text-red-700 font-bold">
          Our Faculty
        </h1>
        <h2 class="mt-6 text-2xl font-bold text-black">CPRS Programmes</h2>
        <div class="mt-2 text-lg lg:text-xl w-full lg:w-3/5 font-bold">
          Our curriculum empowers students with the critical mediation and
          leadership skills necessary to navigate the complexities of today’s
          global conflicts.
        </div>
        <div class="mt-6 lg:mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-base">
          <div class="border border-gray-700 rounded-lg shadow-lg p-4 drop-shadow-lg">
            <h2 class="text-lg text-blue-800 font-bold leading-tight">
              DIPLOMA PROGRAMMES
            </h2>
            <div class="mt-2 text-sm flex space-x-1 text-gray-400">
              <Files />
              <b>3 Programmes</b>
            </div>
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
          <div class="border border-gray-700 rounded-lg shadow-lg p-4 drop-shadow-lg">
            <h2 class="text-lg text-blue-800 font-bold leading-tight">
              UNDERGRADUATE PROGRAMMES
            </h2>
            <div class="mt-2 text-sm flex space-x-1 text-gray-400">
              <Files />
              <b>4 Programmes</b>
            </div>
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
          <div class="border border-gray-700 rounded-lg shadow-lg p-4 drop-shadow-lg">
            <h2 class="text-lg text-blue-800 font-bold leading-tight">
              POSTGRADUATE DIPLOMA
            </h2>
            <div class="mt-2 text-sm flex space-x-1 text-gray-400">
              <Files />
              <b>2 Programmes</b>
            </div>
            <ul class="my-4 space-y-6">
              <li class="border-l border-dotted border-red-700 leading-tight pl-1">
                Postgraduate Diploma Conflict Transformation
              </li>

              <li class="border-l border-dotted border-red-700 leading-tight pl-1">
                Postgraduate Diploma Criminology & Security Technology
              </li>
            </ul>
          </div>
          <div class="border border-gray-700 rounded-lg shadow-lg p-4 drop-shadow-lg">
            <h2 class="text-lg text-blue-800 font-bold leading-tight">
              MASTERS PROGRAMMES
            </h2>
            <div class="mt-2 text-sm flex space-x-1 text-gray-400">
              <Files />
              <b>5 Programmes</b>
            </div>
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
        <div class="mt-8 flex">
          <div class="grow pt-1.5">
            <div class="border-y border-dashed border-gray-200 h-1 rounded-full">&nbsp;</div>
          </div>
          <div class="w-fit">
            <A
              href="/admissions"
              class="flex text-green-700 font-bold hover:opacity-60"
            >
              <ArrRight />
              <span class="-mt-0.5">See Entry Requirements</span>
            </A>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programmes;
