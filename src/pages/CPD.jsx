import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { A } from "@solidjs/router";

function CPD() {
  return (
    <MetaProvider>
      <Title>Centre for Professional Development (CPD)</Title>
      <Meta
        name="description"
        content="Centre for Professional Development (CPD)"
      ></Meta>
      <div class="bg-white text-sm">
        <Header />
        <section class="w-full px-1 sm:w-[620px] 2xl:w-[900px] mx-auto pb-20">
          <div class="my-6 sm:my-10 mx-2 text-left">
            <div class="text-center">
              <h2 class="text-lg sm:text-xl sm:mt-2 text-gray-600 leading-tight">
                Centre for Professional Development (CPD)
              </h2>
            </div>

            <div class="my-6 space-y-6 text-base text-gray-700 text-pretty text-justify">
              <div>
                <p>
                  The Institute’s academic/training division – The Centre for
                  Professional Development (CPD) fills a huge gap in the
                  training and capacity–building of prospective and
                  established practitioners in the human and social development
                  sector in Nigeria.
                </p>
              </div>
              <div>
                <p>
                  The Centre was established among other objectives and
                  positioned to offer continuous, post professional training and
                  education to strengthen knowledge, up–grade skills and
                  increase technical competencies of development practitioners
                  in the country. It offers full time, part time and online
                  certificate programmes.
                </p>
              </div>
              <div>
                <p>
                  The Centre’s non–credit courses are therefore designed to
                  provide participants with the state–of–the–art knowledge
                  and a first–rate learning experience to advance in their
                  current jobs or start a new career in today’s fast–growing
                  development field.
                </p>
              </div>
              <div>
                <p>
                  Through the CPD, the institute delivers training programmes to
                  policy–makers, civil servants and private practitioners
                  including established and middle–career individuals seeking
                  to gain expanded career opportunities, as well as aspiring
                  fresh graduates who wish to begin their career in the
                  development field and students interested in exploring the
                  opportunities in the field.
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

export default CPD;
