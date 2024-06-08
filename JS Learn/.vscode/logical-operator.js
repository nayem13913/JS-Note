 //  && (and) operator

 // A && B
 // true && true == true - যদি A এবং B এর ভ্যালু true হয তাহলে সেটা true execute করবে।
 // true && false = false - যদি A অথবা B এর যেকোনো একটি false হয় তাহলে সেটা false execute করবে।
 //  false && true = false - যদি A অথবা B এর যেকোনো একটি false হয় তাহলে সেটা false execute করবে।
 // false && false = false - আবার যদি ২টা ভ্যালু ই false হয় তাহলে সেটা false execute করবে।  


 // || (or) operator

 //  A || B:-
 // True || True = True - যদি ২টা ভ্যালু ই true হয় তাহলে সেটা True execute করবে। 
 // true || false = true - যদি যেকোনো একটা ভ্যালু true হয় তাহলে সেটা true execute করবে।
 // false || false = false - যদি ২টা ভ্যালুই false হয় তাহলে সেটা false execute করবে। 





 // Example: 

 let a = 22
 let b= 20
 let c= 30
 let d= 40


 if (a > b && c > d){
    console.log("a is greather than b and c is greather than d")
 } else{
    console.log("At least one condition is false");
 }


 
 if (a > b || c > d){
    console.log("a is greather than b or c is greather than d")
 } else{
    console.log("At least one condition is false");
 }




  // ! not operator
// কোনো অপারেটর false সেটা প্রমাণ করার জন্য কন্ডিশনের আগে ! (not operator) বসে।

// Example:

 let check = !(a>b);
 console.log(check); // true - why: কারণ এখানে বলেই দেওয়া আছে যে ‍ a থেকে b ছোট এটা কি মিথ্যা? উত্তরে সে বলে হ্যা মানে true.

  