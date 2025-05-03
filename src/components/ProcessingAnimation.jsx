import { A } from "@solidjs/router";
import Logo from "./Logo";

function ProcessingAnimation(props) {
  return (
    <div class="animate-pulse w-fit mx-auto flex space-x-3 py-8">
      <span class="inline-block w-12 h-2 bg-slate-600 rounded-full">
        &nbsp;
      </span>
      <span class="inline-block w-10 h-2 bg-slate-600 rounded-full">
        &nbsp;
      </span>
      <span class="inline-block w-8 h-2 bg-slate-600 rounded-full">&nbsp;</span>
      <span class="inline-block w-4 h-2 bg-slate-600 rounded-full">&nbsp;</span>
      <span class="inline-block w-2 h-2 bg-slate-600 rounded-full">&nbsp;</span>
    </div>
  );
}

export default ProcessingAnimation;
