// 1st Functionality (a) then add (b) by showing click number

var footerClick = document.getElementsByTagName("footer");
var numberOfFooterClicks = 0;   // Modified for (b)
var onFooterClick = function() {
  numberOfFooterClicks += 1;    // Modified for (b)
  console.log("Click number: " + numberOfFooterClicks );  // Modified for (b)
  };
footerClick[0].addEventListener("click", onFooterClick);

// 2nd Functionality 
var menuId = document.getElementById("navbarHeader");
var menuIdToggle = document.getElementsByClassName("navbar-toggler-icon");
console.log(menuId);
console.log(menuIdToggle);
var onMenuClick = function() {
  console.log("Function works");
  menuId.classList.toggle("collapse");
};
menuIdToggle[0].addEventListener("click", onMenuClick);

// 3rd Functionality
var cardBody = document.getElementsByClassName("card-body")[0];
var cardEditSelect = document.getElementsByTagName("button")[2];
console.log(cardBody);
console.log(cardEditSelect);
onEditClick = function() {
  cardBody.style.color = "red"
};
cardEditSelect.addEventListener("click", onEditClick);

// 4th Functionality
var secondCardBody = document.getElementsByClassName("card-body")[1];
var secondCardEditSelect = document.getElementsByTagName("button")[4];
// var textColourStatus = false;
console.log(secondCardBody);
console.log(secondCardEditSelect);
secondOnEditClick = function() {
//   if (textColourStatus === false) {
//     textColourStatus = true;
//   }  
//   else if (textColourStatus === true) {
//     cardBody.style.color = "green"
//     textColourStatus = false
//   }
// };
// textColourStatus.onclick = secondOnEditClick;
// cardEditSelect.addEventListener("click", onEditClick);

  if (secondCardBody.style.color === 'green'){
    secondCardBody.style.color = 'black';
    }
  else { 
    secondCardBody.style.color = "green";
    }
};
secondCardEditSelect.addEventListener("click", secondOnEditClick);


// 5th Functionality
var navBar = document.getElementsByTagName("header")[0];
var styleSheetLink = document.getElementsByTagName("link")[0];
console.log(navBar);
console.log(styleSheetLink);
console.log(styleSheetLink.getAttribute("rel"));
adiosStyleSheetLink = function() {
  if (styleSheetLink.getAttribute("rel") === "stylesheet") {
    styleSheetLink.removeAttribute("rel");
    }
  else { 
    styleSheetLink.setAttribute("rel", "stylesheet");
    }
};
navBar.addEventListener("dblclick", adiosStyleSheetLink);

// // 6th Functionality Test
// var theCards = document.getElementsByClassName("card");

// shrinkCards = function() {
//   var paragraph = card.getElementsByTagName("p")[0];
//   var image = card.getElementsByTagName("img")[0];
//   for (let i = 0; i < cards.length; i++) { 
//     var card = cards[i];
//     var 
//   }
// INCOMPLETE TRANSFER
// };

// viewButton.addEventListener("mouseover", shrinkCards)

// 6th Functionality
let cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
  let card = cards[i];
  let btnView = card.getElementsByTagName("button")[0];
  btnView.addEventListener("mouseover", function() {
    let pTag = card.getElementsByTagName('p')[0];
    let image = card.getElementsByTagName('img')[0]
    console.log(image)
    if (pTag.textContent.length !== 0) {
      pTag.textContent = "";
      image.style.width = "20 %";
      image.style.height = "20 %";
    } else {
      pTag.textContent = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
      image.style.width = "100 %";
      image.style.height = "100 %";
    };
  });
};

// 7th Functionality
let cardNode = document.getElementsByClassName('row')[1];
console.log(cardNode);
let wtfButton = document.querySelector("a.btn.btn-secondary.my-2");
let deletePoundSign = wtfButton.removeAttribute("href");
console.log(wtfButton);
wtfButton.addEventListener("click", function() {
  cardNode.insertBefore(cardNode.lastElementChild, cardNode.firstElementChild);
});

// 8th Functionality
let blueCardNode = document.getElementsByClassName('row')[1];
console.log(blueCardNode);
let blueButton = document.querySelector("a.btn.btn-primary.my-2");
console.log(blueButton);
let deleteLink = blueButton.removeAttribute("href");
blueButton.addEventListener("click", function() {
  blueCardNode.insertBefore(blueCardNode.firstElementChild, blueCardNode.lastElementChild);
});