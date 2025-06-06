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
                Imagine campus lifestyle news, updates, interviews and
                interesting gists happening on this campus, published every
                Saturday!
              </p>
              <p>
                <b>That's coming here SOON.</b>
              </p>
              <p>
                If you're interested in campus journalism and will love to
                intern with us as a <u>student-content-curator</u>, please send a
                WhatsApp chat to admin:{" "}
                <a
                  href="https://wa.me/23407036935026"
                  target="_blank"
                  class="text-green-700 hover:opacity-60"
                >
                  07036935026
                </a>
                .
              </p>
              <p>And YES! It's a paid internship.</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default Gists;
