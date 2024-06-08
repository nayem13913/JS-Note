 //1-Get Element by id methods  
 let ID1 = document.getElementById("demo");
//  ID1.innerHTML = "Bangladesh Won the world cup the feears of imagine. Look who we are. We are the dremer";

// 2-get elements by class name methods 
let x = document.getElementsByClassName("hello")[0];
// x.innerHTML = "Assalamu Alaikum";

// 3-get elements by name methods 
let h  = document.getElementsByName("heading5")[0];
// h.innerHTML = "Hello Bangladesh";


// 4-get ElementsByTagName 
let y = document.getElementsByTagName("h1")[0];
// y.innerHTML = "Say Hi";



// note:কুয়েরি সিলেক্টরে আইডি অথবা ক্লাস ধরলে অবশ্যই # এবং . দিয়ে লিখতে হবে একেবারে css এর মতো। আর ট্যাগ তার মতোই বসবে।

// 5- query selector 
let z = document.querySelector("p");
// z.innerHTML = "Australia";


// 6- query selector all 

let a = document.querySelectorAll("p")[1];
// a.innerHTML = "Afghanistan";
 