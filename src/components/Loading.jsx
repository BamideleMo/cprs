
import Logo from "./Logo";

function Loading() {
  return (
    <>
      <div class="fixed z-40 bg-slate-900 bg-opacity-90 flex items-center h-screen w-screen top-0 bottom-0 left-0 right-0">
        <div class="w-11/12 sm:w-[620px] mx-auto">
          <div class="w-28 h-28 rounded-full bg-white mx-auto animate-bounce flex items-center">
            <span class="w-fit mx-auto">
              <Logo />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loading;
