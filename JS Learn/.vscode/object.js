                                // Javascript Object
//  first step basic
 let myDetails = {
    myName:"Mohammad Nayem",
    district:"Bhola", 
    PostCode:8300
}
 console.log(myDetails);
// first step basic end 




//  second step intermediat 
function myInfo(myName,District,PostCode){
    this.myName = myName;
    this.District = District;
    this.PostCode = PostCode;
}

let myObj = new myInfo("Mohammad Nayem", "Bhola", 8300);
let myObj2 =new myInfo("Shakib Al Hasan", "Magura", 6790);
console.log(myObj);
console.log("         ")
console.log(myObj2);
// second step intermediat end 





// third step Advance 
function myInfo(MyName, District, Postcode){
    this.MyName =MyName;
    this.District =District;
    this.Postcode =Postcode;
    this.show = function (){
        console.log(MyName);
        console.log(District);
        console.log(Postcode);
    }
}

var newObj = new myInfo("Mohammed Nayem", "Bhola", 8300);
var newObj2 = new myInfo("Shakib Al Hasan", "Magura",6700);
var newObj3 = new myInfo("Mashrafe Bin Mortaza", "Narial", 4500);
var newObj4 = new myInfo("Mahmudullah Riyad", "Mymensingh", 4200);
newObj.show() 
newObj2.show() 
newObj3.show() 
newObj4.show() 
// third step advance end 