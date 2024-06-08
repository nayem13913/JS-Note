let eValueGenerate = Math.E;
console.log(eValueGenerate); // এখানে আমরা E এর ডিফল্ট ভ্যালু বের করলাম।


let generatePI = Math.PI;
console.log(generatePI); // এখানে আমরা PI এর মান বের করলাম। 




// different type of Math function

let n = -4.589;

console.log(Math.abs(n));  // output: 4.589
// absolute number যা কোনো নেগেটিভ ভ্যালুকে পজেটিভ করে দিবে। 


// Math.floot methods
let decimalNumberCut = 5.683;
console.log(Math.floor(decimalNumberCut)); // output: 5

 // note: দশমিকের পরের সংখ্যাগুলো বাদ দিয়ে একটি পূর্ণ Integer number দেয়। এজন্য Math.floor() use করতে হয়। 



// nearest Integer number genarate by Math.round() function
let integerNum = 5.100;
console.log(Math.round(integerNum)); // output: 5

let integerNum2 = 7.570;
console.log(Math.round(integerNum2)); // output: 8

// আমরা ছোটবেলায় যখন ম্যাথ করতাম তখন দশমিকের পরের সংখ্যাগুলো যদি ৫ এর নিচে হতো তাহলে আমরা আমার ঐ দশমিকের পরের সংখ্যাগুলো বাদ দিয়ে দশমিকের আগের পূর্ণ সংখ্যায়ই রাখতাম আবার যদি ৫ এর ওপরে হয় তাহলে আমরা পরবর্তী পূর্ণ সংখ্যাতে কনভার্ট করতাম। জাভাস্ক্রিপ্টের ম্যাথে Math.round() ঠিক এই কাজটাই করে থাকে। 



// Math.ceil() methods
let x = 3.2;    
let y = 3.4;    
let z = -3.6;   
 console.log(Math.ceil(x)); // output: 4
 console.log(Math.ceil(y)); // output: 4
 console.log(Math.ceil(z)); // output:-3

 // জাভাস্ক্রিপ্টে কোনো পূর্ণ সংখ্যার পরে যদি দশমিক সংখ্যা থাকে তাহলে দশমিকের আগের পূর্ণ বা Integer সংখ্যাকে পরবর্তী পূর্ণ বা Integer সংখ্যায় কনভার্ট করে। Neagative থাকলে সেটােকে দশমিক বাদ দিযে নেগেটিভ পূর্ণ সংখ্যায় নিয়ে নিবে।  




 //max and min number

 //max
 let maxValue = Math.max(300,400,500);
 console.log(maxValue); // output: 500
 
//min
 let minValue = Math.min(400, 500, 600);
 console.log(minValue); // output: 400

 // note: অনেকগুলো সংখ্যার ভেতরে থেকে maximum valu বের করতে Math.max() r minimum valu বের করতে Math.min() use করতে হয়। 




 // power genarate

 let powEr = 5;
 console.log(Math.pow(powEr, 3)); // output: 125
 console.log(Math.pow(powEr, 2)); // output: 25

 //note:কোনো নাম্বারের ওপর পাওয়ার দিতে হলে Math.pow(main valu, power value) দিতে হয়। 




 // square root

let squareRoot = 64;

 console.log(Math.sqrt(squareRoot)); // output: 8

// note: কোনো মানকে root করতে হলে এ মানকে Math.sqrt(main value) এর প্যারামিটারে দিলেেই হয়ে যায়। 
 




 //random number generate

 let randomNumbGenarate = Math.random() * 6 + 1;
 console.log(Math.round(randomNumbGenarate)); // ‍output: any kind of number 

 //note: এখানে আমরা ১-৬ এর ভেতরে random নাম্বার জেনারেট করতে বলেছি। আমারা প্রথমে একটি ভেরিয়েবলে Math.random() ফাংশন করেছি তারপরে আমরা আমাদের নির্দিষ্ট ভ্যালু ৬ গুন করে তার সাথে ১ যোগ করে দিয়েছি। কারণ আমরা ১-৬ এর ভেতরে random নাম্বার জেনারেট করতে চেয়েছি। তারপর আমরা কসসোলে Math.round() এর প্যারামিটারে randomNumbGenarate ভেরিয়েবলটি রেখে দিয়েছি কারণ Math.random() দশমিক সংখ্যা আসলে সেটাকে কেটে পূণ্য সংখ্যায় কনভার্ট করে দেয় 




 