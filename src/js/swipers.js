const detailsSwiper = new Swiper(".detailsSwiper", {
  direction: "virtical",
  grabCursor: true,
  effect: "creative",
  slidesPerView: "1",
  creativeEffect: {
    next: {
      translate: [0, "2300%", 0],
    },
  },
});

const goalsSwiper = new Swiper(".goals", {
  slidesPerView: 1.9,
  spaceBetween: 1,
  freeMode: true,
  pagination: {
    clickable: true,
  },
});

const daysSwiper = new Swiper(".days", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  mousewheel: true,
});

const managePageSwiper = new Swiper(".manage-main", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  mousewheel: true,
});

const graphSwiper = new Swiper(".daily-graph", {
  slidesPerView: "auto",
  freeMode: true,
  mousewheel: true,
});
