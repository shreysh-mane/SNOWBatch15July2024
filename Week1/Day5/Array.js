// Iterating over array.
                // 0       1           2
// var fruits = ["Apple", "Banana", "Mango"];

//  Normal loop
// for(var i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }



//For of loop
// for (var fruit of fruits) {
//   console.log(fruit);
// }



// For in loop
// for (var index in fruits) {
//   console.log(index);
//   console.log(fruits[index]);
// }

// var obj={
//     name:"yash",
//     city: "pune"
// }
// for (var key in obj) {
//     console.log(key+": "+ obj[key]);
//     console.log(key+": "+ obj.key);
// }
// console.log(obj.name);
// console.log(obj["name"]);



// For each loop
// Syntax
// array.forEach(function(currentValue, index, array) {
//     // code block to be executed
// });

// Eg.

// fruits.forEach(function(currentElement,index){
//     console.log("currentElement :"+ currentElement+ " index : "+index + " array: "+ array);
// });




// Array Methods.
// sort()
// var array=['a','e','d','b','f'];
// array.sort();
// console.log(array);


// var arrayNum=[1,2,10,3,100,4,12,15,14];
// arrayNum.sort((a,b)=>a-b);
// console.log(arrayNum);

// Join()
// console.log(arrayNum.join());



// const numbers = [1, 2, 3, 4, 5];
// Filter
// Used to filter an array 

// var oddNumbers=numbers.filter(function(num,index,arr){
//     return num % 2 != 0;
// });
// console.log(oddNumbers); 
// console.log(numbers);


// Map
// To perform operation on array elements and store it in new array
// var addTwo=numbers.map(function(num,index,arr){
//     return num+2;
// });
// console.log(addTwo); 
// console.log(numbers);


// Reduce
// const numbers = [1, 2, 3, 4, 5];
// var sum=numbers.reduce(function(acc,num,index,arr){
//     console.log("acc: "+ acc+ " num: " + num+ " index:"+ index +"arr: " + arr);
//     return acc+num;
// });
// console.log(sum);









  