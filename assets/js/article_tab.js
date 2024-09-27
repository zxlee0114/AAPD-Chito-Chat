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
});

//顏色轉換
const selectorClass = document.querySelector('.selector-class');
const selectorDistrict = document.querySelector('.selector-district');
const selectorTime = document.querySelector('.selector-time');
const selectorModalFilled = document.querySelector('.selector-modal-filled');
const selectorModalOutline = document.querySelector('.selector-modal-outline');

const elements = [selectorClass, selectorDistrict, selectorTime, selectorModalFilled];

function setStyles(elements, color) {
    elements.forEach(element => {
        element.style.backgroundColor = color;
        element.style.borderColor = color;
    });
    selectorModalOutline.style.color = color;
    selectorModalOutline.style.borderColor = color;
}

const offlineColor = '#86C166';
const onlineColor = '#2F97C8';

offline.addEventListener("click", () => setStyles(elements, offlineColor));
online.addEventListener("click", () => setStyles(elements, onlineColor));


//活動篩選 modal
$(window).ready(() => {
	$('#myModal').modal('show');
	// setTimeout(() => $('#myModal').modal('show'), 1000);
	// setTimeout(() => $('#myModal').modal('hide'), 4000);
})
const show = () => {
	$('#myModal').modal('show');
}

