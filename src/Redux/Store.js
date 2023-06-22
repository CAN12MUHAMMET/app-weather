import { configureStore } from "@reduxjs/toolkit";
import WeatherSlice from "../Redux/WeatherSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    content: WeatherSlice,
  },
  middleware: [thunk],
});

export const application = {
  key: "efa21ac35689d1806c6537fdd796aaa7"
}
