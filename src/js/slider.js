const slider = document.getElementById("standardSlider");
const standardPrice = document.getElementById("standardPrice");

slider.addEventListener("change", (e) => {
  e.preventDefault();
  standardPrice.textContent = (e.target.value * 1).toLocaleString() + "원";
});
