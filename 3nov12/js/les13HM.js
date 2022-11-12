"use strict";
//2
//נתונה פונקציה שמקבלת האובג״קט עם פירוט הטיפוס של האובייקט.
/* function greet(person: { name: string; age: number }) {
   return "Hello " + person.name;
} */
const person = { name: "Elvin", age: 30 };
function greet(person) {
    console.log("Hello " + person.name);
}
greet(person);
//3
//נתונה הפונקציה isTruthy
function isTruthy(val) {
    if (val) {
        console.log(val + " is Truthy");
    }
    else {
        console.log(val + " is false");
    }
}
//מה תדפיס הפונקציה בכל אחד מהמקרים הבאים:
isTruthy(true); //true is Truthy
isTruthy({}); //[object Object]
isTruthy([]); //is Truthy
isTruthy(42); //42 is Truthy
isTruthy("0"); //0 is Truthy
isTruthy(new Date()); //Mon Nov 07 2022 16:01:59 GMT+0200 (Israel Standard Time) is Truthy
isTruthy(-42); //-42 is Truthy
isTruthy(12n); //12 is Truthy
isTruthy(3.14); //3.14 is Truthy
isTruthy(-3.14); //-3.14 is Truthy
isTruthy(Infinity); //Infinity is Truthy
isTruthy(-Infinity); //-Infinity is Truthy
isTruthy(0); //0 is false
isTruthy(""); //is false
isTruthy(false); //false is false
isTruthy(NaN); //NaN is false
isTruthy(null); //null is false
isTruthy(undefined); //undefined is false
//4 ספר טלפונים  
