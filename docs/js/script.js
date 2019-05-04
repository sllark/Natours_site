var navLinks=document.getElementById('navLinks');
var navBtn=document.getElementById('navBtn');
var nav=document.getElementById('nav');
var navBg=document.getElementById('navBg');
var navUl=document.getElementById('navUl');
var navBtnSpan=document.getElementById('navBtnSpan'),
    popupClose=document.getElementById('popupClose'),
    popup=document.getElementById('popup'),
    bookPopup=document.querySelectorAll('.bookPopup');

console.log(bookPopup);
var timeout;


navBtn.addEventListener('click',function (ev) {
    timeout=navBg.classList.toggle('showBg');
    setTimeout(showUlItems,300);
});

function showUlItems() {
    nav.classList.toggle('show');
    navBtnSpan.classList.toggle('make-cross');
    navBtn.classList.toggle('spanHover');
    timeout=clearInterval(timeout);
}

popupClose.addEventListener('click',function (ev) {
    popup.style.display='none';
});


for(var i=0;i<bookPopup.length;i++){
    var book=bookPopup[i];
book.addEventListener('click',function (ev) {
    popup.style.display='flex';
    popup.style.opacity=1;
})
}

