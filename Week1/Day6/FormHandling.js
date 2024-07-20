var formElement=document.getElementById('form');
var h1Ele=document.getElementById('h1id');
// console.log(formElement);

var userEmailEle=document.getElementById('useremail');
var userPassEle=document.getElementById('userpass');

var userObj={
    userEmail:"",
    userPass:""
}


function formSubmit(){
    event.preventDefault();
    console.log("Form submit");

    // var h1content=h1Ele.innerHTML;
    // console.log(h1content);

    var userEmail=userEmailEle.value;
    var userpass=userPassEle.value;
    // console.log(userEmail);
    // console.log(userpass);

    userObj.userEmail=userEmail;
    userObj.userPass=userpass;

    console.log(userObj);

}

formElement.addEventListener('submit',formSubmit);







