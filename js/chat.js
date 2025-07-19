import { DATA } from "./data.js";
const contentEL = document.querySelector(".content");
const formEL = document.querySelector(".form");
const inputEL = document.querySelector(".input");

const getTIme = () => {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}`;
};

const randomMsg = () => {
  let inx = Math.floor(Math.random() * DATA.length);
  const divEl = document.createElement("div");
  divEl.className = "msg";

  divEl.innerHTML = `
   <p>${DATA[inx]}</p>
   <span>${getTIme()}</span>`;
  contentEL.appendChild(divEl);
  inputEL.value = "";
};

formEL.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = inputEL.value;

  if (!value.trim()) {
    return false;
  }

  const divEl = document.createElement("div");
  divEl.className = "msg me";

  divEl.innerHTML = `
   <p>${value}</p>
   <span>${getTIme()}</span>`;
  contentEL.appendChild(divEl);
  inputEL.value = "";

  setTimeout(() => {
    randomMsg();
  }, 2000);
});
