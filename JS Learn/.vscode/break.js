while(true){
    var rand = Math.floor(Math.random() * 10 +1)
        if(rand === 7){

            console.log("winner Winner chicken dinner")
            break
        } else{
            console.log('You have got' + rand)
        }
}



// note: কোনো loop কে আমার expected output পাওয়ার পর থামিয়ে দেওয়ার জন্য break keyword ব্যবহার করতে হয়। তাই আমরা উপরে লুপের ভেতরে if কন্ডিশনে বলে দিয়েছি যে, তুমি তখনই এই লুপটা থেকে বেরিয়ে যাবে যখন rand 7 হয়ে winner winner chiken dinner এইটা সত্য হয়ে যাবে। তাই আমরা  শেষে break keword ব্যবহার করে দিয়েছি। 