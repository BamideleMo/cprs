/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import App from "./App";
import Terms from "./pages/Terms";
import Safety from "./pages/Safety";
import NotFound from "./pages/NotFound";
import WhatIsOffK from "./pages/WhatIsOffK";
import FAQs from "./pages/FAQs";
import PostAd1 from "./pages/post-ad/PostAd1";
import PostAd2 from "./pages/post-ad/PostAd2";
import Filtered from "./pages/Filtered";
import Searched from "./pages/Searched";
import Gists from "./pages/Gists";
import SocialImpact from "./pages/SocialImpact";

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
      <Route path="/faqs" component={FAQs} />
      <Route path="/what-is-offk" component={WhatIsOffK} />
      <Route path="/post-ad/1" component={PostAd1} />
      <Route path="/post-ad/2" component={PostAd2} />
      <Route path="/filtered" component={Filtered} />
      <Route path="/searched" component={Searched} />
      <Route path="/gists" component={Gists} />
      <Route path="/social-impact" component={SocialImpact} />
      <Route path="*" component={NotFound} />
    </Router>
  ),
  root
);
