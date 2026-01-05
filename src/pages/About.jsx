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

            <div class="my-6 space-y-6 text-base text-gray-700 text-pretty text-justify">
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
                    Accreditation and Affiliation
                  </span>
                </h2>
                <p>
                  CPRS is affiliated to Northeast Theological Seminary, Demsa
                  Yola. Northeast Theological Seminary is an affiliate of Taraba
                  State University, Jalingo. CPRS is also recognized by the
                  Ministries of Higher Education in Plateau and Nasarawa States.
                  CPRS is also a Correspondent Member of ACTEA Africa.
                </p>
              </div>
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">
                    Principal Officers of the College
                  </span>
                </h2>
                <ul class="space-y-1 list-disc mx-6">
                  <li>
                    <b>RECTOR</b> — Rev. Assoc. Prof. Joseph Maren Sampson, PhD
                  </li>
                  <li>
                    <b>REGISTRAR</b> — Mr. Stephen Pwaspo Mangniang, FCNA
                  </li>
                  <li>
                    <b>BURSAR</b> — Dr. Mrs. Margaret Stephen Mangniang, CAN
                  </li>
                  <li>
                    <b>ACADEMIC DEAN</b> — Dr. Johnson Mafulul Makut
                  </li>
                  <li>
                    <b>DEAN OF STUDENTS AFFAIRS</b> — Mr. Rotgak Danjuma
                  </li>
                  <li>
                    <b>HEAD OF EDUCATION</b> — Mrs. Margaret Ogisa
                  </li>
                  <li>
                    <b>HEAD OF PEACE & CONFLICT</b> — Dr. Nanaghan Adesola Peter
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-lg mb-1 leading-tight">
                  <span class="text-gray-400 block underline">
                    Governing Council Members
                  </span>
                </h2>
                <ul class="space-y-1 list-decimal mx-6">
                  <li>
                    <b>Chairperson</b> — Prof. Mrs. Juliana Mulmicit Mafwil, MNI
                  </li>
                  <li>
                    <b>Member</b> — Dr. Joseph Gusen
                  </li>
                  <li>
                    <b>Member</b> — Mrs. Elizabeth Gwary
                  </li>
                  <li>
                    <b>Member</b> — Rtd. Major Sule Gebu Baduwa
                  </li>
                  <li>
                    <b>Member</b> — Rt. Bishop Nathan Nyiekaa Inyom
                  </li>
                  <li>
                    <b>Member</b> — Engr. Mrs. Esther G. Gonda
                  </li>
                  <li>
                    <b>Secretary to Council</b> — Rev. Assoc. Prof. Joseph Maren
                    Sampson
                  </li>
                  <li>
                    <b>Member</b> — Prof. Joseph G. Golwa
                  </li>
                  <li>
                    <b>Member</b> — Hon. Solomon Bulus Maren
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

export default About;
