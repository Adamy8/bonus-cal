$(window).on('load',function(){
    const img_big = new Image();
    img_big.src = "images/scenery.jpg";
    $(img_big).on('load',function(){
        document.body.style.backgroundImage = 'url("images/scenery.jpg")';
    });
});