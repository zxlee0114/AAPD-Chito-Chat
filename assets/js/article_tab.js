//文章、活動 區塊頁籤效果轉換
const online = document.querySelector('.nav-on-event');
const offline = document.querySelector('.nav-off-event');
const title = document.querySelector('.event-title');

//標題文字
online.addEventListener("click", function(e){
    title.textContent = "我的線上活動";
});
offline.addEventListener("click", function(e){
    title.textContent = "我的實體活動";
} )

//dropdown 顏色
const element1 = document.querySelector(".event-dropdown-1");
const element2 = document.querySelector(".event-dropdown-2");
const element3 = document.querySelector(".event-dropdown-3");

offline.addEventListener("click", function(e) {
    element1.style.backgroundColor = '#86C166';
    //element1.classList.add("offline-active");
});
offline.addEventListener("click", function(e) {
    element2.style.backgroundColor = '#86C166';
});
offline.addEventListener("click", function(e) {
    element3.style.backgroundColor = '#86C166';
});

online.addEventListener("click", function(e) {
    element1.style.backgroundColor = '#2F97C8';
    //element1.classList.add("online-active");
});
online.addEventListener("click", function(e) {
    element2.style.backgroundColor = '#2F97C8';
});
online.addEventListener("click", function(e) {
    element3.style.backgroundColor = '#2F97C8';
});


// element.addEventListener("click", function() {
//     // 切換 "active" class
//     this.classList.toggle("offline-active");
// });