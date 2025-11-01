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
      <Title>CPRS</Title>
      <Meta name="description" content="CPRS"></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <div class="w-11/12 lg:w-2/4 text-lg text-gray-400 text-center">
          Coming soon.
        </div>
      </div>
    </MetaProvider>
  );
}

export default App;
