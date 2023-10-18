function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const imagesObj = {};
let animationMove = true;

const imgs = document.querySelectorAll(".logos__img");
const radius = 250;
for (let i = 0; i < imgs.length; i++) {
  imgs[i].style.top =
    Math.sin((((i * 360) / imgs.length) * Math.PI) / 180) * radius + "px";
  imgs[i].style.left =
    Math.cos((((i * 360) / imgs.length) * Math.PI) / 180) * radius + "px";
  imagesObj[i] = {
    img: imgs[i],
    angle: (i * 360) / imgs.length,
    x: Math.cos((((i * 360) / imgs.length) * Math.PI) / 180) * radius,
    y: Math.sin((((i * 360) / imgs.length) * Math.PI) / 180) * radius,
  };
}

document.querySelector("#startBtn").addEventListener("click", function (e) {
  animationMove = true;
});

document.querySelector("#stopBtn").addEventListener("click", function (e) {
  animationMove = false;
});

async function animation() {
  for (let j = 0; j < 360000; j++) {
    if (animationMove) {
      for (let k = 0; k < imgs.length; k++) {
        console.log(imagesObj[k]);
        imagesObj[k].angle += 1;
        if (imagesObj[k].angle >= 360) {
          imagesObj[k].angle = 0;
        }
        imagesObj[k].x =
          Math.cos((imagesObj[k].angle * Math.PI) / 180) * radius;
        imagesObj[k].y =
          Math.sin((imagesObj[k].angle * Math.PI) / 180) * radius;
        imagesObj[k].img.style.top = imagesObj[k].y + "px";
        imagesObj[k].img.style.left = imagesObj[k].x + "px";
      }
    }
    await sleep(20);
  }
}

animation();
