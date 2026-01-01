import { A } from "@solidjs/router";
import Menu from "./Menu";
import Bar from "./icons/Bar";
import logo from "../../CPRS-logo.jpg";

function Header(props) {
  return (
    <>
      <header class="border-t-2 border-yellow-400 py-2">
        <div class="w-11/12 lg:w-[1200px] mx-auto">
          <div class="flex justify-between">
            <div class="w-fit space-x-1 flex">
              <div class="w-16 lg:w-20">
                <img src={logo} class="w-full" />
              </div>
              <div class="hidden lg:block drop-shadow-lg uppercase -space-y-2 pt-3 font-bold text-lg">
                <div>College of Peace</div>
                <div>and Reconciliation Studies, Jos</div>
              </div>
            </div>
            <div class="w-fit drop-shadow-lg">
              <div class="hidden lg:block">
                <Menu />
              </div>
              <div class="lg:hidden mt-2">
                <span>
                  <Bar />
                </span>
              </div>
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
    </>
  );
}

export default Header;
