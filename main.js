//---To Note---
//1. All pre-built functions must return a new array
//2. You can make new functions as long as you want but do not change or update the pre-built ones
//3. You can udpdate the values inside the *newsList variable if you want but do not change the variable name
//4. Happy coding :)

//newsList is the variable that holds an array of strings
export var newsList = [
  "What films should an aspiring journalist watch?",
  "Buried underpants and tea bags help scientists evaluate soil",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Media glare can enrich tennis pros yet imperil mental health",
  "Nightmare' TV show 'Euphoria — health threat or high art?",
  "Decoder: Armenia in a bind as Ukraine war resets global order",
  "What books should an aspiring journalist read?",
  "Marie Colvin shined a light on war-torn corners of the world",
  "Vincent Baquiro bought twitter ",
];

export function search() {
  //inputValue is the variable that contains the search string
  const inputValue = document
    .getElementById("search-input")
    .value.toLowerCase();

  //Write your code here for the search function

  let item = document.querySelectorAll(".news-list-item");
  let notFound = document.getElementById("hide-show");

  let isNotFound = false;
  for (let i = 0; i < item.length; i++) {
    let a = item[i].getElementsByTagName("h4")[0];
    let value = a.innerHTML || a.innerText || a.textContent;
    if (value.toLowerCase().indexOf(inputValue) > -1) {
      item[i].style.display = "";
      isNotFound = true;
    } else {
      item[i].style.display = "none";
    }
  }
  if (!isNotFound) {
    notFound.style.display = "block";
  } else {
    notFound.style.display = "none";
  }
}

export function sort(type) {
  let list,
    i,
    change,
    item,
    changeDirection,
    direction,
    switchCount = 0;
  list = document.getElementById("news-list-container");
  change = true;

  direction = "ascend";

  while (change) {
    change = false;
    item = list.getElementsByClassName("news-list-item");

    //ascending loop
    if (type === "ascending") {
      for (i = 0; i < item.length - 1; i++) {
        changeDirection = false;
        if (direction == "ascend") {
          if (
            item[i].innerHTML.toLowerCase() >
            item[i + 1].innerHTML.toLowerCase()
          ) {
            changeDirection = true;
            break;
          }
        }
      }
    }
    //descending loop
    if (type === "descending") {
      for (i = 0; i < item.length - 1; i++) {
        changeDirection = false;
        if (direction == "descend") {
          if (
            item[i].innerHTML.toLowerCase() <
            item[i + 1].innerHTML.toLowerCase()
          ) {
            changeDirection = true;
            break;
          }
        }
      }
    }

    //newList will be in grid ascending and descending since the css is in grid style
    //enables ascending and descending functionality
    if (changeDirection) {
      item[i].parentNode.insertBefore(item[i + 1], item[i]);
      change = true;
      switchCount++;
    } else {
      if (switchCount == 0 && direction == "ascend") {
        direction = "descend";
        change = true;
      }
    }
  }
}
