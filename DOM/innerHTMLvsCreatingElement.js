let container = document.querySelector("#container");

// আমরা দুটি উপায়ে element তৈরি করতে পারি:
//  (১) creatingElement 
let h1 = document.createElement('h1');
h1.textContent = 'Hello world';
container.appendChild(h1);

//  (২)innerHTML easy way
container.innerHTML = "<h1>Hello Bangladesh</h1>";