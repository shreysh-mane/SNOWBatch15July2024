
// console.log(document);

// console.log(document.body);

// console.log(document.body.childNodes);
// console.log(document.body.children[0].children[0]);


//__________________
// Methods for Selecting Elements:

// getElementById: Selects an element by its ID.
// getElementsByClassName: Selects elements by their class name.
// getElementsByTagName: Selects elements by their tag name.
// querySelector: Selects the first element that matches a CSS selector.
// querySelectorAll: Selects all elements that match a CSS selector.

// Selecting by ID
// var container = document.getElementById('container');
// console.log(container);

// Selecting by class name
// var paragraphs = document.getElementsByClassName('text');
// console.log(paragraphs[1]);

// Selecting by tag name
// var divs = document.getElementsByTagName('div');
// console.log(divs);

// Selecting with querySelector
 // querySelector
 // Id => #<NameOfID>
 // Class => .<NameOfClass>
 // Tag => <TagName>
// var firstParagraph = document.querySelector('.text');
// console.log(firstParagraph);

// Selecting with querySelectorAll
// var allParagraphs = document.querySelectorAll('.text');
// console.log(allParagraphs);


// __________________
// var greetEle= document.getElementById('greetMsg');
// var greetEle2= document.getElementById('greetMsg2');
// console.log(greetEle);

// Access the HTML element content
// innerHTML , textContent
// var h1Content=greetEle.innerHTML;
// var h2Content=greetEle2.innerHTML;
// console.log(h1Content); //Hii
// console.log(h1Content); //Hii


// Modify text of an HTML element.
// greetEle.innerHTML="<ul><li> Bye</li></ul>";
// greetEle2.textContent="<ul><li> Bye<li></ul>";


// Modifying Styles:
// style property: Allows you to directly set CSS properties.
// Changing styles
// greetEle2.style.color = 'blue';
// greetEle2.style.fontSize = '20px';


// Dynamically add Elements in web page

// var ulElement=document.getElementById('list');
// console.log(ulElement.innerHTML);
// ulElement.innerHTML=ulElement.innerHTML+'<li>Banana</li>';



// ___________________________________

// 2 ways to attach an event to an element
// 1. Directly add event to that html element
// 2. Add evenlistener in JS


// function changeText(){
//     // console.log("Got Clicked");
    
//     // console.log(event);
//     // console.log(event.target);
//     // console.log(event.type);
//     // console.log(event.target.innerHTML);
//     // event.target.innerHTML="Bye";
// }



// Adding event listeners
var head2Ele = document.getElementById("head2");
// console.log(head2Ele);


function handler2(){
    // console.log("Got Clicked");
    head2Ele.innerHTML="Bye";
}



head2Ele.addEventListener('click',handler2);
