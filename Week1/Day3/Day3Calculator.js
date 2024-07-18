// Calculator programme 
// accept 2 no
// and user op.
           //10 20
var sumFun=(a,b)=>{  
    return a+b;
}

var mulFun= function(a,b){
    return a*b;
}

function Calculator(){
    var no1=prompt("Number 1");
    no1=parseInt(no1); //10
    var no2=prompt("Number 2");
    no2=parseInt(no2); //20

    var userOP=prompt('User OP');
    var answer=0;
    if(userOP=="sum"){
        answer= sumFun(no1,no2); //10,20
        console.log(answer);
    }else if(userOP=="min"){
        answer=no1-no2;
        console.log(answer);
    }else if(userOP=="mul"){
        answer= mulFun(no1,no2);
        console.log(answer);
    }    
    
}

Calculator();







