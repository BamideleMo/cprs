import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";
import oops from "../assets/404.jpg";

function NotFound() {
  return (
    <MetaProvider>
      <Title>Not Found - www.hostelsell.ng</Title>
      <Meta
        name="description"
        content="Oops! The page you're looking for was not found."
      ></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2">
            <div class="text-center">
              <h1 class="text-xl sm:text-3xl font-semibold space-y-0">
                <div>Page Not Found</div>
              </h1>
              <h2 class="text-lg sm:text-xl mt-4 sm:mt-4 text-gray-600 leading-tight">
                Sorry! The page you're looking for have moved or doesn't exist.
              </h2>
              <div class="my-12 space-y-6">
                <img src={oops} class="w-40 rounded-full mx-auto" />
                <p class="">
                  <A href="/" class="text-gray-700 hover:opacity-60 underline">
                    Please return to
                    <br />
                    Home page
                  </A>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default NotFound;
