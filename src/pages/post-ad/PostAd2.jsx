import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { createSignal, createResource, Show } from "solid-js";
import { MetaProvider, Title, Meta, Link } from "@solidjs/meta";
import { createStore } from "solid-js/store";
import { A, useNavigate } from "@solidjs/router";
import Loading from "../../components/Loading";
import Close from "../../components/icons/Close";
import PostAdvertForm from "../../components/PostAdvertForm";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function PostAd2() {
  const [noData, setNoData] = createSignal(false);
  const [adverts, setAdverts] = createStore([]);
  const [showModal, setShowModal] = createSignal(false);
  const [theId, setTheId] = createSignal();

  const [isProcessing, setIsProcessing] = createSignal(false);

  const navigate = useNavigate();

  const getAdverts = async () => {
    if (JSON.parse(localStorage.getItem("OffKAdmin"))) {
      const response = await fetch(VITE_API_URL + "/open/api/view-adverts", {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      });
      const result = await response.json();
      if (!result.success) {
        setMessage(result.response);
        setIsProcessing(false);
      } else {
        if (result.response.length < 1) {
          setNoData(true);
        }

        setAdverts(result.response);
      }
      return {
        adverts,
      };
    } else {
      navigate("/", { replace: true });
    }
  };

  const [resources] = createResource(getAdverts);
  return (
    <MetaProvider>
      <Title>Post Add - www.offk.ng</Title>
      <Meta name="description" content="What is off.ng?"></Meta>
      <Link rel="preload" as="image" href={screen}></Link>
      <div class="bg-white text-sm">
        <Show when={showModal()}>
          <div class="fixed z-40 bg-slate-900 bg-opacity-90 flex items-center h-screen w-screen top-0 bottom-0 left-0 right-0">
            <div class="w-11/12 sm:w-[620px] mx-auto">
              <div class="text-right mb-1 -mt-20">
                <span onClick={() => setShowModal(false)}>
                  <Close />
                </span>
              </div>
              <div class="bg-white p-2 sm:p-4 border-t-8 border-purple-800 py-4">
                <h2 class="font-normal text-xl text-purple-800 text-center mb-4 border-b pb-4">
                  Post Advert
                </h2>
                <PostAdvertForm id={theId()} />
              </div>
            </div>
          </div>
        </Show>
        <Header />
        <section class="w-full px-1 sm:w-[620px] mx-auto">
          <div class="my-6 sm:my-10 mx-2">
            <div class="text-center">
              <h2 class="text-lg sm:text-xl sm:mt-2 text-gray-600 leading-tight">
                Post Add
              </h2>
            </div>
            <div class="mt-8 md:mt-12 overflow-x-auto">
              <table cellpadding="0" cellspacing="0" class="w-full text-xs">
                <thead>
                  <tr class="font-semibold border-b">
                    <td class="p-2">#.</td>
                    <td class="p-2">Id</td>
                    <td class="p-2">Title</td>
                    <td class="p-2">Desc.</td>
                    <td class="p-2">Edit</td>
                  </tr>
                </thead>
                <tbody>
                  <Show
                    when={resources.loading}
                    fallback={
                      <Show
                        when={noData()}
                        fallback={
                          <For each={resources().adverts}>
                            {(resource, i) => (
                              <tr>
                                <td class="p-2 border-b">
                                  <b>{i() + 1}.</b>
                                </td>
                                <td class="p-2 border-b">
                                  {resource.custom_id}
                                </td>
                                <td class="p-2 border-b">{resource.title}</td>
                                <td class="p-2 border-b">
                                  <a
                                    target="_blank"
                                    href={resource.link}
                                    class="hover:underline"
                                  >
                                    {resource.description}
                                  </a>
                                </td>
                                <td class="p-2 border-b">
                                  <button
                                    onClick={() => {
                                      setShowModal(true);
                                      setTheId(resource.custom_id);
                                    }}
                                    class="bg-purple-600 text-xs text-white p-1 rounded-lg hover:opacity-60"
                                  >
                                    Edit
                                  </button>
                                </td>
                              </tr>
                            )}
                          </For>
                        }
                      >
                        <tr>
                          <td class="p-2 text-center text-gray-400" colSpan={5}>
                            No data found.
                          </td>
                        </tr>
                      </Show>
                    }
                  >
                    <tr>
                      <td class="p-2 text-center text-gray-400" colSpan={5}>
                        Fetching.. .
                      </td>
                    </tr>
                  </Show>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default PostAd2;
