let images = document.querySelectorAll(".image_to_swap");
console.log(images);

const doSwap = document.querySelector(".doSwap");

doSwap.addEventListener("click", function (e) {
  const swapStart = document.querySelector("#swapStart").value - 1;
  const swapEnd = document.querySelector("#swapEnd").value - 1;
  try {
    let temp = images[swapStart].getAttribute("src");
    images[swapStart].setAttribute("src", images[swapEnd].getAttribute("src"));
    images[swapEnd].setAttribute("src", temp);
    document.querySelector(".images_to_swap").innerHTML = "";
    for (let image of images) {
      document.querySelector(".images_to_swap").append(image);
    }
  } catch (err) {
    console.log(err);
  }
});
