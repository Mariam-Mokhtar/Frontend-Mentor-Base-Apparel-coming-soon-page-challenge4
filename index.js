function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputText.value.match(mailformat)) {
        document.querySelector(".Email-styling").classList.add("error");
        document.querySelector(".errorIcon").classList.add("visible");
        document.querySelector(".vaildation").classList.add("visible");
    } else {
        document.querySelector(".Email-styling").classList.remove("error");
        document.querySelector(".errorIcon").classList.remove("visible");
        document.querySelector(".vaildation").classList.remove("visible");
    }

}
