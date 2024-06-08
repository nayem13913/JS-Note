// for loop

// for(let i = 0; i < 10; i++){
//     console.log(i)
// }




// while loop

var isRunning = true

while(isRunning){
    let rand = Math.round(Math.random() * 10 +1)
    
    if( rand === 9){
        console.log("Winner winner chiken dinner")

        isRunning = false
    } else{
        console.log("You have got " + rand)
    }

    isRunning = false
}




// do while

do {
    text += "The number is " + i;
    i++;
  }
  while (i < 10);




  // nested loop

  let n = 10 

  for(let i = 1; i <= n; i++){
 
       let result = ''
    for(let j = 1; j <= i; j++){
       result += j + ''
    }
 
    console.log(result)
  }

/*output: 
1
12
123
1234
12345
123456
1234567
12345678
123456789
12345678910 */



var n2 = 2

for( i = 1; i <= n2; i++){
   let result = ''
   for(var j = 1; j<= n2; j++){
      result += '*'
   }

   console.log(result)
}





// ifninity loop

for(; ;){
    let rand = Math.round(Math.random() * 10 +1)

    if(rand === 9){
        console.log("Booyah Free Fire")
        break
    } else{
        console.log("You have got" + rand)
    }
}

// note: এখানে আমরা একটা infinity loop create করেছি। যেখানে আমরা for লুপের ভেতরে কোনো রকম কন্ডিশন দেইনি । এজন্য আমরা যদি লুপে কোনো একটা অংশে break না করি তাহলে এটা অনন্তকাল মানে infinity ভানে চলতে থাকবে। 