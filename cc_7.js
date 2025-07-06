const input = document.getElementById("cta-input");
const button = document.getElementById("cta-button");
const headline = document.getElementById("cta-headline");

button.addEventListener("click", () => {
  const newText = input.value.trim();
  if (newText !== "") {
    headline.textContent = newText;
    input.value = "";
  }
});