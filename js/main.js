const links = document.querySelector(".links");
const items = document.querySelectorAll(".blocks-item");
const listItems = document.querySelectorAll(".links-item");

listItems.forEach((li) => {
  let ourLi = li;

  li.addEventListener("click", () => {
    let ourLiId = ourLi.getAttribute("data-id");
    console.log(ourLiId);

    if (ourLi.classList.contains("links-item")) {
      listItems.forEach((listItem) => listItem.classList.remove("active"));
      ourLi.classList.add("active");
    }

    switch (ourLiId) {
      case "all":
        getItems("blocks-item");
        break;
      case "books":
        getItems(ourLiId);
        break;
      case "gadgets":
        getItems(ourLiId);
        break;
      case "toys":
        getItems(ourLiId);
        break;
    }
  });
  function getItems(className) {
    items.forEach((item) => {
      if (item.classList.contains(className)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
});

$(function () {
  $('.slider').slick({
      arrows: false,
      slidesToShow: 3
  });
});