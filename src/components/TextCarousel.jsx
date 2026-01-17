import { createSignal, onMount, onCleanup, For, Show } from "solid-js";

/**
 * Custom SVG Icons to replace external dependencies
 */
const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);
const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);
const Pause = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect width="4" height="16" x="6" y="4" />
    <rect width="4" height="16" x="14" y="4" />
  </svg>
);
const Play = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

function TextCarousel(props) {
  const slides = [
    {
      id: 1,
      title: "Northeast Theological Seminary, Demsa Yola.",
    },
    {
      id: 2,
      title: "A Correspondent Member of ACTEA.",
    },
    {
      id: 3,
      title: "Recongnized by The Ministry for Higher Education, Plateau State.",
    },
  ];

  const [currentIndex, setCurrentIndex] = createSignal(0);
  const [isPaused, setIsPaused] = createSignal(false);
  let timer;

  // 2. Logic: Automatic Scrolling
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const startTimer = () => {
    stopTimer();
    timer = setInterval(() => {
      // Logic: Only progress if not manually paused or hovered
      if (!isPaused()) {
        nextSlide();
      }
    }, 3000);
  };

  const stopTimer = () => {
    if (timer) clearInterval(timer);
  };

  onMount(() => {
    startTimer();
  });

  onCleanup(() => {
    stopTimer();
  });

  // 3. User Interactions
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  return (
    <div class="">
      <div
        class="relative overflow-hidden group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Slides Container */}
        <div
          class="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex() * 100}%)` }}
        >
          <For each={slides}>
            {(slide) => (
              <div
                class={`min-w-full flex flex-col items-left justify-center text-white pb-8`}
              >
                <h2 class="text-2xl leading-tight lg:text-3xl font-black mb-4">
                  {slide.title}
                </h2>
              </div>
            )}
          </For>
        </div>

        {/* Status Indicator */}
        <Show when={isPaused()}>
          <div class="absolute top-4 right-4 bg-black/20 backdrop-blur-md p-2 rounded-full text-white animate-pulse">
            <Pause />
          </div>
        </Show>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight />
        </button>

        {/* Dots Navigation */}
        <div class="absolute bottom-6 left-10 -translate-x-1/2 flex gap-3">
          <For each={slides}>
            {(_, index) => (
              <button
                onClick={() => setCurrentIndex(index())}
                class={`h-2 rounded-full transition-all ${
                  currentIndex() === index()
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50"
                }`}
              />
            )}
          </For>
        </div>
      </div>
    </div>
  );
}

export default TextCarousel;
