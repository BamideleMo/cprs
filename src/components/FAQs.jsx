import { A } from "@solidjs/router";

function FAQs() {
  return (
    <div class="py-4 space-y-6">
      <div class="bg-gray-100 border border-gray-300 p-3 rounded-lg space-y-2">
        <h2 class="font-semibold">What is OffK?</h2>
        <p>
          OffK (www.offk.ng) is a simple portal that helps students find
          off-campus accommodations easier and fast!
        </p>
      </div>
      <div class="bg-gray-100 border border-gray-300 p-3 rounded-lg space-y-2">
        <h2 class="font-semibold">
          I'm looking for off-campus accommodation. How can I use OffK?
        </h2>
        <p>
          No need to register or create account. When you're looking for
          off-campus accommodation simply POST REQUEST.
        </p>
        <p>
          Something like:{" "}
          <u>
            I need 1 room anywhere close to the main campus. I can move in now.
          </u>
        </p>
        <p>
          Your request will be visible to everyone. Also, verified house agents
          are immediately notified so anyone who has accommodation that meets
          your request can click to contact you and initiate conversation
          through WhatsApp.
        </p>
      </div>
      <div class="bg-gray-100 border border-gray-300 p-3 rounded-lg space-y-2">
        <h2 class="font-semibold">
          There's off-campus accommodation available for rent. How can I use
          OffK?
        </h2>
        <p>
          No need to register or create account. When you have off-campus
          accommodation available for rent, simply POST FOR RENT.
        </p>
        <p>
          Something like:{" "}
          <u>
            1 room self-contained is available not very far from the school. DM
            if interested.
          </u>
        </p>
        <p>
          Your post will be visible to everyone. Also, verified house agents are
          immediately notified so anyone in need of such accommodation can click
          to contact you and initiate conversation through WhatsApp.
        </p>
      </div>
      <div class="bg-gray-100 border border-gray-300 p-3 rounded-lg space-y-2">
        <h2 class="font-semibold">Who's a verified poster?</h2>
        <p>Not all posters are verified.</p>
        <p>
          A verified poster is someone that has been duely verified by the
          admin. Verified posters have been confirmed to be for real and so can
          be trusted by other users.
        </p>
        <p>
          You'll see a green colored shield on any post by a verified poster.
        </p>
      </div>
    </div>
  );
}

export default FAQs;
