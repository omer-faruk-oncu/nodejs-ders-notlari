//! TEAM WORK

// //?1
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);

// //?2
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

//?3

// let toplam = 0;
// let sayi;

// while (true) {
//     sayi = Number(prompt('Bir sayı giriniz:'));

//     if (sayi < 0) { // Eğer sayı negatifse
//         alert('Lütfen pozitif bir sayı giriniz.');
//         break;
//     }

//     toplam += sayi;
// }

// console.log('Toplam:', toplam);

//?4

// console.log(null == undefined);
// console.log(null === undefined);
// console.log(isNaN(2 + null));
// console.log(isNaN(2 + undefined));
// null ? console.log("true") : console.log("false");

//?5
// var hash = "";
// var count = 1;
// var n = 3;
// for (var x = 1; x <= 7; x++) {
//   while (hash.length != count) hash += "#";
//   hash += "\n";
//   count += n;
//   n++;
// }
// console.log(hash);

//?6
// let firstName = null;
// let lastName = null;
// let nickName = "coderBond";
// console.log(firstName ?? lastName ?? nickName ?? "Anonymous");

//?7
// function onZoom(x) {
//   console.log("Zoom active for", x);
// }
// function startClass(x, y, z) {
//   console.log(" Class starts at", x);
//   y(z);
// }
// startClass("20:00", onZoom, "FS");

//?8
// console.log(
//   (function f(n) {
//     return n > 1 ? n * f(n - 1) : n;
//   })(5)
// );

// //?9
// (function () {
//   try {
//     throw new Error();
//   } catch (x) {
//     var x = 1,
//       y = 2;
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();

// //?10
// let a = [10, 20, 30];
// a[10] = 100;
// console.log(a[6]);
// let b = [undefined];
// console.log(b);
// b[2] = 1;
// console.log(b);
// console.log(b.map((e) => 99));

//?11
// function orderPizza(type, ingredients, callback) {
//   console.log("Pizza ordered...");
//   console.log("Pizza is for preparation");
//   setTimeout(function () {
//     let msg = `Your ${type} ${ingredients} Pizza is ready! The total bill is
// $10`;
//     callback(msg);
//   }, 3000);
// }
// orderPizza("Vegeterian", "Cheese", function (message) {
//   console.log(message);
// });