let list = [
  {
    img: "blue_p.png",
    gender: "man",
    size: "smail size",
    color: "blue",
    type: "pants",
  },
  {
    img: "blue_s.png",
    gender: "feman",
    size: "large size",
    color: "blue",
    type: "skirt",
  },
  {
    img: "blue_t.png",
    gender: "man",
    size: "smail size",
    color: "blue",
    type: "tShirt",
  },
  {
    img: "pink_p.png",
    gender: "man",
    size: "large size",
    color: "pink",
    type: "pants",
  },
  {
    img: "pink_s.png",
    gender: "man",
    size: "smail size",
    color: "pink",
    type: "skirt",
  },
  {
    img: "pink_t.png",
    gender: "feman",
    size: "smail size",
    color: "pink",
    type: "tShirt",
  },
  {
    img: "yellow_p.png",
    gender: "feman",
    size: "smail size",
    color: "yellow",
    type: "pants",
  },
  {
    img: "yellow_s.png",
    gender: "man",
    size: "large size",
    color: "yellow",
    type: "skirt",
  },
  {
    img: "yellow_t.png",
    gender: "man",
    size: "smail size",
    color: "yellow",
    type: "tShirt",
  },
];

const gnb = document.querySelector(".gnb");
const clothesList = document.querySelector(".list");

const HIDDEN_CLASS = "hidden";

listPainting();

function listPainting(value) {
  const ul = document.createElement("ul");
  list.forEach(function (value) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const span = document.createElement("span");
    clothesList.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(img);
    li.appendChild(span);
    img.src = `../img/${value.img}`;
    span.innerHTML = `${value.gender} ${value.size}`;
  });
}

const tShirt = document.querySelector(".t-shirt");
const pants = document.querySelector(".pants");
const skirt = document.querySelector(".skirt");
const blue = document.querySelector("blue");
const yellow = document.querySelector(".yellow");
const pink = document.querySelector(".pink");

function choicePainting(event) {
  console.dir(event.target);
  const choiceList = list.filter((choice) => choice.type === "tShirt");
  console.log(choiceList);
  // const clothesListUl = document.querySelector(".list ul");
  // clothesListUl.remove();
  // listPainting();
}

gnb.addEventListener("click", choicePainting);
