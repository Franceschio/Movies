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
  watchlist,
  toWatch,
} from "./utils.js";

//Get con creazione card

Promise.all([
  GET(
    "https://api.themoviedb.org/3/",
    "tv/",
    "popular",
    "5d5c18c2620a364a4448d072d83da90f"
  ),
  GET(
    "https://api.themoviedb.org/3/",
    "tv/",
    "top_rated",
    "5d5c18c2620a364a4448d072d83da90f"
  ),
  GET(
    "https://api.themoviedb.org/3/",
    "tv/",
    "on_the_air",
    "5d5c18c2620a364a4448d072d83da90f"
  ),
]).then((data) => {
  data[0].results.map((tv) => {
    app(popular, cardCreator(tv));
  });
  data[1].results.map((tv) => {
    app(topRated, cardCreator(tv));
  });
  data[2].results.map((tv) => {
    app(on_the_air, cardCreator(tv));
  });
});

//Abilitare gli scroll

scrollBehavior();
