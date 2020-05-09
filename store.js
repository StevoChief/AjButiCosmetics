function moveLogo() {
    var checkBox = document.getElementById("check");

    var logo = document.getElementById("logo");

    if (checkBox.checked == true){
        logo.classList.add("horizTranslate");
        }
}