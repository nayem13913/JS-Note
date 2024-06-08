 function banglaWaz(Name, Age, Country){
    this.Name = Name;
    this.Age = Age;
    this.Country = Country;
    this.show = function(){
        console.log(Name);
        console.log(Age);
        console.log(Country);
    }
 }

 var Az = new banglaWaz("Mizanur Rahman Azhari", 40,"Bangladesh");
 var Ah = new banglaWaz("Ahmadullah", 47,"Bangladesh");
 var Hafi = new banglaWaz("Hafijur Rahman Siddiqui", 45,"Bangladesh");
 Az.show()
 Ah.show()
 Hafi.show()