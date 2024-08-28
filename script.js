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
    if (bonus.earn / bonus.cost > 3){               //300%+  30%
        bonus.ans = bonus.cost*0.5*0.1 + bonus.cost*0.5*0.15 + bonus.cost*0.5*0.2 + bonus.cost*0.5*0.25 + (bonus.earn-bonus.cost*3)*0.3;
    }else if (bonus.earn / bonus.cost > 2.5){       //250%-300%   25%
        bonus.ans = bonus.cost*0.5*0.1 + bonus.cost*0.5*0.15 + bonus.cost*0.5*0.2 + (bonus.earn-bonus.cost*2.5)*0.25;
    }else if (bonus.earn / bonus.cost > 2){       //200%-250%    20%
        bonus.ans = bonus.cost*0.5*0.1 + bonus.cost*0.5*0.15 + (bonus.earn-bonus.cost*2)*0.2;
    }else if(bonus.earn / bonus.cost > 1.5){    //150%-200%     15%
        bonus.ans = bonus.cost*0.5*0.1 + (bonus.earn-bonus.cost*1.5)*0.15;
    }else if(bonus.earn / bonus.cost > 1){    //100%-150%       10%
        bonus.ans = (bonus.earn-bonus.cost)*0.1;
    };
    // if(bonus.earn / bonus.cost > 3)

    // output!
    bonus.ans = bonus.ans.toFixed(2);
    // console.log(bonus.ans);
    $('#result h4').html(`${bonus.workClass} 奖金为：`);
    $('#result p').text(bonus.ans);
    $('#result p').css({'color':'black','font-size':'large'});

    // handle add to table
    $('#result button').on('click',function(){
        if(bonus.workClass === "classA"){ $('#dataTable tr td').eq(0).text(bonus.ans)}
        else if(bonus.workClass === "classB"){ $('#dataTable tr td').eq(1).text(bonus.ans)}
        else if(bonus.workClass === "classC"){ $('#dataTable tr td').eq(2).text(bonus.ans)}
    });
});

$('#printBtn button').on('click', function(){
    var printContents = $('#dataTable').html(); // Get the HTML content of the table
    var printWindow = window.open('', '', 'height=600,width=800'); // Open a new window

    printWindow.document.write('<html><head><title>Print Table</title>');
    printWindow.document.write('<style>table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid black; padding: 8px; text-align: left; }</style>'); // Add basic table styles
    printWindow.document.write('</head><body>');
    printWindow.document.write('<table>' + printContents + '</table>'); // Write the table content
    printWindow.document.write('</body></html>');
    printWindow.document.close(); // Close the document
    printWindow.focus(); // Focus on the new window
    printWindow.print(); // Trigger the print dialog
    printWindow.close(); // Close the print window after printing
});

