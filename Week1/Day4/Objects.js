// Objects

// Creation:
// Obj literal
var obj1={
    name:"Shreysh",
    city:"Pune",

    getInfo: function(){
     console.log("The name is"+ this.name + "city: "+ this.city);   
    }
}

console.log(obj1.city);
obj1.getInfo();

// Modify the value of properties in obj
// obj1.city="Karad";
// console.log(obj1.city);

// Add additional property to an object
// obj1.company="ABC";
// console.log(obj1.company);

// Delete property from object
// console.log(obj1);
// delete obj1.company;
// console.log(obj1);


// 2 Class
// class Person{

//     constructor(personName,personCity){
//         this.name=personName;
//         this.city=personCity;
//     }

// }
// var obj2= new Person("Yash","Mumbai");
// console.log(obj2.name);





