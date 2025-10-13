import Header from "./components/Header";
import Footer from "./components/Footer";
import { createSignal } from "solid-js";
import Hero from "./components/Hero";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import PostedItems from "./components/PostedItems";
import Badge from "./components/icons/Badge";
import User from "./components/icons/User";
import Question from "./components/icons/Question";
import { A } from "@solidjs/router";

function App() {
  return (
    <MetaProvider>
      <Title>
        Find and Post Hostel Items for Sale: Fast, Easy, No Stress! -
        www.offk.ng
      </Title>
      <Meta
        name="description"
        content="Find and Post Hostel Items for Sale:
        Fast, Easy, No Stress!"
      ></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <Hero />
        <section class="w-full px-2 sm:w-[620px] lg:w-[720px] xl:w-[800px] mx-auto mt-6 lg:mt-10">
          {/* <PostedItems /> */}
          <div class="flex flex-col space-y-4 sm:space-y-0 sm:flex-row-reverse justify-between">
            <div class="w-full sm:w-[230px] lg:w-[280px] xl:w-[300px]">
              <div class=" bg-blue-100 rounded-lg p-2">
                <div class="flex justify-between">
                  <h2>Advertisement</h2>
                  <div class="space-x-3">
                    <span class="text-slate-500 cursor-pointer hover:opacity-60 ">
                      <Question />
                    </span>
                  </div>
                </div>
                <div class="space-y-4 mt-2">
                  <div class="bg-white text-slate-600 text-sm p-3 rounded-lg border border-slate-200">
                    <h3 class="text-blue-600">Internship Oppurtunity:</h3>
                    <div>
                      Will you want to work with OnK.ng remotely as a campus
                      content curator and get paid?
                    </div>
                    <div class="pt-2 text-xs">
                      <A
                        href="/"
                        class="bg-slate-600 border border-black px-1 rounded text-white cursor-pointer hover:opacity-60"
                      >
                        See Details
                      </A>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-[360px] lg:w-[400px] xl:w-[450px]">
              <div class="bg-slate-200 rounded-lg p-2">
                <div class="flex justify-between">
                  <h2>Latest Post</h2>
                  <div class="space-x-3 text-slate-600">
                    <span class="text-purple-800 cursor-pointer hover:opacity-60">
                      Search
                    </span>
                    <span>|</span>
                    <span class="text-purple-800 cursor-pointer hover:opacity-60">
                      Sort
                    </span>
                  </div>
                </div>
                <div class="space-y-4 mt-2">
                  <div class="bg-white text-slate-600 text-sm p-3 rounded-lg border border-slate-200">
                    <div class="flex justify-between">
                      <h3 class="text-green-600">
                        Available <u>Accommodation</u>:
                      </h3>
                      <div class="w-fit flex space-x-1 bg-gray-200 border border-gray-300 rounded-xl p-0.5 cursor-pointer hover:opacity-60">
                        <Badge bgColor="blue" />
                        <User />
                      </div>
                    </div>
                    <div class="my-2">
                      1 room self-con available very close to main campus.
                    </div>
                    <div class="flex justify-between">
                      <span class="bg-yellow-200 border border-yellow-300  px-1 rounded text-xs cursor-pointer hover:opacity-60">
                        450,000
                      </span>
                      <div class="flex space-x-2 text-xs">
                        <span class="text-gray-400">15 days ago</span>
                        <span class="bg-slate-600 border border-black px-1 rounded text-white cursor-pointer hover:opacity-60">
                          Chat Poster
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white text-slate-600 text-sm p-3 rounded-lg border border-slate-200">
                    <div class="flex justify-between">
                      <h3 class="text-red-600">
                        Fashion Item <u>For Sale</u>:
                      </h3>
                      <div class="w-fit flex space-x-1 bg-gray-200 border border-gray-300 rounded-xl p-0.5 cursor-pointer hover:opacity-60">
                        <Badge bgColor="gray" />
                        <User />
                      </div>
                    </div>
                    <div class="my-2">
                      Beautiful Polo shirts available for sale at student price.
                    </div>
                    <div>
                      <div class="flex justify-between">
                        <span class="bg-yellow-200 border border-yellow-300  px-1 rounded text-xs cursor-pointer hover:opacity-60">
                          4,500
                        </span>
                        <div class="flex space-x-2 text-xs">
                          <span class="text-gray-400">5 days ago</span>
                          <span class="bg-slate-600 border border-black px-1 rounded text-white cursor-pointer hover:opacity-60">
                            Chat Poster
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white text-slate-600 text-sm p-3 rounded-lg border border-slate-200">
                    <div class="flex justify-between">
                      <h3 class="text-cyan-600">
                        Religious <u>Event</u>:
                      </h3>
                      <div class="w-fit flex space-x-1 bg-gray-200 border border-gray-300 rounded-xl p-0.5 cursor-pointer hover:opacity-60">
                        <Badge bgColor="blue" />
                        <User />
                      </div>
                    </div>
                    <div class="my-2">
                      Join us at Celebration Victory Assembly for a memorable
                      service this Sunday. There'll be free package for 1st
                      timers.
                    </div>
                    <div>
                      <div class="flex justify-between">
                        <span class="bg-yellow-200 border border-yellow-300 px-1 rounded text-xs cursor-pointer hover:opacity-60">
                          FREE
                        </span>
                        <div class="flex space-x-2 text-xs">
                          <span class="text-gray-400">1 day ago</span>
                          <span class="bg-slate-600 border border-black px-1 rounded text-white cursor-pointer hover:opacity-60">
                            Chat Poster
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default App;
