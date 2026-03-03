let popMessage = document.getElementsByClassName("container");
let input = document.getElementById("text");
let Message = document.getElementsByClassName("popmsg");
let mainContain = document.getElementsByClassName("main");
let inputSubmit = document.getElementById("submit1");
let inputHeader = document.getElementById("header");

inputSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  let inputText = input.value;
  console.log(inputText);
  if (inputText === "") {
    alert("Please Enter the name");
  } else {
    let UpperCase = inputText.toUpperCase();
    console.log(UpperCase);

    inputHeader.textContent = `Hello ${UpperCase}!`;

    // Add class to all elements in the Message collection
    for (let i = 0; i < Message.length; i++) {
      Message[i].classList.add("pop-Msg");
    }

    // Add class to all elements in the mainContain collection
    for (let j = 0; j < mainContain.length; j++) {
      mainContain[j].classList.add("main1");
    }
  }

  console.log(mainContain);
});
let resetButton = document.getElementById("Reset");
resetButton.addEventListener("click", function () {
  for (let i = 0; i < Message.length; i++) {
    Message[i].classList.remove("pop-Msg");
  }

  // Add class to all elements in the mainContain collection
  for (let j = 0; j < mainContain.length; j++) {
    mainContain[j].classList.remove("main1");
  }
});
