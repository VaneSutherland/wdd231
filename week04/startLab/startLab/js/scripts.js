const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton"); 
const dialogBoxText = document.querySelector("#dialogBox div");


openButton1.addEventListener("click",() => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "one apple"
});

openButton2.addEventListener("click",() => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "one orange"
});

openButton3.addEventListener("click",() => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "one banana"
});


closeButton.addEventListener("click",() => {
    dialogBox.close();
});