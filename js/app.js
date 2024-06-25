console.log("hello")
console.log("hello", /*inline comment*/ "world")

let json = '{"key1":"value1","key2":"value2"}'
console.log(typeof json, json)

//! Nullish Coalescing Operator (??)
let undefinedOrNull, assignedVar = 'it-has-value'
console.log(undefinedOrNull ?? assignedVar)

let numTotal = 0
for (let i=1; i<=5; i++) {
    numTotal += i
}
console.log(numTotal)

//! for in (key in objects)
let objVar = {zero: 0, one: 1, two:2, three: 3, four:4, five:5}
let strKeys = ''
for (let key in objVar) {
    strKeys += '*' + key
}
console.log(objVar)
console.log(strKeys)

//! for of (value of array)
let arrVar = ['zero', 'one', 'two', 'three', 'four', 'five']
let strValues = ''
for (let value of arrVar) {
    strValues += '*' + value
}
console.log(arrVar)
console.log(strValues)

arrVar.forEach((value, key)=> {
    console.log(key, value)
})

let mapList = arrVar.map((item) => item + 'x')
console.log(mapList)

arrVar.forEach((item) => 
    console.log(item))

function cevreOlc (a,b = 5) {
    return 2*(a+b)
}

console.log(cevreOlc(3))

const dikAlan = function(a,b) {
    return a*b
}

console.log(dikAlan(3,4))

const prizmaHacim = (a,b,c) => a * b * c 

console.log(prizmaHacim(3,4,5))

const prizmaHacim1 = (a,b,c) => {
    return a * b * c
} 

console.log(prizmaHacim1(3,4,5))


const alan = (a,b) => a * b
console.log(alan(3,4))

const hacimHesap = (a,b,h,alan) => {
    return alan(a,b) * h
}
console.log(hacimHesap(3,4,5,alan) )

let str = ' 1234567890.abcXYZ.1234567890 '
console.log(str.match('123'))


