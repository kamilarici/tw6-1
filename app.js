const inputArea = document.querySelector("#textarea");
const buttonConvert = document.getElementById("button");
const pWrite = document.querySelector("#p");
// console.log(inputArea);
// let deger = "ben bugün okula gittim";

buttonConvert.addEventListener("click", () => {
  deger = inputArea.value;
  //   console.log(deger);
  pWrite.textContent = cevir(deger);
  inputArea.value = "";
});

const cevir = () => {
  const words = deger.split(" "); //? değeri  arraye çeviriyor

  const birlestirs = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i]; //arraylerin her birini alıyor
    const birlestir = word.charAt(0).toUpperCase() + word.slice(1);
    birlestirs.push(birlestir);
  }
  return birlestirs.join(" ");
};
//? *******************
// let deger = "ben bugün okula gittim";
// console.log(deger.split(" "));
// let degerSplit = deger.split(" ");
// let degerSplit1 = degerSplit[1];
// console.log(degerSplit1, typeof degerSplit1);
// console.log(degerSplit1.charAt(0).toUpperCase() + degerSplit1.slice(1));
//? ***************************
// const text = document.getElementById("text");
// const alertBox = document.getElementById("alert");
// const submitBtn = document.getElementById("submit");
// const clean = document.getElementById("clean");
// submitBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (text.value) {
//     let upperText = text.value.split(" ");
//     upperText = upperText.map((item) =>
//       item.replace(item[0], item[0].toUpperCase())
//     );
//     alertBox.innerText = upperText.reduce((acc, item) => acc + " " + item);
//   } else alertBox.innerText = "Please, enter a text";
// });
// clean.addEventListener("click", () => window.location.reload(false));
