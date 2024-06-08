let num = (0.2*10 + 0.1*10)/10;
// console.log(num);


// number and string + check 
let a = 10;
let b = 20;
let c =   "this is a total" + a + b;
console.log(c);


// numeric String 
let ab = "100"
let ac = "10"
let ad = ab / ac; //এখানে ‍string type number কে - , * , / করলে ম্যাথের মতো সবকিছু করবে কিন্তু শুধুমাত্র + এর বেলায় স্ট্রিং এড হয়ে যাবে
// console.log(ad); // output: 10



// NaN check
let ba = "r10"; //এটা true দেখাবে, তাই এটি Not a Number
let ca = "20";  //এটা fals দেখাবে, তাই এটি একটি Number
// console.log(isNaN(ba))
// console.log(isNaN(ca))


// type of NaN 
let str = "abc";
let numb = 10;
let tota = str + numb;
// console.log(tota);

//note: কোনো string কে নাম্বার দিয়ে ক্যালকুলেশন (শুধুমাত্র যোগ + ছাড়া। কারণ + করলে সেটা ‍ যোগ হয়ে abc10 আউটপুট দেখাবে ) করলে সেটার আউটপুট NaN দেখাবে। উপরে line:28 এর ‍স্ট্রিংকে line:29 এর ১০ দিয়ে -, *, /, % করলে সেটার আউটপুট NaN আসে।


// number methods 
// 1-number to string 

let nu = 123; //এটা নাম্বার
let st = nu.toString(); //এটা স্ট্রিং হয়ে গেছে
// console.log(typeof st);

//note: number কে string এ convert করতে হফে toString() methods use করতে হয়। line: 35 এর নাম্বারকে আমরা line: 36 এ nu.toString() methods দিয়ে স্ট্রিংয়ে কনভার্ট করেছি। 