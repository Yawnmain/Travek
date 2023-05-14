function Find() {
    document.getElementById("main__form__box__third").style.display = "block";
    document.getElementById("main__form__box__second").style.display = "none";
    document.getElementById('you').style.display = "none";
    let ele = document.getElementsByClassName('dot');
    for (var i = 0; i < ele.length; i++) {
        ele[i].style.display = "block";
    }
}