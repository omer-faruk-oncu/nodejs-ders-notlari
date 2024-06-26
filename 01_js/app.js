// console.log("hello");
// console.log("hello", /*inline comment*/ "world");

// let json = '{"key1":"value1","key2":"value2"}';
// console.log(typeof json, json);

// //! Nullish Coalescing Operator (??)
// let undefinedOrNull,
//   assignedVar = "it-has-value";
// console.log(undefinedOrNull ?? assignedVar);

// let numTotal = 0;
// for (let i = 1; i <= 5; i++) {
//   numTotal += i;
// }
// console.log(numTotal);

// //! for in (key in objects)
// let objVar = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5 };
// let strKeys = "";
// for (let key in objVar) {
//   strKeys += "*" + key;
// }
// console.log(objVar);
// console.log(strKeys);

// //! for of (value of array)
// let arrVar = ["zero", "one", "two", "three", "four", "five"];
// let strValues = "";
// for (let value of arrVar) {
//   strValues += "*" + value;
// }
// console.log(arrVar);
// console.log(strValues);

// arrVar.forEach((value, key) => {
//   console.log(key, value);
// });

// let mapList = arrVar.map((item) => item + "x");
// console.log(mapList);

// arrVar.forEach((item) => console.log(item));

// function cevreOlc(a, b = 5) {
//   return 2 * (a + b);
// }

// console.log(cevreOlc(3));

// const dikAlan = function (a, b) {
//   return a * b;
// };

// console.log(dikAlan(3, 4));

// const prizmaHacim = (a, b, c) => a * b * c;

// console.log(prizmaHacim(3, 4, 5));

// const prizmaHacim1 = (a, b, c) => {
//   return a * b * c;
// };

// console.log(prizmaHacim1(3, 4, 5));

// const alan = (a, b) => a * b;
// console.log(alan(3, 4));

// const hacimHesap = (a, b, h, alan) => {
//   return alan(a, b) * h;
// };
// console.log(hacimHesap(3, 4, 5, alan));

// let str = " 1234567890.abcXYZ.1234567890 ";
// console.log(str.match("123"));
// console.log(str.slice(-10, -8));
// console.log(str.substring(5, 10));
// console.log(str.padStart(35, "-"));

// console.log((123.789).toPrecision(3));
// console.log((123.789).toPrecision(9));

// let intLocal = 123456.789;

// console.log(
//   intLocal.toLocaleString("tr-tr", { style: "currency", currency: "TRY" })
// );

//let arr = ["zero", "one", "two", "three", "four", "five"];
// let [zero, one, two, ...partArr] = arr;
// console.log(partArr);

// let newArr = [...arr, "six", "seven"];
// console.log(newArr);

// console.log(arr.slice(1, 4));
// console.log(arr.join("-"));
// console.log(arr);

// console.log(Array.from("abcXYZ"));
// console.log(Array.isArray(arr));

// console.log(arr.some((item) => item == "three"));
// console.log(arr.find((item) => item == "three"));
// console.log(arr.findIndex((item) => item == "three"));

// console.log(arr.filter((item) => item.length == 3));
// console.log(arr.map((item) => item + "x"));

// //! bundan sonrakiler orjinal diziyi değiştirir
// console.log(arr.fill("test", 3, 5));
// console.log(arr);

// console.log(arr.shift());
// console.log(arr);

// console.log(arr.pop());
// console.log(arr);

// console.log(arr.unshift("first"));
// console.log(arr);

// console.log(arr.push("last"));
// console.log(arr);

// console.log(arr.sort());
// console.log(arr);

// console.log(arr.reverse());
// console.log(arr);

let obj = {
  keyBool: true,
  keyNum: 123.45,
  keyStr: "value",
  keyArr: [false, 1, "two"],
  keyObj: { key1: "value1", key2: "value2" },
};

let { keyStr, keyNum: newName, ...partObj } = obj;
console.log(keyStr, newName, partObj);

console.log(obj);

let newObj = { ...obj, newKey: "new-value" };
console.log(newObj);

console.log(obj.keyObj.key1)
console.log(obj['keyObj']['key1'])

obj.newKey2 = 'new-value2'
console.log(obj['newKey2'])

delete obj.newKey2

console.log(Object.keys(obj))
console.log(Object.values(obj))
 
let arr1 = ["zero", "one", "two", "three", "four", "five"];

let arrToJson = JSON.stringify(arr1)
console.log(typeof arr1, arr1)
console.log(typeof arrToJson, arrToJson)

let objToJson = JSON.stringify(obj)
console.log(typeof obj, obj)
console.log(typeof objToJson, objToJson)

let jsonToArr = JSON.parse(arrToJson)
console.log(typeof jsonToArr, jsonToArr)

let jsonToObj = JSON.parse(objToJson)
console.log(typeof jsonToObj, jsonToObj)