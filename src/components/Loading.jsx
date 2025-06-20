import Logo from "./Logo";

function Loading() {
  return (
    <>
      <div class="fixed z-40 bg-slate-950 flex items-center h-screen w-screen top-0 bottom-0 left-0 right-0">
        <div class="w-11/12 sm:w-[620px] 2xl:w-[900px] mx-auto">
          <div class="mx-auto animate-bounce flex items-center">
            <span class="w-fit mx-auto bg-white p-2 rounded">
              <Logo />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loading;
