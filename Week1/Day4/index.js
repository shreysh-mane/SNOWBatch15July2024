// Scopes

// Global Variable

// var gVariable=10;
// let glv=10;
// const gcv=20;

// function demoFunction(){
//     var b=20;
//     let c=10;
//     const d=30

//     console.log("gVariable log from demofunction: "+ gVariable);
//     console.log(glv);
//     console.log(gcv);
//     console.log("b log from demofunction: "+ b);

//     if(true){
//     console.log("gVariable log from if block: "+ gVariable);
//     console.log(glv);
//     console.log(gcv);
//     console.log("b log from if Block: "+ b);    
//     }

// }

// demoFunction();

// console.log("gVariable log from GlobalArea: "+ gVariable);
// console.log(glv);
// console.log(gcv);
// console.log("b log from GlobalArea: "+ b);





// Block scope

function demoBlock(){
    var d=40;
    let e=50;
    if(true){
        var a=10;
        let b=20;
        const c=30;

        console.log(a); 
        console.log(b);
        console.log(c);
    }

    console.log(a); 
    // console.log(b);
    // console.log(c);
    console.log(d);
    console.log(e);

}
demoBlock();

console.log(e);
