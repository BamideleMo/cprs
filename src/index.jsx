/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import App from "./App";
import Agents from "./pages/Agents";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import FAQs from "./pages/FAQs";
import Terms from "./pages/Terms";
import Safety from "./pages/Safety";
import AccountCreated from "./pages/AccountCreated";
import Dashboard from "./pages/Dashboard";

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
      <Route path="/agents" component={Agents} />
      <Route path="/create-account" component={CreateAccount} />
      <Route path="/login" component={Login} />
      <Route path="/faqs" component={FAQs} />
      <Route path="/terms" component={Terms} />
      <Route path="/safety" component={Safety} />
      <Route path="/account-created" component={AccountCreated} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  ),
  root
);
