import Header from "../components/Header";
import Footer from "../components/Footer";
import { createEffect, createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A, useNavigate } from "@solidjs/router";

function Dashboard() {
  const navigate = useNavigate();

  const checkIfLoggedIn = () => {
    if (!JSON.parse(localStorage.getItem("OffKUser"))) {
      navigate("/login", { replace: true });
    }
  };

  const logOut = () => {
    localStorage.removeItem("OffKUser");
    window.location.replace("/login");
  };

  createEffect(() => {
    checkIfLoggedIn();
  });
  return (
    <MetaProvider>
      <Title>Dashboard - www.offk.ng</Title>
      <Meta name="description" content="Dashboard."></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2 text-left">
            <h1 class="text-center text-xl sm:text-3xl font-semibold space-y-0">
              <div>Dashboard</div>
            </h1>
            <h2 class="text-lg sm:text-xl mt-4 sm:mt-4 text-gray-600 leading-tight">
              Hi, Moses Bamidele
            </h2>
            <div class="bg-gray-100 p-3 rounded-lg mt-8">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                <div class="space-x-2">
                  <b class="font-normal text-gray-600">Account Type:</b>
                  <span>
                    Free [
                    <A href="#" class="text-purple-700 hover:opacity-60">
                      Details
                    </A>
                    ]
                  </span>
                </div>
                <div class="space-x-2">
                  <b class="font-normal text-gray-600">Client's Connections:</b>
                  <span>3 used out of 10</span>
                </div>
                <div class="space-x-2">
                  <b class="font-normal text-gray-600">Referral Code:</b>
                  <span>
                    {JSON.parse(localStorage.getItem("OffKUser"))
                      ? JSON.parse(localStorage.getItem("OffKUser")).custom_id
                      : ""}
                  </span>
                </div>
                <div class="space-x-2">
                  <span
                    onClick={() => logOut()}
                    class="text-purple-700 hover:opacity-60 cursor-pointer"
                  >
                    Log out
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default Dashboard;
