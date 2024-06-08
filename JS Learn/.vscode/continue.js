//exmaple: 1
for(let i = 1; i <= 10; i++){
    if(i === 4 || i === 7){
        continue
    }

    // console.log(i)
}



// Example-2 

 
    const arr = ["Shakib Al Hasan", "Tamim Iqbal", "Mushfiqur Rahim", "Mosaddek Hossain", "Afif Hossain", "Yeasir Ali"]

    // return myfavourit/

 for(let i = 0; i < arr.length; i++){

    if(i === 3 || i === 4 || i ===5){

        arr.push("Mahmudullah Riyad") 
        continue
    }
    
    console.log(arr[i])
 }



 // Output

/*
Shakib Al Hasan
Tamim Iqbal
Mushfiqur Rahim
Mahmudullah Riyad
Mahmudullah Riyad
Mahmudullah Riyad 
*/



 
  

 