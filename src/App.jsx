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
        Find and Post Hostel Items for Sale and Student Accommodation for rent:
        Fast, Easy, No Stress! - www.offk.ng
      </Title>
      <Meta
        name="description"
        content="Find and Post Hostel Items for Sale and Student Accommodation for rent:
        Fast, Easy, No Stress!"
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
