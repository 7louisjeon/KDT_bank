// DETAILS SECTION TOGGLE

const toggle = document.querySelector(".toggle");

toggle.addEventListener("dragstart", (e) => {
  e.preventDefault();
  alert("drag");
});

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
