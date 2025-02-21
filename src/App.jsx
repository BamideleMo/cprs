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
      <Show when={popup()}>
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
            <div class="bg-white p-4  border-t-4 border-purple-600 py-4">
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
            <WelcomeCard />

            <div class="bg-gray-100 border border-gray-300 p-2 rounded-lg">
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
                    setPopHd("Filter List");
                  }}
                  class="bg-white mt-1 cursor-pointer hover:opacity-60 flex items-center justify-between border border-black p-2 rounded text-sm"
                >
                  <div class="text-gray-400">Filter List:</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 text-gray-400"
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
            <a
              class="twitter-timeline"
              data-lang="en"
              data-height="200"
              href="https://twitter.com/Digital_Nmesoma?ref_src=twsrc%5Etfw"
            >
              Tweets by Digital_Nmesoma
            </a>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
            {/* <section>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PostCard
                  img="https://storage.googleapis.com/postcrafts-public-content/headshotpro/reviews/679bf3eaec8c91914dead363-679bfe98ec8c91914deb0af2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=headshotpro-backend-production%40stockai-362303.iam.gserviceaccount.com%2F20250218%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250218T020329Z&X-Goog-Expires=518400&X-Goog-SignedHeaders=host&X-Goog-Signature=8c5c0f6293c6dd68aa3b46fd056678ba0121152e3c8ce510ef0696cdf18686f0187a3f0c51b514bd9e5d0f4a6cb6852ff8512a4fd7dc2e61c898e0badd8f74c0eba52271725c7f1d840915fce4343d2df64e49db33408b2ab10d7bc0cf264e6d62efdf426c547a598b137474a09be4580a3bdd4f5762b885c7a4c87727ab0a3be514debcb024afb5ba203e66ff745ae5d68af152d815d9fb9234f7e0f6f9f11e24a9c4b6cca4dc9afa8a83d327096cc6b78ae12ab1a863bdc5bbc7e9f172e252c08bd3db5761b262742adfb9ec910a82ec6c5fb6ee0058abf9cf3dbb8ac76c90884dd51124bfb13d4cd416c0ddf9178e50d398d0fb6144a9b6260f99e5161b21"
                  badge="verified"
                  rating="4.1"
                  rev="24"
                  comments="4"
                  fullname="Samson Linus"
                  fifee="2,500"
                  rifee="1,000"
                  bio="If you're looking for accommodation around the main campus of university of Abuja I am you plug."
                />
                <PostCard
                  img="https://storage.googleapis.com/postcrafts-public-content/headshotpro/reviews/6778544394bfe0dc75ba6c0e-67785dc85ded959ee7b05e22.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=headshotpro-backend-production%40stockai-362303.iam.gserviceaccount.com%2F20250218%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250218T020329Z&X-Goog-Expires=518400&X-Goog-SignedHeaders=host&X-Goog-Signature=4656a080651012415d160573e227ce8605e2c9cd612158eab87a9274772a060787bfd1027c1dba8e4020b8ae229d7583162290d31ae92c3a231db4db0492d780a150f929194cb6681d7f3991be95da4ee1dbb66d757dd220f9a634f96a5b135a010cdca415c711885b485136dbabe02e92e6699dbf5e3c8215e22131953150bcde700f46002c7043e045ee1434529afa5bd0b84155bcf8661297a1ca7223c2a21e879417fee22038c48e6e17108af126f817998c5665c2033191914ff613dda1306eaa6b6da32a3836c5005e9ac9dbe4815a26f2e90035c0c89032ac086d169f3e4802335a03848d8b3dcf384c46507b1c3d6b99fd6aabd0ed108ce3720d8683"
                  badge="verified"
                  rating="3.4"
                  rev="27"
                  comments="0"
                  fullname="Okey Ukason"
                  fifee="2,000"
                  rifee="0"
                  bio="let me help you find a house to rent around uniabuja"
                />
                <PostCard
                  img="https://th.bing.com/th/id/OIP._FdlcwbxcwSGO3X3LRnupAHaHa?rs=1&pid=ImgDetMain"
                  badge="verified"
                  rating="2.3"
                  rev="36"
                  comments="104"
                  fullname="Bamidele John"
                  fifee="2,500"
                  rifee="1,500"
                  bio="I help students find suitable off campus accommodation around university of Abuja."
                />
                <PostCard
                  img="https://dynl.mktgcdn.com/p/tbuPm9c4hCYcws1eupGO6OYDcZRr0QRHvnFEdy23Q3Y/888x1200.jpg"
                  badge="unverified"
                  rating="3.5"
                  rev="6"
                  comments="4"
                  fullname="Yusuf Bugama"
                  fifee="2,500"
                  rifee="1,000"
                  bio="Looking for house to rent around uni Abuja? Send me a dm now and I will help you. No stress."
                />
                <PostCard
                  img="https://law.utexas.edu/wp-content/uploads/sites/31/2023/01/Baldwin-Jeremiah-Headshot-scaled-e1673459906731-991x1000.jpg"
                  badge="uverified"
                  rating="3.7"
                  rev="13"
                  comments="0"
                  fullname="Abdul Agumu"
                  fifee="2,500"
                  rifee="1,000"
                  bio="Get access to the best off campus student accommodations around uniabuja; both main campus and at permanent site."
                />
              </div>
            </section> */}
          </div>
        </section>
      </section>
      <Footer
        popup={popup}
        setPopup={setPopup}
        popHd={popHd}
        setPopHd={setPopHd}
      />
    </div>
  );
}

export default App;
