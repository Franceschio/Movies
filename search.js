import { qS, qSA, cE, app, cardCreator } from "./utils.js";

const GET = async (baseURL, genre, resource, APIkey, query) => {
  const res = await fetch(
    baseURL + genre + resource + "?api_key=" + APIkey + "&query=" + query
  );
  const data = res.json();
  return data;
};

function searchShow() {
  main.style.opacity = "1";
  GET(
    "https://api.themoviedb.org/3/",
    "search/",
    "multi",
    "5d5c18c2620a364a4448d072d83da90f",
    search.value
  ).then((data) => {
    data.results.map((tv) => {
      app(searchs, cardCreator(tv));
    });
  });
}

function removeCard() {
  const shows = qSA(".show");
  shows.forEach((show) => show.remove());
}

const main = qS("main");
const searchBtn = qS("#searchBtn");
const search = qS("#search");
const searchs = qS(".searchs");
const barraRicerca = qS(".barraRicerca");

barraRicerca.addEventListener("click", (e) => {
  e.preventDefault();
  removeCard();
  searchShow();
});
