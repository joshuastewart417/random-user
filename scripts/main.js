import { fetchRandomUser } from "./data/datamanager.js";
import { userHTML } from "./data/data.js";

const buttonElement = document.querySelector(".randomUser");

const showUser = () => {
  //Get a reference to the location on the DOM where the nav will display
  const entryElement = document.querySelector(".userInfo");
  fetchRandomUser().then((apiUser) => {
    entryElement.innerHTML = userHTML(apiUser);
  });
};

showUser();

buttonElement.addEventListener("click", (event) => {
  if (event.target.id.startsWith("newUserButton")) {
    showUser();
  }
});
