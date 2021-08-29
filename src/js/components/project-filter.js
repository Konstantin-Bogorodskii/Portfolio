const filterContainer = document.querySelector(".filter__list");
const filterItems = document.querySelectorAll(".gallery__item");

filterContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("filter__link")) {
    filterContainer
      .querySelector(".filter__current")
      .classList.remove("filter__current");
    target.classList.add("filter__current");

    const filterValue = target.getAttribute("data-filter");
    filterItems.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        console.log(item);
        item.classList.remove("filter__hide");
        item.classList.add("filter__show");
      } else {
        item.classList.remove("filter__show");
        item.classList.add("filter__hide");
      }
    });
  }
});
