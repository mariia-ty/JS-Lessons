 document.addEventListener("DOMContentLoaded", () => {
  const inputBox = document.querySelector(".input-box");
  const outputBox = document.querySelector(".output-box");

  const updateOutput = (e) => {
    outputBox.textContent = e.target.value || "-";
  };

  const throttledUpdate = _.throttle(updateOutput, 1000);

  inputBox.addEventListener("input", throttledUpdate);
});
