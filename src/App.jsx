import Header from "./components/Header";
import Footer from "./components/Footer";
import { createSignal } from "solid-js";
import Hero from "./components/Hero";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import PostedItems from "./components/PostedItems";
import Badge from "./components/icons/Badge";
import User from "./components/icons/User";
import Question from "./components/icons/Search";
import { A } from "@solidjs/router";
import Search from "./components/icons/Search";
import Sort from "./components/icons/Sort";
import ArrowDown from "./components/icons/ArrowDown";

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
          <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row-reverse justify-between">
            <div class="w-full sm:w-10/12 sm:mx-auto md:w-[230px] lg:w-[280px] xl:w-[350px]">
              <div class="bg-gray-100 rounded-lg p-2">
                <div class="flex justify-between">
                  <h2 class="py-1">Sponsored Post</h2>
                  <div class="space-x-3">
                    <span class="text-slate-500 cursor-pointer hover:opacity-60 ">
                      .
                    </span>
                  </div>
                </div>
                <div class="space-y-4 mt-2">
                  <div class="bg-green-50  text-slate-600 text-sm p-1.5 sm:p-2 rounded-lg border border-slate-400">
                    <div class="flex justify-between">
                      <h3 class="text-black">
                        <span class="text-red-600 boldTxt">For Sale</span>:{" "}
                        <u>Handout</u>
                      </h3>
                      <div class="flex space-x-1.5 text-xs">
                        <span class="mt-0.5 text-gray-500">15 days</span>
                        <div class="w-fit flex space-x-1 bg-gray-100 border border-gray-200 rounded-lg p-0.5">
                          <Badge status="verified" />
                          <User />
                        </div>
                      </div>
                    </div>
                    <div class="text-sm">
                      How a University Student in Nigeria can start a business
                      with very little (or no) capital.
                    </div>
                    <div>
                      <div class="flex justify-between mt-1 lg:mt-3 text-xs">
                        <div class="flex space-x-0.5">
                          <span class="text-gray-400">Amt:</span>
                          <span class="boldTxt text-xs">1,000 Naira</span>
                        </div>
                        <div class="flex space-x-4">
                          <span class="cursor-pointer hover:opacity-60 text-pink-400 text-xs bg-pink-50 border border-pink-200 rounded px-0.5">
                            Report
                          </span>
                          <span class="bg-slate-600 border border-black px-1 rounded text-white cursor-pointer hover:opacity-60">
                            Chat
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-10/12 sm:mx-auto md:w-[360px] lg:w-[400px] xl:w-[400px]">
              <div class="bg-gray-100 rounded-lg p-2">
                <div class="flex justify-between">
                  <h2 class="py-1">All Posts</h2>
                  <div class="text-black">
                    <div class="cursor-pointer hover:opacity-60 w-fit flex space-x-2 bg-gray-200 border border-black rounded-xl py-1 px-1.5 text-xs">
                      <span>Sort Posts</span>
                    </div>
                  </div>
                </div>
                <div class="space-y-4 mt-2">
                  <div class="bg-white text-slate-600 text-sm p-1.5 sm:p-2 rounded-lg border border-slate-400">
                    <div class="flex justify-between">
                      <h3 class="text-black">
                        <span class="text-teal-600 boldTxt">Accommodation</span>
                        : <u>For Rent</u>
                      </h3>
                      <div class="flex space-x-1.5 text-xs">
                        <span class="mt-0.5 text-gray-500">15 days</span>
                        <div class="w-fit flex space-x-1 bg-gray-100 border border-gray-200 rounded-lg p-0.5">
                          <Badge status="verified" />
                          <User />
                        </div>
                      </div>
                    </div>
                    <div class="text-sm">
                      1 room self-con available very close to main campus.
                    </div>
                    <div class="flex justify-between mt-1 lg:mt-3 text-xs">
                      <div class="flex space-x-0.5">
                        <span class="text-gray-400">Amt:</span>
                        <span class="boldTxt text-xs"> 450,000</span>
                      </div>
                      <div class="flex space-x-4">
                        <span class="cursor-pointer hover:opacity-60 text-pink-400 text-xs bg-pink-50 border border-pink-200 rounded px-0.5">
                          Report
                        </span>
                        <span class="bg-slate-600 border border-black px-1 rounded text-white cursor-pointer hover:opacity-60">
                          Chat
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white text-slate-600 text-sm p-1.5 sm:p-2 rounded-lg border border-slate-400">
                    <div class="flex justify-between">
                      <h3 class="text-black">
                        <span class="text-red-600 boldTxt">For Sale</span>:{" "}
                        <u>Fashion Item</u>
                      </h3>
                      <div class="flex space-x-1.5 text-xs">
                        <span class="mt-0.5 text-gray-500">15 days</span>
                        <div class="w-fit flex space-x-1 bg-gray-100 border border-gray-200 rounded-lg p-0.5">
                          <Badge status="verified" />
                          <User />
                        </div>
                      </div>
                    </div>
                    <div class="text-sm">
                      Beautiful Polo shirts available for sale at student Amt.
                    </div>
                    <div>
                      <div class="flex justify-between mt-1 lg:mt-3 text-xs">
                        <div class="flex space-x-0.5">
                          <span class="text-gray-400">Amt:</span>
                          <span class="boldTxt text-xs">4,500</span>
                        </div>
                        <div class="flex space-x-4">
                          <span class="cursor-pointer hover:opacity-60 text-pink-400 text-xs bg-pink-50 border border-pink-200 rounded px-0.5">
                            Report
                          </span>
                          <span class="bg-slate-600 border border-black px-1 rounded text-white cursor-pointer hover:opacity-60">
                            Chat
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white text-slate-600 text-sm p-1.5 sm:p-2 rounded-lg border border-slate-400">
                    <div class="flex justify-between">
                      <h3 class="text-black">
                        <span class="text-teal-600 boldTxt">Accommodation</span>
                        : <u>Request</u>
                      </h3>
                      <div class="flex space-x-1.5 text-xs">
                        <span class="mt-0.5 text-gray-500">15 days</span>
                        <div class="w-fit flex space-x-1 bg-gray-100 border border-gray-200 rounded-lg p-0.5">
                          <Badge status="unverified" />
                          <User />
                        </div>
                      </div>
                    </div>
                    <div class="text-sm">
                      I need 1 room (not self-con) anywhere around school gate
                      urgently.
                    </div>
                    <div class="flex justify-between mt-1 lg:mt-3 text-xs">
                      <div class="flex space-x-0.5">
                        <span class="text-gray-400">Amt:</span>
                        <span class="boldTxt text-xs">Budget 250k</span>
                      </div>
                      <div class="flex space-x-4">
                        <span class="cursor-pointer hover:opacity-60 text-pink-400 text-xs bg-pink-50 border border-pink-200 rounded px-0.5">
                          Report
                        </span>
                        <span class="bg-slate-600 border border-black px-1 rounded text-white cursor-pointer hover:opacity-60">
                          Chat
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white text-slate-600 text-sm p-1.5 sm:p-2 rounded-lg border border-slate-400">
                    <div class="flex justify-between">
                      <h3 class="text-black">
                        <span class="text-blue-600 boldTxt">Event</span>:{" "}
                        <u>Religious</u>
                      </h3>
                      <div class="flex space-x-1.5 text-xs">
                        <span class="mt-0.5 text-gray-500">15 days</span>
                        <div class="w-fit flex space-x-1 bg-gray-100 border border-gray-200 rounded-lg p-0.5">
                          <Badge status="unverified" />
                          <User />
                        </div>
                      </div>
                    </div>
                    <div class="text-sm">
                      Join us at Celebration Victory Assembly for a memorable
                      service this Sunday. There'll be free package for 1st
                      timers.
                    </div>
                    <div>
                      <div class="flex justify-between mt-1 lg:mt-3 text-xs">
                        <div class="flex space-x-0.5">
                          <span class="text-gray-400">Amt:</span>
                          <span class="boldTxt text-xs"> FREE</span>
                        </div>
                        <div class="flex space-x-4">
                          <span class="cursor-pointer hover:opacity-60 text-pink-400 text-xs bg-pink-50 border border-pink-200 rounded px-0.5">
                            Report
                          </span>
                          <span class="bg-slate-600 border border-black px-1 rounded text-white cursor-pointer hover:opacity-60">
                            Chat
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
