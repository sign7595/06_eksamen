function hover() {
  document.querySelector(".button").addEventListener("mouseover", big);
  document.querySelector(".button").addEventListener("mouseout", reg);
}

function big() {
  document.querySelector(".button").classList.add("pop");
}

function reg() {
  document.querySelector(".button").classList.remove("pop");
}

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.classList.add("pop"); // Add pop-out effect
  });

  button.addEventListener("mouseout", () => {
    button.classList.remove("pop"); // Remove pop-out effect
  });
});
