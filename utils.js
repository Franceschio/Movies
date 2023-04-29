//Dichiarazioni

const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);
const cE = (element) => document.createElement(element);
const app = (type, element) => type.append(element);
const popular = qS(".popular");
const topRated = qS(".top");
const on_the_air = qS(".on_the_air");
const firstLeft = qS("#firstLeft");
const firstRight = qS("#firstRight");
const secondLeft = qS("#secondLeft");
const secondRight = qS("#secondRight");
const thirdLeft = qS("#thirdLeft");
const thirdRight = qS("#thirdRight");
let gap = 40;
var scrollOnClick = screen.width - (400 + gap);
let scrollAmount = 0;

//Funzione per creare le card

const cardCreator = (section) => {
  const cardEl = cE("div");
  const showImgEl = cE("img");
  const info = cE("div");
  const title = cE("h2");
  const descrption = cE("p");
  const release = cE("h4");

  cardEl.setAttribute("id", section.id);
  cardEl.className = "show";
  info.className = "info";

  if (section.original_title) {
    title.textContent = section.original_title;
  } else {
    title.textContent = section.name;
  }

  if (section.overview.length > 270) {
    descrption.textContent = section.overview.slice(0, 270) + "...";
  } else {
    descrption.textContent = section.overview;
  }

  if (section.release_date) {
    release.textContent = "Release date: " + section.release_date;
  } else {
    release.textContent = "Release date: " + section.first_air_date;
  }

  if (section.poster_path) {
    showImgEl.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${section.poster_path}`
    );
  }

  showImgEl.setAttribute("alt", section.name);

  info.append(title, descrption, release);
  app(info, showImgEl);
  cardEl.appendChild(info);

  return cardEl;
};

//Funzione per aggiungere gli scroll

//responsive

const scrollBehavior = () => {
  firstLeft.addEventListener("click", () => {
    if (scrollAmount <= popular.scrollWidth + popular.clientWidth) {
      popular.scrollTo({
        left: (scrollAmount -= scrollOnClick),
        behavior: "smooth",
      });
    }
    if (scrollAmount < 0) {
      scrollAmount = popular.scrollWidth - popular.clientWidth;
      popular.scrollTo({
        left: (scrollAmount += scrollOnClick),
        behavior: "smooth",
      });
    }
  });

  firstRight.addEventListener("click", () => {
    if (scrollAmount >= popular.scrollWidth - popular.clientWidth) {
      scrollAmount = 0;
      popular.scrollTo({
        left: (scrollAmount -= scrollOnClick),
        behavior: "smooth",
      });
    }
    if (scrollAmount <= popular.scrollWidth - popular.clientWidth) {
      popular.scrollTo({
        left: (scrollAmount += scrollOnClick),
        behavior: "smooth",
      });
    }
  });

  secondLeft.addEventListener("click", () => {
    if (scrollAmount <= topRated.scrollWidth + topRated.clientWidth) {
      topRated.scrollTo({
        left: (scrollAmount -= scrollOnClick),
        behavior: "smooth",
      });
    }
    if (scrollAmount < 0) {
      scrollAmount = topRated.scrollWidth - topRated.clientWidth;
      topRated.scrollTo({
        left: (scrollAmount += scrollOnClick),
        behavior: "smooth",
      });
    }
  });

  secondRight.addEventListener("click", () => {
    if (scrollAmount >= topRated.scrollWidth - topRated.clientWidth) {
      scrollAmount = 0;
      topRated.scrollTo({
        left: (scrollAmount -= scrollOnClick),
        behavior: "smooth",
      });
    }
    if (scrollAmount <= topRated.scrollWidth - topRated.clientWidth) {
      topRated.scrollTo({
        left: (scrollAmount += scrollOnClick),
        behavior: "smooth",
      });
    }
  });

  thirdLeft.addEventListener("click", () => {
    if (scrollAmount <= on_the_air.scrollWidth + on_the_air.clientWidth) {
      on_the_air.scrollTo({
        left: (scrollAmount -= scrollOnClick),
        behavior: "smooth",
      });
    }
    if (scrollAmount < 0) {
      scrollAmount = on_the_air.scrollWidth - on_the_air.clientWidth;
      on_the_air.scrollTo({
        left: (scrollAmount += scrollOnClick),
        behavior: "smooth",
      });
    }
  });

  thirdRight.addEventListener("click", () => {
    if (scrollAmount >= on_the_air.scrollWidth - on_the_air.clientWidth) {
      scrollAmount = 0;
      on_the_air.scrollTo({
        left: (scrollAmount -= scrollOnClick),
        behavior: "smooth",
      });
    }
    if (scrollAmount <= on_the_air.scrollWidth - on_the_air.clientWidth) {
      on_the_air.scrollTo({
        left: (scrollAmount += scrollOnClick),
        behavior: "smooth",
      });
    }
  });
};

//non responsive

// const scrollBehavior = () => {
//   firstLeft.addEventListener("click", () => {
//     if (counter1 <= 0) {
//       counter1 = 2800;
//     } else {
//       counter1 = counter1 - 700;
//     }
//     popular.scroll({
//       left: counter1,
//       behavior: "smooth",
//     });
//   });

//   firstRight.addEventListener("click", () => {
//     if (counter1 >= 2800) {
//       counter1 = 0;
//     } else {
//       counter1 = counter1 + 700;
//     }
//     popular.scroll({
//       left: counter1,
//       behavior: "smooth",
//     });
//   });

//   secondLeft.addEventListener("click", () => {
//     if (counter2 <= 0) {
//       counter2 = 2800;
//     } else {
//       counter2 = counter2 - 700;
//     }
//     topRated.scroll({
//       left: counter2,
//       behavior: "smooth",
//     });
//   });

//   secondRight.addEventListener("click", () => {
//     if (counter2 >= 2800) {
//       counter2 = 0;
//     } else {
//       counter2 = counter2 + 700;
//     }
//     topRated.scroll({
//       left: counter2,
//       behavior: "smooth",
//     });
//   });

//   thirdLeft.addEventListener("click", () => {
//     if (counter3 <= 0) {
//       counter3 = 2800;
//     } else {
//       counter3 = counter3 - 700;
//     }
//     on_the_air.scroll({
//       left: counter3,
//       behavior: "smooth",
//     });
//   });

//   thirdRight.addEventListener("click", () => {
//     if (counter3 >= 2800) {
//       counter3 = 0;
//     } else {
//       counter3 = counter3 + 700;
//     }
//     on_the_air.scroll({
//       left: counter3,
//       behavior: "smooth",
//     });
//   });
// };

export {
  qS,
  qSA,
  cE,
  app,
  cardCreator,
  scrollBehavior,
  popular,
  topRated,
  on_the_air,
};
