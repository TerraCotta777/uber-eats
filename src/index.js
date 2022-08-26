import html from "./index.html";
import "./styles/main.scss";

const cafe = document.querySelector("#Pushkin");

cafe.addEventListener("click", () => {
  location.href = "cafe.html";
});
