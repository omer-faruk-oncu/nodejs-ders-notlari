
"use strict"
/* -------------------------------------------------------
    OOP-1: OBJECTS
------------------------------------------------------- */


// const exampleObject = {
//     propertyName: 'value', //property, attribute, field
//     propertyArr: [],
//     propertyObject: {},
//     methodName: function() {
//         return 'this is a method'
//     },
//     methodAlternative () {
//         return 'method-2'
//     } ,
// }

// console.log(exampleObject.propertyName)
// console.log(exampleObject.methodName())

/* ------------------------------------------------- *

const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear:true,
    colors: ['red', 'white'],
    details: {
        color1: 'red',
        color2: 'white',
        engineSize: 5000
    },
    startEngine: function(param=1){
        console.log(param)
        return 'Engine started.'
    },
}
// console.log(Car)
// console.log(Car.brand)
// console.log(Car.colors[1])
// console.log(Car.details.engineSize)
// console.log(Car.startEngine())
// console.log(Car.startEngine('2'))

// console.log(Car['brand'])
// console.log(Car['colors'][1])
// console.log(Car['details']['engineSize'])
// console.log(Car['startEngine']())

/* ------------------------------------------------- */

//*THIS Keyword

const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear:true,
    colors: ['red', 'white'],
    details: {
        color1: 'red',
        color2: 'white',
        engineSize: 5000
    },
    startEngine: function(param='1'){
        console.log(param)
        return 'Engine started.'
    },
    getDetails: function(){
        console.log(this.model)
        return this.details
        return this.startEngine()
        return this.brand + ' ' + this.model + ' ' +this.year + ' ' + this.startEngine()
    },
    arrowMethod: () => {
       //Arrow method larda this kullanılmaz. Global scope tur her zaman
       return this
    },
}

//console.log(Car.getDetails())
// console.log(Car.arrowMethod())
/* ------------------------------------------------- */

//*ARRAY DESTRUCTURING:

//const testArray = ['value0','value1','value2','value3','value4']

// const test0 = testArray[0]
// const test1 = testArray[1]
// const test2 = testArray[2]
// // const test3 = testArray[3]
// // const test4 = testArray[4]
// const testPart = testArray.slice(3)
// console.log(test0, test1, test2, testPart)



//sıralama önemli
// const [var0, var1, ...varPart] = testArray
// console.log(var0, var1, varPart)

//REST operator (Toplayıcı) (Eşittir ifadesinin sol tarafındaki REST operatörüdür):
// const [var0, var1, ...varPart] = testArray
// console.log(var0, var1, varPart)

// SPREAD Operator (Dağıtıcı/serpiştirici) (Eşittir ifadesinin sağ tarafındaki SPREAD Operatörüdür)

// const newArr = [...testArray, 'value5', 'value6']
// console.log(newArr)

/* ------------------------------------------------- *
//*OBJECT DESTRUCTURING:

const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear:true,
    colors: ['red', 'white'],
    details: {
        color1: 'red',
        color2: 'white',
        engineSize: 5000
    },
    startEngine: function(param='1'){
        console.log(param)
        return 'Engine started.'
    },
}

//REST operator (key önemli)

// const {brand, year, model, ...others} = Car
// console.log(brand, year, model, others)


//isim değiştirme
// const {brand, year, model:newName, ...others} = Car
// console.log(brand, year, newName, others)

//spread operator

const newObj = {...Car, newKey: 'newValue'}
console.log(newObj)

/* ------------------------------------------------- */

//Object to JSON
// const json = JSON.stringify(Car)
// console.log(typeof json, json)

// JSON to Object
// const obj = JSON.parse(json)
// console.log(typeof obj, obj)

//Array to JSON

// const arr = Object.keys(Car)
// console.log(typeof arr, arr)

// const arr = Object.values(Car)
// console.log(arr)

// const arr = Object.entries(Car) // enumarateType
// console.log(arr)

// const arrToJSON = JSON.stringify(arr)
// console.log(typeof arrToJSON, arrToJSON)

 //const jsonToArr = JSON.parse(arr)
// console.log(typeof jsonToArr, jsonToArr)

//console.log(typeof null, null)
// console.log(typeof 'string', string)
// console.log(typeof 1234, 1234)
// console.log(typeof true, true)
// console.log(typeof [], [])
// console.log(typeof {}, {})



/* ------------------------------------------------- *

//*Constructor functions:


const constructorFunction = function () {
    this.property = 'value'
}


/* ------------------------------------------------- *

//NEW Keyword

const carConstructor = function (brand, model, year=2000) {
    this.brand = brand
    this.model = model
    this.year = year
    this.startEngine = function (){
       // console.log(this)
        return 'Engine started.'
    }

}


//* new ile oluşturulan objeler PascalCase ile yazılır
const Ford = new carConstructor('Ford', 'Mustang', 1967)
console.log(Ford)

const Mercedes = new carConstructor('Mercedes', 'CLK200', 2015)
console.log(Mercedes)
console.log(Mercedes.brand)
console.log(Mercedes.startEngine())









/* ------------------------------------------------- */
/* ------------------------------------------------- */
/* ------------------------------------------------- */
/* ------------------------------------------------- */
/* ------------------------------------------------- */
/* ------------------------------------------------- */
/* ------------------------------------------------- */
/* ------------------------------------------------- */