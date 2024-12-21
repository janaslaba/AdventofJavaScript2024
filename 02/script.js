console.log("ahoj");

const dropdownShow = document.querySelector(".dropdown-wrapper");
const dropdownContent = document.querySelector(".dropdown-content");
const listItems = document.querySelectorAll(".dropdown-option");
const inputElement = document.getElementById("input--field");

dropdownShow.addEventListener("click", () =>
  dropdownContent.classList.add("visible")
);

let selectedItem = null;

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Deselect the previously selected item
    if (selectedItem) {
      selectedItem.classList.remove("selected");
    }

    // Select the clicked item
    selectedItem = item;
    item.classList.add("selected");
    inputElement.textContent = selectedItem.textContent;
    dropdownContent.classList.remove("visible");
  });
});
