//jshint esversion: 6

//ax^2 + bx + c = 0;

let elA = $("#inputA");
let elB = $("#inputB");
let elC = $("#inputC");

$(document).ready(function(){
    $("#quadratic").click(function(){
    // quadratic(elA.val(),elB.val(),elC.val());
    let html = `<p><strong>${elA.val()}x<sup>2</sup> + ${elB.val()}x + ${elC.val()} = 0</strong></p>`;

    html += `<p>${quadratic(elA.val(),elB.val(),elC.val())}</p>`;
    $("#display").html(html);
    });
});

function quadratic(a,b,c){
    let delta = b*b - 4*a*c;
    console.log(delta);
    if(a !== 0){
        if(delta > 0){
            let x1 = (-b + Math.sqrt(delta))/(2*a);
            let x2 = (-b - Math.sqrt(delta))/(2*a);
            return `<p><strong>delta = ${delta} & delta > 0</strong></p><p>Phuong trinh co hai nghiem phan biet <strong>x1 = ${x1}</strong> va <strong>x2 = ${x2}</strong></p>`;
        }else if(delta === 0){
            let x = (-b)/(2*a);
            return `<p><strong>delta = ${delta}</strong></p>><p>Phuong trinh co nghiem kep <strong>x1 = x2 = ${x}</p></strong>`;
        }else if(delta < 0){
            return `<p><strong>delta = ${delta} & delta < 0</strong></p><p>Phuong trinh vo nghiem</p>`;
        }
    }else{
        return 'Xin nhap a khac 0';
    }
}

//Kiem tra so nguyen to
let elNum = $("#isPrime");

$(document).ready(function(){
    $("#primeNumber").click(function(){
    let html = `<p>${isPrime(elNum.val())}</p>`;
    $("#display2").html(html);
    });
});

function isPrime(num){
    let count = 0;
    if(num == 1){
        count = 2;
        console.log(count);
    }else{
    for(let i = 0; i <= num; i++){
        if(num % i === 0){
            count++;
        }
    }
    }
    if(count === 2){
        return `${num} la so nguyen to`;
    }else{
        return `${num} khong phai la so nguyen to`;
    }
}
