const cards = document.querySelectorAll(".card");
let orders = [];
const cart = document.querySelector(".cart__body");
const cartSum = document.querySelector(".cart__sum");

function updateCart() {
  cart.innerHTML = "";
  let orderSumCounter = 0;
  orders = orders.filter((item) => item.quantity > 0);
  orders.map((order) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("order");
    const orderImage = document.createElement("img");
    orderImage.setAttribute("src", order.image);
    orderImage.classList.add("order__image");
    const orderTitle = document.createElement("div");
    orderTitle.textContent = order.title;
    orderTitle.classList.add("order__title");
    const orderQuantity = document.createElement("div");
    orderQuantity.textContent = order.quantity;
    orderQuantity.classList.add("order__quantity");
    const orderBtns = document.createElement("div");
    orderBtns.classList.add("order__btns");
    const btnUp = document.createElement("div");
    btnUp.classList.add("order__btn__add");
    btnUp.innerHTML = '<img src="../img/add.png" alt="" />';
    btnUp.addEventListener("click", function (e) {
      orders.filter((item) => item.title === order.title)[0].quantity++;
      updateCart();
    });
    const btnDown = document.createElement("div");
    btnDown.classList.add("order__btn__delete");
    btnDown.innerHTML = '<img src="../img/minus.png" alt="" />';
    btnDown.addEventListener("click", function (e) {
      orders.filter((item) => item.title === order.title)[0].quantity--;
      updateCart();
    });
    orderBtns.append(btnUp);
    orderBtns.append(btnDown);
    const orderSum = document.createElement("div");
    orderSum.classList.add("order__sum");
    orderSum.textContent = order.price * order.quantity;
    orderSumCounter += order.price * order.quantity;
    cartItem.append(orderImage);
    cartItem.append(orderTitle);
    cartItem.append(orderQuantity);
    cartItem.append(orderBtns);
    cartItem.append(orderSum);
    cart.append(cartItem);
  });
  cartSum.textContent = "Сумма: " + orderSumCounter;
}

for (let card of cards) {
  const btn = card.querySelector(".card__btn");
  btn.addEventListener("click", function (e) {
    const order = {};
    order.title = card.querySelector(".card__title").textContent;
    order.image = card.querySelector(".card__image").getAttribute("src");
    if (orders.filter((item) => item.title === order.title).length > 0) {
      orders.filter((item) => item.title === order.title)[0].quantity++;
    } else {
      order.quantity = 1;
      order.price = +card
        .querySelector(".card__price")
        .textContent.split(" ")[0];
      orders.push(order);
    }
    console.log(orders);
    updateCart();
  });
}
