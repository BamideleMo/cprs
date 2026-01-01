import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";
import logo from "../CPRS-logo.jpg";
import chatIcon from "./assets/whatsapp-icon.png";
import welcomePicture from "./assets/CPRS-graduation-picture-2025.jpg";
import TextCarousel from "./components/TextCarousel";
import ArrRight from "./components/icons/ArrRight";
import Files from "./components/icons/Files";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Bar from "./components/icons/Bar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Programmes from "./components/Programmes";
import Centre from "./components/Centre";

function App() {
  return (
    <MetaProvider>
      <Title>College of Peace and Reconciliation Studies (CPRS) Jos</Title>
      <Meta name="description" content="CPRS"></Meta>
      <div class="bg-white text-sm">
        <Header />

        <Hero />
        <Welcome />
        <Programmes />
        <Centre/>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default App;
