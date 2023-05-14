function viewRU() {
    document.getElementById("main__form__box__third").style.display = "none";
    document.getElementById("map").style.display = "none";
    document.getElementById("back_btn").style.display = "none";
    let ele = document.getElementsByClassName('dot');
    for (var i = 0; i < ele.length; i++) {
        ele[i].style.display = "none";
    }
}