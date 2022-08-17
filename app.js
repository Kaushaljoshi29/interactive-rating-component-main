const submitButton = document.querySelector(".submit-btn");
const ratingState = document.querySelector(".rating-state");
const thankYouStatue = document.querySelector(".thank-you-state");
const inputRating = document.querySelectorAll(".rating-state-form-lable");
const userSelected = document.querySelector(".user-selection-value");
let selectedRating;

inputRating.forEach(element => {
    element.addEventListener('click', () => {
        console.log(element.textContent);
        selectedRating = element.textContent;
    })
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  ratingState.classList.add("hidden");
  thankYouStatue.classList.remove("hidden");

  userSelected.textContent = selectedRating;

});
