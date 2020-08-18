import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as actions from "./actions/postActions";

const initialData = {
  data: [],
  loading: false,
  hasErrors: false,
  stateName: [
    "Alabama",
    "Alaska",
    "Arizona",
    null,
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Florida",
    "FL San",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ],
  breweryType: [
    "planning",
    "micro",
    "brewpub",
    "contract",
    "regional",
    "large",
    "proprietor",
    "closed",
    "bar",
  ],
};
const reducer = (state = initialData, action) => {
  switch (action.type) {
    case "success":
      return { ...state, data: action.payload };

    case actions.GET_POSTS:
      return { ...state, loading: true };

    case actions.GET_POSTS_SUCCESS:
      console.log(action.payload);
      return {...state, data: action.payload, loading: false, hasErrors: false };

    case actions.GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };

    default:
      return state;
  }
};
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
