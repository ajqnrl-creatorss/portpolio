$(".this_lang > a").on("click", function (e) {
    e.preventDefault();
    $(".lang").toggleClass("on");
});

const btnAll = document.querySelector(".btn_all");
const allmenu = document.querySelector(".allmenu");
btnAll.addEventListener("click", function () {
    this.classList.toggle("on");
    allmenu.classList.toggle("active");
});

$(".pagetabs ul li").on("click", function (e) {
    e.preventDefault();
    let i = $(this).index();
    console.log(i);

    $(".pagetabs ul li").removeClass("on");
    $(this).addClass("on");

    $(".conwrap").removeClass("on");
    $(".conwrap").eq(i).addClass("on");

    $(".title1").removeClass("on");
    $(".title1").eq(i).addClass("on");
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

$(".move_btn a").on("mouseenter", function (e) {
    e.preventDefault();
    $(this).addClass("on"); // 현재 마우스 올라간 a만 on 추가
});

$(".move_btn a").on("mouseleave", function (e) {
    e.preventDefault();
    $(this).removeClass("on"); // 현재 마우스 빠져나간 a만 on 제거
});