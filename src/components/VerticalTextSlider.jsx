import { createSignal, createEffect, onCleanup } from "solid-js";

const VerticalTextSlider = () => {
  const messages = ["Hostel Items for Sale", "Student Accommodation"];

  const [index, setIndex] = createSignal(0);

  // Auto-increment index every 5 seconds
  createEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    onCleanup(() => clearInterval(interval));
  });

  return (
    <div
      style={{
        height: "30px",
        overflow: "hidden",
        width: "100%",
        color: "#000000",
      }}
    >
      <div
        style={{
          transform: `translateY(-${index() * 30}px)`,
          transition: "transform 0.5s ease-in-out",
          display: "flex",
          "flex-direction": "column",
        }}
      >
        {messages.map((msg) => (
          <div
            class="text-2xl"
            style={{
              height: "30px",
              "line-height": "30px",
              "text-align": "center",
            }}
          >
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTextSlider;
