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
              <div class="bg-blue-50 rounded-lg p-2">
                <div class="flex justify-between">
                  <h2>Sponsored Post</h2>
                  <div class="space-x-3">
                    <span class="text-slate-500 cursor-pointer hover:opacity-60 ">
                      <Question />
                    </span>
                  </div>
                </div>
                <div class="space-y-4 mt-2">
                  <div class="bg-white text-slate-600 text-sm p-1.5 sm:p-2 rounded-lg border border-slate-200">
                    <div class="flex justify-between">
                      <h3 class="text-black">
                        <span class="text-red-600 boldTxt">For Sale</span>:
                        &nbsp;<u>Handout</u>
                      </h3>
                      <div class="w-fit flex space-x-1 bg-gray-100 border border-gray-200 rounded-xl px-0.5 cursor-pointer hover:opacity-60">
                        <Badge bgColor="#04b076" />
                        <User />
                      </div>
                    </div>
                    <div class="text-sm">
                      How a University Student in Nigeria can start a business
                      with very little (or no) capital.
                    </div>
                    <div>
                      <div class="flex justify-between mt-1 lg:mt-3 text-xs">
                        <span class="bg-yellow-50 border border-yellow-300 px-1 rounded text-xs cursor-pointer hover:opacity-60">
                          1,000 Naira
                        </span>
                        <div class="flex space-x-1">
                          <span class="text-gray-400 capitalize">12 days</span>
                          <span class="bg-slate-600 border border-black px-1 rounded text-white cursor-pointer hover:opacity-60">
                            Chat with poster
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-[360px] lg:w-[400px] xl:w-[450px]">
              <div class="bg-blue-50 rounded-lg p-2">
                <div class="flex justify-between">
                  <h2>All Posts</h2>
                  <div class="space-x-3 text-slate-400">
                    <span class="text-purple-800 cursor-pointer hover:opacity-60 underline decoration-dotted decoration-purple-600">
                      SORT
                    </span>
                  </div>
                </div>
                <div class="space-y-2 mt-2">
                  <div class="bg-white text-slate-600 text-sm p-1.5 sm:p-2 rounded-lg border border-slate-200">
                    <div class="flex justify-between">
                      <h3 class="text-black">
                        <span class="text-cyan-700 boldTxt">Accommodation</span>
                        : &nbsp;<u>For Rent</u>
                      </h3>
                      <div class="w-fit flex space-x-1 bg-gray-100 border border-gray-200 rounded-xl px-0.5 cursor-pointer hover:opacity-60">
                        <Badge bgColor="#04b076" />
                        <User />
                      </div>
                    </div>
                    <div class="text-sm">
                      1 room self-con available very close to main campus.
                    </div>
                    <div class="flex justify-between mt-1 lg:mt-3 text-xs">
                      <span class="bg-yellow-50 border border-yellow-300 px-1 rounded text-xs cursor-pointer hover:opacity-60">
                        450,000
                      </span>
                      <div class="flex space-x-1">
                        <span class="text-gray-400 capitalize">15 days</span>
                        <span class="bg-slate-600 border border-black px-1 rounded text-white cursor-pointer hover:opacity-60">
                          Chat with poster
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white text-slate-600 text-sm p-1.5 sm:p-2 rounded-lg border border-slate-200">
                    <div class="flex justify-between">
                      <h3 class="text-black">
                        <span class="text-red-600 boldTxt">For Sale</span>
                        :&nbsp;
                        <u>Fashion Item</u>
                      </h3>
                      <div class="w-fit flex space-x-1 bg-gray-100 border border-gray-200 rounded-xl px-0.5 cursor-pointer hover:opacity-60">
                        <Badge bgColor="#000000" />
                        <User />
                      </div>
                    </div>
                    <div class="text-sm">
                      Beautiful Polo shirts available for sale at student price.
                    </div>
                    <div>
                      <div class="flex justify-between mt-1 lg:mt-3 text-xs">
                        <span class="bg-yellow-50 border border-yellow-300 px-1 rounded text-xs cursor-pointer hover:opacity-60">
                          4,500
                        </span>
                        <div class="flex space-x-1">
                          <span class="text-gray-400 capitalize">5 days</span>
                          <span class="bg-slate-600 border border-black px-1 rounded text-white cursor-pointer hover:opacity-60">
                            Chat with poster
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white text-slate-600 text-sm p-1.5 sm:p-2 rounded-lg border border-slate-200">
                    <div class="flex justify-between">
                      <h3 class="text-black">
                        <span class="text-cyan-700 boldTxt">Accommodation</span>
                        : &nbsp;<u>Request</u>
                      </h3>
                      <div class="w-fit flex space-x-1 bg-gray-100 border border-gray-200 rounded-xl px-0.5 cursor-pointer hover:opacity-60">
                        <Badge bgColor="#04b076" />
                        <User />
                      </div>
                    </div>
                    <div class="text-sm">
                      I need 1 room (not self-con) anywhere around school gate
                      urgently.
                    </div>
                    <div class="flex justify-between mt-1 lg:mt-3 text-xs">
                      <span class="bg-yellow-50 border border-yellow-300 px-1 rounded text-xs cursor-pointer hover:opacity-60">
                        Budget 250k
                      </span>
                      <div class="flex space-x-1">
                        <span class="text-gray-400 capitalize">15 days</span>
                        <span class="bg-slate-600 border border-black px-1 rounded text-white cursor-pointer hover:opacity-60">
                          Chat with poster
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white text-slate-600 text-sm p-1.5 sm:p-2 rounded-lg border border-slate-200">
                    <div class="flex justify-between">
                      <h3 class="text-black">
                        <span class="text-blue-600 boldTxt">Event</span>: &nbsp;
                        <u>Religious</u>
                      </h3>
                      <div class="w-fit flex space-x-1 bg-gray-100 border border-gray-200 rounded-xl px-0.5 cursor-pointer hover:opacity-60">
                        <Badge bgColor="#04b076" />
                        <User />
                      </div>
                    </div>
                    <div class="text-sm">
                      Join us at Celebration Victory Assembly for a memorable
                      service this Sunday. There'll be free package for 1st
                      timers.
                    </div>
                    <div>
                      <div class="flex justify-between mt-1 lg:mt-3 text-xs">
                        <span class="bg-yellow-50 border border-yellow-300 px-1 rounded text-xs cursor-pointer hover:opacity-60">
                          FREE
                        </span>
                        <div class="flex space-x-1">
                          <span class="text-gray-400 capitalize">1 day</span>
                          <span class="bg-slate-600 border border-black px-1 rounded text-white cursor-pointer hover:opacity-60">
                            Chat with poster
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
