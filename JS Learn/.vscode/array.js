// Array 
 let a = ["Tamim Iqbal","Shakib Al Hasan","Mushfiqur Rahim"] //এটি একটি arrray
//  console.log(a);


// array valu change 
let valuChange = ["Nayem", "Fahim", "Siam"];

valuChange[2]= "Momin";

//  console.log(valuChange); // output: ["Nayem", "Fahim", "Momin"]

// note: আমরা চাইলে array এর index number ধরে তা value change করতে পারি। আমরা এখানে আমরা 2 number index কে পরিবর্তন করে Momin add করেছি। তাই আমরা ্ প্রথমে variable এর নাম দিয়ে তার ভেতরে স্কয়ার ব্রাকেটে index number = "Momin" বসিয়ে দিয়েছি ।







 /*
 
 # এসবের length ধরতে আমরা index number use করবো। 
  
 unshift() --- Array এর প্রথমে value add করে।
 shift() --- Array এর প্রথমের value remove করে।

 push() ---  Array এর শেষে value add করে।
 pop() ---  Array এর শেষের value remove করে।

 slice() ---Array এর যেকোনো যায়গা থেকে ‍ slice করে value cut করতে পারি। 
 splice() --- Array এর যেকোনো যায়গার value remove করে সেখানে new value add করা যায় । 
 
 */


/*  
 array Push method: push method দ্বারা ভ্যালু অ্যাড করা হয়। আর এই মেথড দ্বারা শুধু array এর শেষের ভ্যালু পরিবর্তন হবে, তাছাড়া আর কোনো ভ্যালু পরিবর্তন হবে না। 
*/
// Example:
 let push = ["Javascript","Python","Java"]

 pus.push("C++");

 console.log(push); // output:["Javascript", "Python", "Java", "C++"]



//  array Pop method: pop() method দ্বারা array এর শেষের ভ্যালু রিমুভ করা হয়। 

// Example:
let pop = ["Shaib", "Rakib","Nasir"];
pop.pop(); 
console.log(pop); // output: [ 'Shaib', 'Rakib' ]




//  array Unshift method: unshift() method দ্বারা array এর প্রথমে ভ্যালু এড  করা হয়।  

// Example:
 let unshif = ["Parvej","Rana","Mahin"];

 unshif.unshift("Nayem");

 console.log(unshif);




 //  array Slice method: Slice() method দ্বারা ‍অ্যারে তে নির্দিষ্ট ভ্যালুকে রেখে বাকিগুলো বাদ দেওয়া যায়। slice method কে বলে দিতে হবে আমরা কত নাম্বার index থেকে slice করবো। যদি আমরা একটা index number provide করি তাহলে ঐ index সহ ডান পাশের সব value রেখে বাকিটা বাদ দিয়ে দিবে। তারমানে সে ঐ নির্দিষ্ট index থেকে slice টা করবে। আর যদি আমরা মাঝখান থেকে কোনো specific valu  কে slice করতে চাই তাহলে আমাদেরকে শুরুর এবং শেষের index number  বলে দিতে হবে। তবে, এখানে মনে রাখতে হবে এক্ষেত্রে যেই index number টা ধরবো সেটা সহ ধরবে আর যেটা দিয়ে শেষ বলে দিবো সেটা বাদ ধরবে না। 
 // Exmaple:
 let slc = ["Nayem","Fahim","Siam","Sohag","Parvej"];

 console.log(slc.slice(2)); // output: [ 'Siam', 'Sohag', 'Parvej' ]


 let ano = ["Tamim", "Shakib", "Mushfiq", "Mahmudullah"];

 console.log(ano.slice(1,3)); // output: [ 'Shakib', 'Mushfiq' ]





  //  array Splice method: Splice() method দ্বারা ‍অ্যারে তে নির্দিষ্ট ভ্যালুকে remove করে নতুন ভ্যালু add করা যায়। তবে এখানে আমরা যেটাকে ধরবো সেটা এবং যেখানে শেষ করবো সেটাকেও ধরে নিবে।

 //Example:
 let splc = ["Tamim", "Shakib", "Mushfiq", "Mahmudullah"];

 splc.splice(1,2 ,"Nayem");

//  console.log(splc);     // output: ['Tamim', 'Nayem', 'Mahmudullah']


 let spl = ["Tamim", "Shakib", "Mushfiq", "Mahmudullah"];

 spl.splice(1,2);

//  console.log(spl);     // output: ['Tamim', 'Mahmudullah']
