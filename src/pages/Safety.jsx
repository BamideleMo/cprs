import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function Safety() {
  return (
    <MetaProvider>
      <Title>Safety Rules - www.hostelsell.ng</Title>
      <Meta
        name="description"
        content="While HostelSell.ng makes it super easy to buy and sell hostel items, we care deeply about your safety."
      ></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2 text-left">
            <h1 class="text-center text-xl sm:text-3xl font-semibold space-y-0">
              Safety Rules
            </h1>
            <div class="my-6 space-y-6">
              <p>
                While HostelSell.ng makes it super easy to buy and sell hostel
                items, we care deeply about your safety.
              </p>
              <p>
                <b>Note:</b>
                <br />
                HostelSell is just a notice board, so it’s up to you to stay
                sharp when making deals.
              </p>
              <p>Here are a few simple but important rules to follow:</p>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">🚫 1.</span>
                  <u>No Meetups in Secluded Places</u>
                </h2>
                <p>
                  Always meet in public or well-lit hostel areas. Avoid dark
                  corners, uncompleted buildings, or "just come to my room"
                  arrangements if you don’t know the person.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">👫 2.</span>
                  <u>Don’t Go Alone for First-Time Meetups</u>
                </h2>
                <p>Going to inspect or pick up an item? Take a friend along.</p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">💸 3.</span>
                  <u>No Upfront Payments to Strangers</u>
                </h2>
                <p>
                  Never send money before seeing the item in person. If a seller
                  insists, walk away. Legit sellers know buyers want to confirm
                  first.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">📲 4.</span>
                  <u>Stick to WhatsApp</u>
                </h2>
                <p>
                  All chats happen through WhatsApp. If someone wants to move
                  the conversation elsewhere, be cautious — especially if they
                  ask for personal info or try to rush you.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">📷 5.</span>
                  <u>Ask for Pictures</u>
                </h2>
                <p>
                  You can request photos of the item directly on WhatsApp. Don’t
                  be afraid to ask for clear pictures or even a short video if
                  needed.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">🚩 6.</span>
                  <u>Report Suspicious Activity</u>
                </h2>
                <p>
                  If someone is acting shady or trying to scam you, report the
                  listing immediately. We take reports seriously and will remove
                  any suspicious posts fast.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">👤 7.</span>
                  <u>Use Common Sense</u>
                </h2>
                <p>
                  If it sounds too good to be true, it probably is. Trust your
                  gut — if something feels off, it probably is.
                </p>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">🛑 8.</span>
                  <u>HostelSell.ng Is Not a Middleman</u>
                </h2>
                <p>
                  We don’t verify items or monitor transactions. We're just a
                  notice board. So always deal responsibly, just like you would
                  on any hostel wall or WhatsApp group.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default Safety;
