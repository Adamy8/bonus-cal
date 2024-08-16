'use strict';

$(window).on('load',function(){
    const img_big = new Image();
    img_big.src = "images/scenery.jpg";
    $(img_big).on('load',function(){
        document.body.style.backgroundImage = 'url("images/scenery.jpg")';
    });
});

$('#calculationForm').on('submit',function(evt){
    evt.preventDefault();

    const workClass = evt.target.elements['workClasses'].value;  //classA 或 classB 或 classC
    const earnAmount = evt.target.elements['revenue'].value;    //a number
    const costAmount = evt.target.elements['cost'].value;    //a number
    


});