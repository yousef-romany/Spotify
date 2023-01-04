let menubar = document.querySelector(".menubar");

menubar.addEventListener("click" , ( eo ) => {
    menubar.classList.toggle("active");

    let menubar2 = document.querySelector(".containerBar");
    menubar2.classList.toggle("active");

});