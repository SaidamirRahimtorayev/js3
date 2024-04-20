alert("Hozir sizda random son chiqadi");

let a;
let b;
let c;
let d;
let p;
let x;

a = Math.trunc(100 * Math.random(10))
c = 2;
b = a * c;
d = 3;
p = b / d;
x = p % d;

alert("Random son = " + a);
alert("Random sonni ikkiga ko'paytirishni va bo'lishni hohlaysizmi?");
alert( "Random son " + a + " edi" + " \n Biz uni " + c + " ga ko'paytirib " + b + " sonini chiqardik," + " \n Va biz uni " + c + " ga bo'lib " + p + " sonini chiqardik, " + " Va biz uni " + d + " ga bo'lib " + x + " qoldiq chiqardik");
