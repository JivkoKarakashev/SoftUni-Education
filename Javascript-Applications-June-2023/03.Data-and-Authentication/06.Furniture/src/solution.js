import { updateNav } from "./updateNav.js";
import { updateHomeView } from "./updateHomeView.js";
import { getUserData } from "./getUserData.js";
import { getFurnitureData } from "./api.js";
// import { getOrdersByUserId } from "./getOrders.js";

// const homeViewMainEl = document.querySelector('.col-md-12');
// console.log(homeViewMainEl);
// const tbodyEl = document.querySelector('.table > tbody');
// console.log(tbodyEl);
window.addEventListener('load', solve);

function solve() {
  const userData = getUserData();
  const hasUser = !!userData;
  updateNav(hasUser);
  getFurnitureData()
    .then(data => {
      // console.log(data);
      updateHomeView(data, hasUser);
    })
    .catch(err => {
      alert(err.message);
    });
  // console.log(userData);
  // if (userData) {
  //   Promise.all([getFurnitureData(), getOrdersByUserId(userData._id)])
  //     .then(([furnitureData, ordersData]) => {
  //       console.log(furnitureData);
  //       console.log(ordersData);
  //       updateHomeView(homeViewMainEl, furnitureData, ordersData);
  //     })
  //     .catch(err => {
  //       alert(err.message);
  //     });
  // } else {
  //   getFurnitureData()
  //     .then(data => {
  //       // console.log(data);
  //       updateHomeView(homeViewMainEl, data);
  //     })
  //     .catch(err => {
  //       alert(err.message);
  //     });
  // }
}
