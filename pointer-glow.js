document.body.classList.add("pointer-glow-enabled");
document.addEventListener("pointermove", event => {
  if (event.pointerType !== "mouse") return;
  if (event.target.closest?.(".art-thumb")) {
    document.body.classList.remove("pointer-glow-active");
    return;
  }
  document.body.style.setProperty("--pointer-x", `${event.clientX}px`);
  document.body.style.setProperty("--pointer-y", `${event.clientY}px`);
  document.body.classList.add("pointer-glow-active");
});
document.addEventListener("pointerleave", () => {
  document.body.classList.remove("pointer-glow-active");
});
window.addEventListener("blur", () => {
  document.body.classList.remove("pointer-glow-active");
});
