import { updateNav } from "./updateNav.js";
import { renderHomePage } from "./renderHomePage.js";

window.addEventListener('load', solve);

function solve() {
  updateNav();
  renderHomePage(null);
}
