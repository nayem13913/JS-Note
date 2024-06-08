//  parent element acces 
 let a = document.querySelector(".chld");
console.log(a.parentNode);



// child element acces 
let b = document.querySelector('.main');
console.log(b.firstChild); // worng methods
console.log(b.firstElementChild); //right methods
console.log(b.lastElementChild); //right methods
//এখানে যদি firstChild দিয়ে আউটপুট দেখতে যেতাম তখন আউটপুট আসতো #text. কারণ এখানে space রয়েছে প্রতিটা এলিমেন্টের আগে। এর সলিউশন হিসেবে firstElementChild ব্যবহার করা হয়েছে। একই ক্ষেত্রে lastChild এ ও প্রযোজ্য।



// all child catching 
let c = document.querySelector(".main");
console.log(c.childNodes); // wrong
console.log(c.children); // right methods
//এখানে childNodes use করলে একটা #Text , একটা এলিমেন্ট দেখাবে যা আমরা চাই না ।আমরা চাই #text ছাড়া শুধু এলিমেন্ট দেখতে। সেক্ষেত্রে আমাদেরকে childNodes এর যায়গায় childeren use করতে হবে।




// কোনো এলিমেন্টের আগের এবং পরের এলিমেন্ট acces করার জন্য ‍Sibling methods:
let d = document.querySelector('.third-child');
console.log(d.nextElementSibling);
console.log(d.previousElementSibling);
// এখানে নির্দিষ্ট একটা এলিমেন্টর আগের এবং পরের এলিমেন্ট কে অ্যাক্সেস করা হয়েছে। 

