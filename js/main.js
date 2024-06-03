document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('#nav');
    const navBtn = document.querySelector('#nav_btn');
    const navBtbImg = document.querySelector('#nav_btn_img');

    navBtn.onclick = () => {
        if (nav.classList.toggle('open')) {
            navBtbImg.src = "./img/icons/nav_close.svg";
        } else {
            navBtbImg.src = "./img/icons/nav_open.svg";
        }
    }
});


AOS.init();