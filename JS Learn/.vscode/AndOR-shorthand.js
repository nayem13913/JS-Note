//first method
// example: 1
let text;
 
 let result = text || "Our country is Beautiful"


 console.log(result) // output: Our country is Beautiful


 // note: যদি কোনো একটি ভেরিয়েবল ফাকা থাকে সেখানে কি বসবে তা আপনি না জানেন কিন্তু আপনি চাচ্ছেন এই যায়গায় যদি কিছু না থাকে তাহলে একটি বিকল্প ডাটা রাখাতে, আর যদি থাকে তাহলে সেই ডাটাই বসবে তাহলে আপনি example: 1 পদ্ধতি ব্যবহার করতে পারেন। সেখানে প্রথমে আমি একটা ভেরিয়েবল ডিক্লেয়ার করেছি কিন্তু কোনো ডাটা রাখিনি। কিন্তু আমি চাচ্ছি যদি ফাকা থাকে তাহলে আমর বিকল্প টেক্সট থাকবে তাই আমি আরেকটা result নামে ভেরিয়েবল ডিক্লেয়ার করে সেখানে প্রথমে আমার text (variable) দিয়েছি যাতে যদি থাকে প্রিন্ট হবে || (or) "Our country Beautiful" এটা প্রিন্ট হবে ।


 // example:2 

 let text2 = "Mohammad Nayem"

 let result2 = text2 || "HM Nayem"

 console.log(result2)

 // note: এখানে আমার variable এ ডাটা দেওয়া আছে তাই এটি text2 এর মান Mohammad Nayem প্রিন্ট করবে। কিন্তু বিকল্প নাম HM Nayem হবে না ্



 // second method

 let isOk = true

 isOk && console.log("Everything is ok")


 // note: যদি isOk true হয় তাহলে Everything is ok প্রিন্ট হবে। সেক্ষেত্রে আমদেরকে কন্ডিশন দিতে হবে isOk এরপর &&(and) operator তারপর আমি কি প্রিন্ট করতে চাই সেটা হবে। 


