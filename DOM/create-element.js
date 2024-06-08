let a = document.createElement("div");
a.id ="newId";
a.className ="newClass";

// let add = document.createTextNode("Bangladesh");
// a.appendChild(add);
// এখানে আমরা ডিরেক্ট ডিভের ভেতরে টেক্সট  এড করেছি।

let h1 = document.createElement("h1");
a.appendChild(h1);
h1.textContent = "Hello world";
// এখানে আমরা div এর ভেতরে h1 tag create করেছি। তারপর সেটাকে div এর ভেতরে রেখেছি a.appendChild(h1) প্রোপার্টি দিয়ে। তারপর h1.textContent = ; প্রোপার্টি দিয়ে টেক্ট এড করেছি।

//another example
let p = document.createElement("p");
a.appendChild(p);
p.textContent = "Bangladesh";

document.body.appendChild(a); //এটা দিয়ে পুরো ডিভকে শো করেছি বডিতে।





// ul creation 
let ul = document.createElement("ul");
ul.id = "ul-create";

let li1 = document.createElement("li");
ul.appendChild(li1);
li1.textContent = "Home";

let li2 = document.createElement("li");
ul.appendChild(li2);
li2.textContent = "About";

let li3 = document.createElement("li");
ul.appendChild(li3);
li3.textContent = "Blog";

let li4 = document.createElement("li");
ul.appendChild(li4);
li4.textContent = "Media";

document.body.appendChild(ul);



// script tag creating 
let script = document.createElement("script");
script.src = "create-element.js";
document.body.appendChild(script);



// Shortcut way function diye li create 
let Shortcut = document.querySelector('#menu');

function shot(name){
    let i = document.createElement('li');
    i.textContent = name;
    return i;
}

Shortcut.appendChild(shot("Shortcut way 1"));
Shortcut.appendChild(shot("Shortcut way 2"));
Shortcut.appendChild(shot("Shortcut way 3"));