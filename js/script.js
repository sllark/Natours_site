var  navLinks=document.getElementById('navLinks');
     navBtn=document.getElementById('navBtn'),
     nav=document.getElementById('nav'),
     navBg=document.getElementById('navBg'),
     navUl=document.getElementById('navUl'),
     navListItems=navUl.children,
     navBtnSpan=document.getElementById('navBtnSpan');





var popupClose=document.getElementById('popupClose'),
    popup=document.getElementById('popup'),
    bookPopup=document.querySelectorAll('.bookPopup');


var timeout;


for(var i=0;i<navListItems.length;i++){
    var list=navListItems[i];
    list.addEventListener('click',function (ev) {
        navBg.classList.toggle('showBg');
        timeout=setTimeout(showUlItems,300);
    });
}




navBtn.addEventListener('click',function (ev) {
    navBg.classList.toggle('showBg');
    timeout=setTimeout(showUlItems,300);
});

function showUlItems() {
    nav.classList.toggle('show');
    navBtnSpan.classList.toggle('make-cross');
    navBtn.classList.toggle('spanHover');
    timeout=clearInterval(timeout);
}


//For PopUp

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

