import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function AccountCreated() {
  return (
    <MetaProvider>
      <Title>Account Created - www.offk.ng</Title>
      <Meta name="description" content="Account Created."></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2 text-left">
            <h1 class="text-center text-xl sm:text-3xl font-semibold space-y-0">
              <div>Account Created</div>
            </h1>
            <h2 class="text-lg sm:text-xl mt-4 sm:mt-4 text-gray-600 leading-tight">
              Your account was created successfully.
            </h2>
            <div class="my-12 space-x-3">
              <A
                href="/login"
                class="border border-gray-600 text-gray-600 p-2 rounded-lg hover:opacity-60"
              >
                Log In
              </A>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default AccountCreated;
