// add key and value

// const obj={
//     name:'gajendra',
//     age:'22'
// }
// const obj1={...obj,address:"indore"}
// console.log(obj1)
/////////////////////////////////////////////////////

// key and value iterates 
/*const arrOfObj = [{
    name: "gajendra",
    age: "22",
    Address: 'indore'
},
{
    name: "singh",
    age: "21",
    Address: 'indore'

}];

// Access the first object in the array
const obj = arrOfObj[0];
const obj1=arrOfObj[1];

// Change the value of the "name" property
obj.name = "John";
obj1.Address="jabalpur"

// Change the value of the "age" property
obj.age = "25";

console.log(arrOfObj);*/

/////////////////////////////////////////////////////////////

//array operations  index and value
// arr=['a','b','c'];
// for(let value of arr){
//     console.log(value);
// }
// for(let index in arr){
//     console.log(index);
// }
///////////////////////////////////////////////////////////////

//iterate object key and value
// const obj={
//     name:"gajendra",
//     age:'22'
// }

// const key=Object.keys(obj)
// console.log(key)
// const object=Object.values(obj)
// console.log(object)

// key.forEach(element => {
//     console.log(element)
// });
// object.forEach(element => {
//     console.log(element)
// })


////////////////////////////////////////////////////////

// update value of obj
// const obj={
//     name:'gajendra',
//     age:'22'
// }

// obj.name='singh'
// console.log(obj)


////////////////////////////////////////////////////////




// const arrOfObj = [{
//     name: "gajendra",
//     age: "22",
//     Address: 'indore'
// },
// {
//     name: "singh",
//     age: "21",
//     Address: 'indore'

// }];


// const obj1=arrOfObj[0];
// const keys=Object.keys(obj1);
// keys.forEach((key)=>{
//     console.log(key)
// })



///////////////////////////////////////////////////

// nested object
// const obj = {
//     name: 'gajendra',
//     age: '22',
//     address: {
//         city: 'indore',
//         pincode: '222000'
//     },
//     dist:'seoni'
// };

// function iterateNestedObject(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'object' && obj[key] !== null) {
//             iterateNestedObject(obj[key]); // Recursive call for nested objects
//         } else {
//             console.log(obj[key]); // Output the value
//         }
//     }
// }

// iterateNestedObject(obj);


2// // ///////////////////////////////////////////////

// for (let key in obj) {
//     const value = obj[key];
//     console.log("Key:", key);
//     console.log("Value:", value);
// }

////////////////////////////////////////////////////////

// shallow copy and deep copy
// orignalobj={
//     name:"gajendra",
//     age:"21"
// }

// shallowcopy=orignalobj;
// console.log(shallowcopy);
// shallowcopy.age='22';
// console.log(shallowcopy);   


// deepcopy=JSON.parse(JSON.stringify(orignalobj));
// deepcopy.age="22";
// console.log("deep",deepcopy);
// console.log("orignal",orignalobj);

//////////////////////////////////////////////////////////////

// const obj={
//     name:'gajendra'
// }


// const key='age';
// const value='22'
// obj[key]=value;
// console.log("dynamic",obj);
// obj.age="22";
// console.log(obj);


//////////////////////////////////////////////////////

// closure


// const sum=function(a){
//     console.log("hello"+a)
//     var c=5
//     return function(b){
//         return a*b*c
//     }
// }
// const store=sum(5);
// console.log(store(5))



// Create an empty object
// var myObject = {};

// // Sample data
// var data = [
//   { key: 'name', value: 'John' },
//   { key: 'age', value: 30 },
//   { key: 'city', value: 'New York' }
// ];

// // Loop through the data array
// for (var i = 0; i < data.length; i++) {
//   var item = data[i];
//   myObject[item.key] = item.value;
// }

// // Access the object
// console.log(myObject);


// const obj={
//     key0:"key0",
//     key3:"key3"
// }
// for(let i=0; i<5; i++) {
//     const key="key"+i;
//     const value="key"+i;
//      obj[key]=value;
// }
// console.log(obj);


// /*const arrOfObj = [{
//     name: "gajendra",
//     age: "22",
//     Address: 'indore'
// },
// {
//     name: "singh",
//     age: "21",
//     Address: 'indore'

// }];

// // Access the first object in the array
// const obj = arrOfObj[0];
// const obj1=arrOfObj[1];

// // Change the value of the "name" property
// obj.name = "John";
// obj1.Address="jabalpur"

// // Change the value of the "age" property
// obj.age = "25";

// console.log(arrOfObj);*/



  
// let array = [
//  {id:1,
//   name:'One'
// },
//  {id:2, name:'Two'},
//  {id:3, name: 'Three'}
// ];
// let array2 = array.map(a => {return {...a}})
// array.find(a => a.id == 2).name = "Not Two";
// console.log(array);
// console.log(array2);


// array = array.map((element,i) => element.id == 2 ? {...element, city : 'New Name',age:'66'} : element);

// // array = array.map((element,i) => element.id == i+1 ? {...element, city : 'New Name',age:'66'} : element);
// console.log(array);
// console.log(array);


// use of rest operator 
// arr=[1,2,3,4,5,]

// const[one,two,...rest]=arr;
// console.log(one);
// console.log(rest);

//use of spread operator

// arr=[1,2,3,4,5,]
// console.log([...arr])