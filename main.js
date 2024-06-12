// const body = document.querySelector("body");
const tUbahWarna = document.getElementById("tUbahWarna");
const tAcakWarna = document.getElementById("tAcakWarna");
const sliderMerah = document.querySelector("input[name=sliderMerah]");
const sliderHijau = document.querySelector("input[name=sliderHijau]");
const sliderBiru = document.querySelector("input[name=sliderBiru]");

// Function Ubah Warna
tUbahWarna.addEventListener("click", function () {
  //   document.body.style.backgroundColor = "white";
  //   document.body.setAttribute("class", "biruMuda");
  document.body.classList.toggle("biruMuda");
  //                         atribut,nama atribut
});

// Function Acak Warna
tAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  // console.log(r);
  // console.log(g);
  // console.log(b);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// sliderMerah.addEventListener("change", function () {
//   const r = sliderMerah.value;
//   document.body.style.backgroundColor = `rbg(${r},100,100)`;
// });
sliderMerah.addEventListener("input", function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
sliderHijau.addEventListener("input", function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
sliderBiru.addEventListener("input", function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// document.body.addEventListener("mousemove", function (e) {
//   // posisi mouser
//   // console.log(e.clientX);
//   // console.log(window.innerWidth);
//   const posisiX = Math.round((e.clientX / window.innerWidth) * 255);

//   const posisiY = Math.round((e.clientX / window.innerHeight) * 255);

//   document.body.style.backgroundColor = `rgb(${posisiX},${posisiY},100)`;
// });
