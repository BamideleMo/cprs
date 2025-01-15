import logo from "./logo.svg";
import whatsapp from "./assets/images/whatsapp-icon.png";

function App() {
  return (
    <div class="bg-white py-20">
      <div class="w-10/12 lg:w-[900px] mx-auto p-3 rounded-lg border-2 border-gray-200">
        <header class="flex justify-between border-b pb-3">
          <div>
            <a href="www.offk.ng" class="text-blue-900 font-semibold text-2xl">
              OffK.ng
            </a>
          </div>
          <div>...</div>
        </header>
        <section class="space-y-8 py-6 text-lg">
          <p>
            We're building a very simple online portal for <b>Uni Abuja</b>{" "}
            students for finding off-campus accommodations easier & faster.
          </p>
          <p>OffK.ng will do only 2 things:</p>
          <p>
            <b>#1.</b>
            <br />
            ⁠It will allow students to POST REQUESTS for off-campus
            accommodations.
            <br />
            Something like: "I need a room self-contained anywhere close to the
            main campus. Chat me if available."
          </p>
          <p>
            <b>#2.</b>
            <br />
            It will allow students and house agents to POST PROPERTY available
            for rent.
            <br />
            Something like: "1 room is available very close to the main campus
            gate. DM if interested"
          </p>
          <p>
            Using OffK.ng will be so easy and fast!
            <br />
            To POST REQUEST or POST PROPERTY no need for pictures, just type
            text. Also, there's no need to register or create account.
          </p>
          <p>
            <b>🙏🏾 Pleassss...</b>
          </p>
          If you're a student of Uni Abuja please help us answer these 5 quick
          questions to help us build this:
        </section>
        <section>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdQiuXDHsDsaoRwIMCvFEF3pvpYvR4AA0nbMoohbByf2bQFXQ/viewform?embedded=true"
            width="100%"
            height="2299"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </section>
      </div>
    </div>
  );
}

export default App;
