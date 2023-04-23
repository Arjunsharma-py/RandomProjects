const store = JSON.parse(localStorage.getItem("store")) || [];
const display_list = document.querySelector(".added-items-container");
let date = new Date();
const month =
  date.getMonth() < 9 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
document.getElementById(
  "input-date"
).value = `${date.getFullYear()}-${month}-${date.getDate()}`;
renderItems();

function inputItems() {
  let item = document.getElementById("input-items");
  const name = item.value;
  if (name == "") return;
  const input_date = new Date(document.getElementById("input-date").value);
  const date = input_date.toLocaleDateString("en-in");
  store.push({ name, date });
  renderItems();
  item.value = "";
  storeItems();
}

function renderItems() {
  display_list.innerHTML = "";
  document.querySelector(".todo").innerText = store.length;
  for (let i = 0; i < store.length; i++) {
    const { name, date } = store[i];
    display_list.innerHTML += `<div class='added-items adding-items-container'><div>${
      i + 1
    }.</div><p>${name}</p><div>${date}</div><button class='del-btn add-btn' onclick='store.splice(${i}, 1); renderItems(); storeItems();'>Delete</button>`;
  }
}

function storeItems() {
  localStorage.setItem("store", JSON.stringify(store));
}
