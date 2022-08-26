import "./styles/main.scss";

const navLink = document.querySelectorAll(".nav__link");
const card = document.querySelector(".menu .card");
const dishTitleNodes = document.querySelectorAll(".card__title");

navLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    document.querySelector(".nav__link.active").classList.remove("active");
    e.target.classList.add("active");
  });
});

const observer = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const width = entry.contentRect.width;

    dishTitleNodes.forEach((title) => {
      if (title.textContent.length > 24) {
        let titleArr = title.textContent.split(" ");
        if (width < 330) {
          titleArr.pop();
          titleArr.push("…");
          title.textContent = titleArr.join(" ");
        } else {
          title.textContent = titleArr.join(" ");
        }
      }
    });
  }
});

observer.observe(card);
