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
    category: 'CSS',
    price: 29.9
},
{
    image: "phpBasics.png",
    title: 'Getting started with php',
    category: 'PHP',
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
    category: 'PHP',
    price: 45.9
},
{
    image: "javascriptDOM.png",
    title: 'DOM the power of javascript',
    category: 'JS',
    price: 23.9
}
]

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = courses.map(function (item) {

    return `<article class="menu-item ${item.category}">
          <img src=${item.image} alt=${item.title} class="coursephoto" />
          <div class="item-info">
            <header>
            <h4 class="coursename"> ${item.title} </h4> 
            <h4 class="price"> $${item.price}</h4> 
            </header>
              
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
});

function filterProduct(value) {
    let buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    let elements = document.querySelectorAll(".menu-item");
    elements.forEach((element) => {
      if (value == "ALL") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }

  document.getElementById("search").addEventListener("input", () => {
    let searchInput = document.getElementById("search").value;
    let elements = document.querySelectorAll(".coursename");
    let cards = document.querySelectorAll(".menu-item");
      elements.forEach((element, index) => {
      if (element.innerText.toUpperCase().includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });
  
  function rangeSlider(value){
    document.getElementById('rangevalue').innerHTML = value;
  }
  function price(v){
    const coursesprice = courses.filter(function (coursesItem){
        if(coursesItem.price <= v){
            return coursesItem;
        }
    });
    displaycoursesItems(coursesprice);
   // console.log(coursesprice)
  }
  