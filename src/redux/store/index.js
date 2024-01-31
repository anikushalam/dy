import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { aboutApi } from "../../services/About/AboutApi";
import { careerApi } from "../../services/career/careerApi";
import { alumniApi } from "../../services/alumni/alumniApi";
import { eventApi } from "../../services/event/eventApi";
import { hostelApi } from "../../services/hostel/hostelApi";
import { transportApi } from "../../services/transport/transportApi";
import { sportsAndArtsApi } from "../../services/sports_and_arts/sportsAndArtsApi";
import alumniChangeReducer from "./alumni-slice";
import domainComReducer from "./domain-slice-com";
export const store = configureStore({
  reducer: {
    [aboutApi.reducerPath]: aboutApi.reducer,
    [sportsAndArtsApi.reducerPath]: sportsAndArtsApi.reducer,
    [careerApi.reducerPath]: careerApi.reducer,
    [alumniApi.reducerPath]: alumniApi.reducer,
    [eventApi.reducerPath]: eventApi.reducer,
    [hostelApi.reducerPath]: hostelApi.reducer,
    [transportApi.reducerPath]: transportApi.reducer,
    alumniChange: alumniChangeReducer,
    domainCom: domainComReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      aboutApi.middleware,
      careerApi.middleware,
      alumniApi.middleware,
      eventApi.middleware,
      sportsAndArtsApi.middleware,
      hostelApi.middleware,
      transportApi.middleware
    ),
});

setupListeners(store.dispatch);
