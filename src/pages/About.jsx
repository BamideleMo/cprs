import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function About() {
  return (
    <MetaProvider>
      <Title>About CPRS</Title>
      <Meta name="description" content="About CPRS"></Meta>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] 2xl:w-[900px] mx-auto pb-20">
          <div class="my-6 sm:my-10 mx-2 text-left">
            <div class="text-center">
              <h2 class="text-lg sm:text-xl sm:mt-2 text-gray-600 leading-tight">
                About CPRS
              </h2>
            </div>

            <div class="my-6 space-y-6 text-base text-gray-700">
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">History</span>
                </h2>
                <p>
                  College of Peace and Reconciliation Studies (CPRS) formerly
                  RETA Peace Institute (RPI) was started in 2009 by Rev. Assoc.
                  Prof. Joseph Maren Sampson. It is a training center for the
                  development of leaders in Africa and seeking how to address
                  the persistent conflict in the Continent from an African
                  approach.
                </p>
              </div>
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">
                    Study Centre
                  </span>
                </h2>
                <p>Lafia</p>
              </div>
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">
                    Jos Main Campus
                  </span>
                </h2>
                <p>
                  Adult Education Resource Centre, Mungyel, behind WAEC Office,
                  Jos South LGA, Plateau State Nigeria.
                </p>
              </div>
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">Our Faculty</span>
                </h2>
                <p>
                  We have dedicated and experienced faculty members with
                  national and international experiences that are committed to
                  professionalism and integrity. You will find in them a rich
                  contextual experience in peacebuilding.
                </p>
              </div>
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">
                    Principal Officers of the College
                  </span>
                </h2>
                <p>
                  <b>RECTOR</b> — Rev. Assoc. Prof. Joseph Maren Sampson, PhD
                  <br />
                  <b>REGISTRAR</b> — Mr. Stephen Pwaspo Mangniang, FCNA
                  <br />
                  <b>BURSAR</b> — Dr. Mrs. Margaret Stephen Mangniang, CAN
                  <br />
                  <b>ACADEMIC DEAN</b> — Dr. Johnson Mafulul Makut
                  <br />
                  <b>DEAN OF STUDENTS AFFAIRS</b> — Mr. Rotgak Danjuma
                  <br />
                  <b>HEAD OF EDUCATION</b> — Mrs. Margaret Ogisa
                  <br />
                  <b>HEAD OF PEACE & CONFLICT</b> — Dr. Nanaghan Adesola Peter
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

export default About;
