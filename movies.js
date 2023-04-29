//Importazioni

import { GET } from "./api.js";
import {
  qS,
  qSA,
  cE,
  app,
  cardCreator,
  scrollBehavior,
  popular,
  topRated,
  on_the_air,
} from "./utils.js";

//Get con creazione card

Promise.all([
  GET(
    "https://api.themoviedb.org/3/",
    "movie/",
    "popular",
    "5d5c18c2620a364a4448d072d83da90f"
  ),
  GET(
    "https://api.themoviedb.org/3/",
    "movie/",
    "top_rated",
    "5d5c18c2620a364a4448d072d83da90f"
  ),
  GET(
    "https://api.themoviedb.org/3/",
    "movie/",
    "now_playing",
    "5d5c18c2620a364a4448d072d83da90f"
  ),
]).then((data) => {
  data[0].results.map((movie) => {
    app(popular, cardCreator(movie));
  });
  data[1].results.map((movie) => {
    app(topRated, cardCreator(movie));
  });
  data[2].results.map((movie) => {
    app(on_the_air, cardCreator(movie));
  });
});

//Abilitare gli scroll

scrollBehavior();
