const level = document.querySelector(".level");
const player = document.querySelector(".player");
const go = document.querySelector(".go__btn");
let step = 0;
const rating = document.querySelector(".rating");
const ratingTable = document.querySelector(".rating__table tbody");

const showRatingBtn = document.querySelector(".rating__btn");
const closeRatingBtn = document.querySelector(".close__btn");

const friendsList = document.querySelector(".friends__list");
const leftArrow = document.querySelector(".arrow__btn-left");
const rightArrow = document.querySelector(".arrow__btn-right");

const data = {
  rating: [
    {
      id: "123",
      name: "Владимир",
      lastName: "Ларионов",
      img: "./src/assets/male.png",
      points: "463",
    },
    {
      id: "9",
      name: "Владимир",
      lastName: "Сергеев",
      img: "./src/assets/male.png",
      points: "521",
    },
    {
      id: "231",
      name: "Вениамин",
      lastName: "Васильев",
      img: "./src/assets/male.png",
      points: "865",
    },
    {
      id: "321",
      name: "Мария",
      lastName: "Логинова",
      img: "./src/assets/female.png",
      points: "865",
    },
    {
      id: "492",
      name: "Борис",
      lastName: "Казанцев",
      img: "./src/assets/male.png",
      points: "784",
    },
    {
      id: "452",
      name: "Полина",
      lastName: "Калинина",
      img: "./src/assets/female.png",
      points: "225",
    },
    {
      id: "796",
      name: "Даниил",
      lastName: "Воробьёв",
      img: "./src/assets/male.png",
      points: "642",
    },
    {
      id: "4",
      name: "Эрик",
      lastName: "Аксёнов",
      img: "./src/assets/male.png",
      points: "150",
    },
    {
      id: "1155",
      name: "Иван",
      lastName: "Иванов",
      img: "./src/assets/male.png",
      points: "100",
    },
    {
      id: "12145",
      name: "Артем",
      lastName: "Алексеев",
      img: "./src/assets/male.png",
      points: "1000",
    },
  ],
  friends: [
    {
      id: "9",
      name: "Владимир",
      lastName: "Сергеев",
      img: "./src/assets/male.png",
    },
    {
      id: "4",
      name: "Эрик",
      lastName: "Аксёнов",
      img: "./src/assets/male.png",
    },
    {
      id: "15411",
      name: "Ирина",
      lastName: "Чеснокова",
      img: "./src/assets/female.png",
    },
    {
      id: "15564",
      name: "Дарина",
      lastName: "Боброва",
      img: "./src/assets/female.png",
    },
  ],
};

go.addEventListener("click", () => {
  if (step < 10) {
    step = step + 1;
    player.style.left = `${coords[step][0]}px`;
    player.style.bottom = `${coords[step][1]}px`;
  } else {
    step = 0;
    player.style.left = `435px`;
    player.style.bottom = `123px`;
  }
});

const coords = {
  1: [341, 152],
  2: [267, 110],
  3: [180, 92],
  4: [101, 119],
  5: [113, 183],
  6: [133, 238],
  7: [205, 276],
  8: [167, 347],
  9: [129, 400],
  10: [192, 431],
};

showRatingBtn.addEventListener("click", () => {
  rating.classList.toggle("show");
  level.classList.toggle("down");
});
closeRatingBtn.addEventListener("click", () => {
  rating.classList.toggle("show");
  level.classList.toggle("down");
});

// data

const fragment = document.createDocumentFragment();

data.rating.forEach((item) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${item.id}</td>
  <td><img src="${item.img}" alt=""> ${item.name} ${item.lastName}</td>
  <td>${item.points}</td>`;
  if (data.friends.find((el) => el.id == item.id)) {
    tr.classList.add("friend");
  }
  fragment.append(tr);
});
ratingTable.append(fragment);

// Friends Slider

let slideStep = 0;
let friendsListItems = friendsList.querySelectorAll("li");
let hiddenItemsNum = friendsListItems.length - 8;

leftArrow.addEventListener("click", () => {
  if (slideStep > 0) {
    slideStep = slideStep - 60;
    friendsList.style.left = `-${slideStep}px`;
    hiddenItemsNum = hiddenItemsNum + 1;
  }
});
rightArrow.addEventListener("click", () => {
  if (hiddenItemsNum > 0) {
    slideStep = slideStep + 60;
    friendsList.style.left = `-${slideStep}px`;
    hiddenItemsNum = hiddenItemsNum - 1;
  }
});
