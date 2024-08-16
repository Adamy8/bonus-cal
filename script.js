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
    let bonus = {
        workClass:workClass,
        earn:earnAmount,
        cost:costAmount,
        ans:0
    }
    // const ratio = bonus.earn / bonus.cost;
    if (bonus.earn / bonus.cost > 1.8){
        bonus.ans = bonus.cost*0.4*0.1 + bonus.cost*0.4*0.2 + (bonus.earn-bonus.cost*1.8)*0.3;
    }else if(bonus.earn / bonus.cost > 1.4){
        bonus.ans = bonus.cost*0.4*0.1 + (bonus.earn-bonus.cost*1.4)*0.2;
    }else if(bonus.earn / bonus.cost > 1){
        bonus.ans = (bonus.earn-bonus.cost)*0.1;
    };
    // output!
    bonus.ans = bonus.ans.toFixed(2);
    // console.log(bonus.ans);
    $('#result h4').text(`${bonus.workClass}奖金为：`);
    $('#result p').text(bonus.ans);
    $('#result p').css({'color':'black','font-size':'large'});

    // handle add to table
    $('#result button').on('click',function(){
        if(bonus.workClass === "classA"){ $('#dataTable tr td').eq(0).text(bonus.ans)}
        else if(bonus.workClass === "classB"){ $('#dataTable tr td').eq(1).text(bonus.ans)}
        else if(bonus.workClass === "classC"){ $('#dataTable tr td').eq(2).text(bonus.ans)}
    });
});
