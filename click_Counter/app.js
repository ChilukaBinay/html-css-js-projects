let parm = document.getElementById("buttons");
let num = 0;
let fun = counting();
function onClickUpdate() {
  num++;
  document.getElementById("counter").textContent =
    `button clicked:${num} times`;
  //   console.log(parm);
  //   alert("hello binay");
}
