import Header from "./components/Header";
import Footer from "./components/Footer";
import { createSignal } from "solid-js";
import Hero from "./components/Hero";
import Requests from "./components/Requests";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";

function App() {
  return (
    <MetaProvider>
      <Title>
        The Simplest Way to Find Off-Campus Accommodation - www.offk.ng
      </Title>
      <Meta
        name="description"
        content="The Simplest Way to Find Off-Campus Accommodation."
      ></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <Hero />
          <Requests />
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default App;
