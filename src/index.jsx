/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import App from "./App";
import Terms from "./pages/Terms";
import Safety from "./pages/Safety";
import HowItWorks from "./pages/HowItWorks";
import NotFound from "./pages/NotFound";
import Convos from "./pages/Convos";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router>
      <Route path="/" component={App} />
      <Route path="/terms" component={Terms} />
      <Route path="/safety" component={Safety} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/convos" component={Convos} />
      <Route path="*" component={NotFound} />
    </Router>
  ),
  root
);
