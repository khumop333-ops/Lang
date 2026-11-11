// Subtle impact flash once on load
const stage = document.getElementById("stage");
requestAnimationFrame(() => {
  stage.animate(
    [
      { filter: "brightness(1.8) contrast(1.1)" },
      { filter: "brightness(1)" }
    ],
    { duration: 900, easing: "ease-out" }
  );
});
