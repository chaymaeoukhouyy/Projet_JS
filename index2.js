var courses = [{
    image: "javascriptDef.png",
    title: 'What is javascript?',
    category: 'JS',
    price: 9.9
},
{
    image: "htmlBasics.PNG",
    title: 'Basics of HTML',
    category: 'HTML',
    price: 5.9
},
{
    image: "htmlElements.png",
    title: 'HTML elements and tags',
    category: 'HTML',
    price: 9.9
},
{
    image: "cssSelectors.jpg",
    title: 'CSS selectors',
    category: 'CSS',
    price: 69.9
},
{
    image: "javascriptVariables.png",
    title: 'Variables and data type of javascript',
    category: 'JS',
    price: 19.9
},
{
    image: "javascriptOperators.png",
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: 29.9
},
{
    image: "htmlAttrVal.jpg",
    title: 'HTML attributes and values',
    category: 'HTML',
    price: 19.9
},
{
    image: "cssProperties.png",
    title: 'CSS properties',
    category: 'CSS',
    price: 29.9
},
{
    image: "javascriptObjects.png",
    title: 'Javascript objects and arrays',
    category: 'JS',
    price: 39.9
},
{
    image: "cssMesures.png",
    title: 'Mesures and unites of CSS',
    category: 'CSS',
    price: 19.9
},
{
    image: "cssAnimation.png",
    title: 'CSS animations',
    category: 'CSS',
    price: 19.9
},
{
    image: "javascriptFunctions.png",
    title: 'The basics of javascript',
    category: 'JS',
    price: 29.9
},
{
    image: "javascriptEvents.png",
    title: 'Javascript events',
    category: 'JS',
    price: 59.9
},
{
    image: "cssColors.png",
    title: 'Css colors',
    category: 'css',
    price: 29.9
},
{
    image: "phpBasics.png",
    title: 'Getting started with php',
    category: 'php',
    price: 15.9
},
{
    image: "javascriptFunctions2.png",
    title: 'Functions and loops with javascript',
    category: 'JS',
    price: 19.9
},
{
    image: "phpDataBase.png",
    title: 'Connecting to database using PHP',
    category: 'PHP',
    price: 29.9
},
{
    image: "phpCRUD.png",
    title: 'Manipulating crud using php',
    category: 'php',
    price: 45.9
},
{
    image: "javascriptDOM.png",
    title: 'DOM the power of javascript',
    category: 'JS',
    price: 23.9
}
]
var arr = [];
while(arr.length < 3){
    var r = Math.floor(Math.random() * courses.length);
    if(arr.indexOf(r) === -1) arr.push(r);
}
window.onload = ()=>{
    let parent = document.getElementById("gallery");
    for(let i=0;i<3;i++){
        var div = document.createElement("div");
        var image = document.createElement("img");
        image.src = courses[arr[i]].image;
        var p = document.createElement("p");
        p.innerHTML = courses[arr[i]].title;
        var price = document.createElement("span");
        price.innerHTML = courses[arr[i]].price;
        div.appendChild(image);
        div.appendChild(p);
        div.appendChild(price);
        parent.appendChild(div);
    }}