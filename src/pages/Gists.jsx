import Header from "../components/Header";
import Footer from "../components/Footer";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function Gists() {
  return (
    <MetaProvider>
      <Title>Gists - www.offk.ng</Title>
      <Meta name="description" content="Campus gists on offk.ng?"></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2">
            <div class="text-center">
              <h2 class="text-lg sm:text-xl sm:mt-2 text-gray-600 leading-tight">
                Gists
              </h2>
            </div>
            <div class="mt-8 md:mt-12 space-y-8">
              <p>
                Campus news, updates, interviews & interesting gists happening
                on this campus, published every Saturday!
              </p>
              <p>
                <b>That's coming here SOON.</b>
              </p>
              <p>So...</p>
              <p>
                If you're interested in campus journalism and will love to
                intern with us as a <u>student-content-curator</u>, please send
                a WhatsApp chat to admin:
              </p>
              <div class="my-8">
                <p>
                  <a
                    href="https://wa.me/23407036935026"
                    target="_blank"
                    class="bg-green-700 text-white hover:opacity-60 p-3 rounded-lg"
                  >
                    070 3693 5026
                  </a>
                </p>
              </div>
              <p>And YES! It's a paid internship role.</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default Gists;
