import PostCard from "./components/PostCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createSignal } from "solid-js";
import PopContent from "./components/PopContent";
import GistCard from "./components/GistCard";
import WelcomeCard from "./components/WelcomeCard";
import Logo from "./components/Logo";

function App() {
  const [popup, setPopup] = createSignal(false);
  const [popHd, setPopHd] = createSignal("");

  return (
    <div class="bg-white text-sm">
      {/* <Show when={popup()}>
        <div class="fixed z-40 bg-slate-900 bg-opacity-90 flex items-center h-screen w-screen top-0 bottom-0 left-0 right-0">
          <div class="w-11/12 lg:w-7/12 mx-auto">
            <div class="text-right mb-1">
              <svg
                onClick={() => setPopup(false)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-12 text-white inline hover:opacity-60 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div class="bg-white p-4  border-t-4 border-orange-500 py-4">
              <PopContent hd={popHd()} />
            </div>
          </div>
        </div>
      </Show>
      <Header
        popup={popup}
        setPopup={setPopup}
        popHd={popHd}
        setPopHd={setPopHd}
      />

      <section class="w-11/12 lg:w-[900px] mx-auto">
        <section class="mt-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div class="md:w-2/6 space-y-6">
            <WelcomeCard/>
            <div class="border border-gray-200 p-2 rounded-lg">
              <div class="space-y-1">
                <div class="space-x-1">
                  <b>Showing:</b>
                  <span>
                    All types of post, by all types of posters, starting with
                    the most recent.
                  </span>
                </div>
                <div
                  onClick={() => {
                    setPopup(true);
                    setPopHd("Filter Post");
                  }}
                  class="mt-1 cursor-pointer hover:opacity-60 flex items-center justify-between border border-black p-2 rounded text-sm"
                >
                  <div>Filter Posts:</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-4/6">
            <section class="space-y-8">
              <PostCard
                badge="unverified"
                post="rent"
                comment="0"
                txt="Pls self contain needed in old karu or nyanya jukwoyi road,budget is 300 to 350, ready to pay now"
              />
              <PostCard
                badge="unverified"
                post="request"
                comment="20"
                txt="Please I need self contained in jikwoyi or orozo. Budget is 150k"
              />
              <PostCard
                badge="verified"
                post="rent"
                comment="43"
                txt="-3 bedrooms available for rent at kurudu by block industry. -pop all the way -water -Personal prepaid meter -gated, fenced, security network -total package:1.420. Actual rent: 1.1m (including agency fees) Video available on request -inspection fee 5k"
              />
              <GistCard />
              <PostCard
                badge="verified"
                post="request"
                comment="33"
                txt="Standard 1bedroom flat for rent at zone C Gidandaya estate,With running water,pop, prepared metre and fenced."
              />
              <PostCard
                badge="unverified"
                post="rent"
                comment="13"
                txt="Standalone Two Bedroom Avaliable for Rent. Location kururdu before Afra Estate. Rent 1.5M. POP finishing. Borehole water. Inspection Fee Apply. DM"
              />
            </section>
          </div>
        </section>
      </section>
      <Footer
        popup={popup}
        setPopup={setPopup}
        popHd={popHd}
        setPopHd={setPopHd}
      /> */}
      <div class="text-center w-11/12 lg:w-2/5 mx-auto space-y-8 mt-12">
        <Logo />
        <h2 class="text-3xl ld:text-5xl text-blue-800">
          We're Building the Operating System for University Students'
          Off-Campus Accommodation.
        </h2>
        <h3 class="text-xl lg:text-2xl">Launching Soon.. .</h3>
      </div>
    </div>
  );
}

export default App;
