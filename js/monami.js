$(".this_lang > a").on("click", function (e) {
    e.preventDefault(); // tabMenu 클릭만 막음
    $(".lang").toggleClass("on");
});


const btnAll = document.querySelector(".btn_all");
const allmenu = document.querySelector(".allmenu");
btnAll.addEventListener("click", function () {
    this.classList.toggle("on"); 
    allmenu.classList.toggle("active");   
});

var swiper = new Swiper(".swiper-archive", {
    slidesPerView: 7,
    loop: true
});

$(".p_tabs ul li").on("click", function (e) {
    e.preventDefault(); 
    let i = $(this).index();
    console.log(i);
    $(".p_tabs ul li").removeClass("on");
    $(this).addClass("on");

    $(".p_lists").removeClass("on");
    $(".p_lists").eq(i).addClass("on");
});