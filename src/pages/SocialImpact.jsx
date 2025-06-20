import Header from "../components/Header";
import Footer from "../components/Footer";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function SocialImpact() {
  return (
    <MetaProvider>
      <Title>Social Impact - www.offk.ng</Title>
      <Meta
        name="description"
        content="We're more than just Nigeria's simplest marketplace for university students; we are a social impact enterprise committed to fostering economic resilience and environmental sustainability within university communities."
      ></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] 2xl:w-[900px] mx-auto">
          <div class="my-6 sm:my-10 mx-2">
            <div class="text-center">
              <h2 class="text-lg sm:text-xl sm:mt-2 text-gray-600 leading-tight">
                Social Impact
              </h2>
            </div>
            <div class="mt-8 md:mt-12 space-y-8">
              <p>
                OffK.ng is more than just Nigeria's simplest marketplace for
                university students; we are a social impact enterprise committed
                to fostering economic resilience and environmental
                sustainability within university communities.
              </p>
              <p>
                OffK.ng is driving{" "}
                <u>financial empowerment</u> and{" "}
                <u>environmental sustainability</u> within Nigerian university
                communities.
              </p>
              <p>
                We directly address the economic vulnerability of students by
                enabling them to earn much-needed income from selling unused
                hostel items. Equally, we empower them to access affordable
                essentials, significantly easing their financial burden. This
                fosters a practical form of financial inclusion, equipping
                students with valuable resourcefulness.
              </p>
              <p>
                Simultaneously, OffK.ng champions the <u>circular economy</u> by
                promoting the reuse and resale of goods. By extending the
                lifespan of items like furniture, electronics, and kitchenware,
                we actively reduce waste generation and contribute to a more
                sustainable campus environment.
              </p>
              <p>
                Our data-friendly, no-stress model further ensures{" "}
                <u>digital accessibility</u> and <u>inclusion</u>, bridging the
                gap for students facing high data costs. OffK.ng fosters a
                self-reliant, community-driven ecosystem where students mutually
                benefit, making it a powerful force for both economic resilience
                and environmental responsibility.
              </p>
              <p>
                <b>Contributing to the Sustainable Development Goals (SDGs)</b>
              </p>
              <p>
                OffK.ng's mission directly aligns with and contributes to 3 of
                the United Nations Sustainable Development Goals, working
                towards a better and more sustainable future for all:
              </p>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#1.</span>
                  <u>SDG 1: No Poverty</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    By providing a free, accessible platform, OffK.ng enables
                    students to sell unwanted items for cash, directly
                    alleviating financial strain. It also allows them to acquire
                    essential goods cheaply, reducing their expenses and helping
                    them manage tight budgets. This empowers students to be more
                    financially resilient.
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#2.</span>
                  <u>SDG 8: Decent Work and Economic Growth</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    OffK.ng creates informal economic opportunities for students
                    to earn income from their existing assets ("cash for
                    clutter"). By fostering a peer-to-peer commerce ecosystem,
                    it supports micro-entrepreneurship at the student level and
                    promotes a localized economy that provides value and income.
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-base mb-1 leading-tight">
                  <span class="text-gray-400 block">#3.</span>
                  <u>SDG 12: Responsible Consumption and Production</u>
                </h2>
                <ul class="list-disc mx-8 space-y-4">
                  <li>
                    By facilitating the reuse and resale of items, OffK.ng
                    actively promotes a circular economy within university
                    communities. This reduces the demand for new production and
                    minimizes waste sent to landfills, encouraging sustainable
                    consumption habits and contributing to more responsible
                    resource management.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default SocialImpact;
