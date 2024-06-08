/*
=========================================================================================================================
                                                string  methods
======================================================================================================================== 
*/

// ১. String Length check 

 let textLength = "abcdefghijklmnopqrstuvwxyz";

 console.log(textLength.length);

// note: এখানে space সহ গনণা হবে।




// ২. new line

var str = "This is  a \nString"

console.log(str)

// note:এখানে আমরা this is a এর পর একটা নতুন লাইন তৈরি করার জন্য \n দিয়ে লাইন তৈরি করলাম। 





//  ৩. eacape string 

 let textt = "We \
 are the \
 so-called \
 viking from \
 the north.";

 console.log(textt);





/* Key point: slice(start, end)
substring(start, end)
substr(start, length) */



// ৪. string methods  practice: slice - The method takes 2 parameters: start position, and end position (end not included).

 let str2 = "Apple, Banana, Kiwi";

 let Banana = str2.slice(7,13);  // Banana

 console.log(Banana);

 // note: string কে slice করতে হলে ‍ variable কে .slice(এখানে index number দিয়ে start and end বলে দিতে হয় কত থেকে কত slice করবো) করতে হয়। দুইটি নাম্বার slice এর ভেতরে আর্গুমেন্ট আকারে দিতে হবে। index number 0 থেকে শুরু হয়। এবং ‍start number এর ভ্যালু সহ ধরবে এবং end এর আগে পর্যন্ত ধরবে। 
 



// ৫. substirng 
let Fruits = "Apple, Banana, Kiwi";

let part = Fruits.substring(7);  // output: Banana, Kiwi

console.log(part);

//  substring and slice both are same. slice accept negative (-) value and substring cannot accept negative value. That's it! Ohterwise substirng is like slice.





// ৬. string substr(start index, length)

let myTest = "Jackfruits, Mango, Litchy, Cherry";

let result = myTest.substr(12,13); // output: Mango, Litchy
console.log(result.length);

// substr হলো অনেকটা ‍ slice বা substring এর মতো কিন্তু পার্থক্য হলো: ‍ substr এর বেলায় আমরা কোনো নির্দিষ্ট ভ্যালু কে রেখে বাকিটা স্লাইস করতে চাইলে  substr() এর ভেতরে ‍ start index নাম্বার টা যেখানে হবে মানে প্রথম কোপটা যেখানে হবে তার পর থেকে আমরা কতটুকু  পর্যন্ত রাখবো তার length বলে দিতে হবে ।


// ৭. replace 

let x = "I love Shakib";

let y = x.replace("Shakib", "Tamim");

console.log(y); // output: Tamim

// Note: replace methods দিয়ে আমরা স্ট্রিংয়ের ভেতরের কোনো একটা নির্দিষ্ট অংশকে পরিবর্তন করতে পারি। এক্ষেত্রে আমাদেরকে .replace() প্রথমে প্যারামিটারে বলে দিতে হবে আমি কোনটাকে পরিবর্তন করবো এবং তারপর বলে দিতে হবে ঐ যায়গা পরিবর্তন হয়ে সেখানে নতুন কি ভ্যালু যোগ হবে।  x.replace("Shakib", "Tamim"); এখানে আমি Shakib পরিবর্তন করে Tamim কে বসিয়েছি। 


let textw = "Please visit Microsoft and Microsoft!";
let newText = textw.replace(/Microsoft/g, "W3Schools");

console.log(newText);


// replaceAll() methods

let rep = "I want to go Australia. Australia is a beautiful country. When I will go, I will earn lots of money"

rep = rep.replaceAll("Australia", "Saudi Arabia")

console.log(rep)


// কোনো স্ট্রিং এ  একই ওয়ার্ড ২বার থাকলে , ঐ ২টা ওয়ার্ড একসাথে রিপ্লেস করতে হলে replaceAll() methods ব্যবহার করতে হয়। 







// ৮. toUpperCase and LowerCase

// lower case
 let upC = "HELLO WORLD";
 let upCr = upC.toLowerCase();




 // ৯. upper case
let test = "lowercase to uppercase";

let lower = test.toUpperCase()
console.log(lower); // output: LOWERCASE TO UPPERCSE 





//  ১০. jS STRING CONCAT 

 let text1 = "hello"
 let text2 = "Bangladesh"
 let result_concat = text1.concat(" ", text2);

 console.log(result_concat);

 //note: কোনো স্ট্রিংয়ের সাথে আরেকটি স্ট্রিং জোড়া দিতে হলে concat() methods ব্যবহার করতে হয়।  সেক্ষেত্রে আমরা tex1 এর সাথে text2  concat করেছি ।  result_concat ভেরিয়েবলে এসে আমরা text1.concat(ফাকা স্ট্রিং , আমার যেই স্ট্রিংটা এড করবো সেটা বসিয়ে দিলাম)
 





/*
 trim  --- এটা দিয়ে একসাথে string এর সামনোর এবং পেছনের whitespace remove করা হয়।

 trimStart() --- এটা দিয়ে শুধু string এর সামনের whitespace remove করা হয়। 

 trimEnd --- এটা দিয়ে শুধু string এর পেছনের whitespace remove করা হয়।
 */


// ১১.  js string trim 

let text5 = "      Hello World!      ";
let text6 = text5.trim();

console.log(text6);


//note: trim() দিয়ে আমরা কোনো স্ট্রিংয়ের আগের অথবা পরে যদি কোনো স্পেস থাকে তাহলে সেই স্পেস কাট করতে পারি। তাই trim ব্যবহার করা হয় ।








// ১২. js string trim start 

let textg = "     Hello World!     ";
let texth = textg.trimEnd();

console.log(texth);







// ১৩. string padding 


// padStart() --- এটা string এর আগে pad দেয় । 
let text8 = "5";
let padded = text8.padStart(5,"0"); // output: 00005

console.log(padded);


// padStart() --- এটা string এর পরে pad দেয় । 
let text9 = "5";
let padded9 = text9.padEnd(5,"0"); // output: 50000

console.log(padded9);




// ১৪. string charAt 

let tex = "Hello World";
let et = tex.charAt(8); // output: r

console.log(et);

// note: charAt() methods  string এর নির্দিষ্ট পজিশন বা index বলে দেয় । 
 




// ১৫. string charCodeAt 
let textu = "HELLO WORLD";
let char = textu.charCodeAt(0);

console.log(char);  // output: 72


// charCodeAt দিয়ে কোনো string এর নির্দিষ্ট index এর code number বলে দেয় । 



// ১৬. property access 

let texty = "HELLO WORLD";
let charr = texty[6];

console.log(charr);  // output: W

// note:আমরা যেকোনো string এর ইনডেক্সের access পেতে চাইলে demo[index number] দিয়ে করতে হয়্ 





// ১৭. string split 

let b = "My name is Nayem"

console.log(b.split(" ")) // output: [ 'My', 'name', 'is', 'Nayem' ]



let exa = "Hello World"

console.log(exa.split()) // output: [Hello World]


// note: যদি আমরা কোনো  লাইনকে স্ট্রিং কে array তে রুপান্তর করতে চাই তাহলে আমরা split() methods ব্যবহার করবো। আর যদি আলাদা আলাদা ওয়ার্ডে করতে চাই তাহলে ‍ split(' ') এভাবে ফাকা স্ট্রিং দিতে হবে।






// ১৮. String templates: back-ticks syntex

let text = `It's my ruls`; 

console.log(text);




/*
=========================================================================================================================
                                                string Search methods
======================================================================================================================== 
*/

// indexOf() methods -- এটা দিয়ে স্ট্রিংয়ের কোনো  একটা নির্দিষ্ট ওয়ার্ড  কত নাম্বার index - এ আছে সেটা খুজ পাওয়া যায় । যদি কোনো কিছু খুজে না পায় তাহলে সে -1  রিটার্ন করে। 

let a = "Bangladesh tigers knocked the England Lions and out of the world cup"

console.log(a.indexOf("knocked")); // output: 18

console.log(a.indexOf("Welcome")); // output: -1  -কারণ এখানে Welcome keyword টা সে খুজে পায়নি। 