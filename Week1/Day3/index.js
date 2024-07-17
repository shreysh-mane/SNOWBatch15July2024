//  Type coercion

// console.log(2+2);                   // 4   
// console.log(2 + "2");               // string 22
// console.log(2-2);                   // 0
// console.log("2" - 2);          // number 0
// console.log(true + true);           // 2
// console.log(false + true);          // 1  
// console.log("A" + "3");               // A3(String)
// console.log(3 - "A");               // NaN

// While and Do While


// var no=10;

// while(no<10){
//     console.log("While");
// }

// var no1=10;
// do{
//     console.log("Do While");
//     no1++;
// }while(no1<12);

// 1. While      Gau, Swaroop
//    Do while
// 2. While
// 3. Do while   Shu,sau,
// 4. Don't know.


// Truthy and falsy values
// function test(){
//     if(undefined){
//         console.log('HI');
//     }else{
//         console.log("Bye");
//     }

// }
// 1. "HI"        
// 2. "Bye"      
// 3. "HI" "Bye" 
// 4. No idea
// test();


// Functions: 

// 1. Function Declaration:

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,2));

// 2. Function expression / anonymous function

var sum= function(a,b){
    return a+b;
}

console.log(sum(10,20));

// 3. Arrow function

// var sumArrow=(a,b)=>{
//     return a+b;
// }

var sumArrow=(a,b)=>a+b;

console.log(sumArrow(20,30));


function cal(){
    // user Inputs;

    if(userOp=="Sum"){
        var answer= sumArrow(10,20);
        console.log(answer);
    }
}

