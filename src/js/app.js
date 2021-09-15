// DETAILS SECTION TOGGLE

// const toggle = document.querySelector(".toggle");
// const details = document.querySelector(".details");
// const days = document.querySelector(".days");

// toggle.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (details.classList.contains("toggledUp")) {
//     details.classList.remove("toggledUp");
//     days.classList.remove("toggledUp");
//   } else {
//     details.classList.add("toggledUp");
//     days.classList.add("toggledUp");
//   }
// });

// MANAGE PAGE TOGGLE

const openManagePageBtn = document.querySelector(".manageBtn");
const managePage = document.querySelector(".manage-page");
const closeManagePageBtn = document.querySelector(".closeManagePageBtn");

openManagePageBtn.addEventListener("click", (e) => {
  e.preventDefault();
  managePage.classList.remove("off");
  managePage.classList.add("on");
});

closeManagePageBtn.addEventListener("click", (e) => {
  e.preventDefault();
  managePage.classList.remove("on");
  managePage.classList.add("off");
});
