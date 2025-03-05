import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";

function Agents() {
  return (
    <MetaProvider>
      <Title>
        For Agents - The Simplest Way to Find ready-to-rent student clients! -
        www.offk.ng
      </Title>
      <Meta
        name="description"
        content="The Simplest Way to Find Ready-to-Rent student clients!"
      ></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-10 text-left">
            <h1 class="text-xl sm:text-4xl font-semibold">
              Are you a House Agent?
              <span class="block h-3">&nbsp;</span>
              Can you help Students find Off-Campus Accommodation?
            </h1>
            <h2 class="text-lg sm:text-xl mt-4 text-gray-600 leading-tight">
              Join OffK.ng today and start getting more clients!
            </h2>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default Agents;
