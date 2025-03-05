import Header from "./components/Header";
import Footer from "./components/Footer";
import { createSignal } from "solid-js";
import Hero from "./components/Hero";
import Requests from "./components/Requests";

function App() {
  return (
    <div class="bg-white text-sm">
      <Header />
      <section class="w-full px-1 sm:w-[620px] mx-auto">
        <Hero />
        <Requests />
      </section>
      <Footer />
    </div>
  );
}

export default App;
