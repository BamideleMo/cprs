import Header from "./components/Header";
import Footer from "./components/Footer";
import { createSignal } from "solid-js";
import Hero from "./components/Hero";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import PostedItems from "./components/PostedItems";

function App() {
  return (
    <MetaProvider>
      <Title>
        A Simple Notice Board for Hostel Items on Sale - www.hostelsell.ng
      </Title>
      <Meta
        name="description"
        content="A Simple Notice Board for Hostel Items on Sale."
      ></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <Hero />
          <PostedItems />
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default App;
