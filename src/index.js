import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import config from "./config/config.json";
import "./easteregg";
document.title = config.title;
(() => {
  const isDev = process.env.NODE_ENV !== "production";
  console.log(
    `%c What's up?`,
    `font-size: 120px;
    font-family: "Poppins", sans-serif;
    background-size: 1000% 1000%;
    animation: gradient 1s ease infinite;
    `
  );
  console.log(
    `%c Thanks for visting this site you can dontate me at https://ko-fi.com/saahil\n Try to find the easter egg in this site🥚\n HINT: to use it you must use the console it is a very VERY hard one`,
    `font-size: 15px;`
  );
  if (isDev)
    console.debug(
      "This message will show during production build. & development build"
    );
})();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(
  process.env.NODE_ENV === "production"
    ? () => {
        // kill log event
        // no logs on production
      }
    : (l) => {
        const breaker = new Array(40).join("=");
        console.debug(breaker);
        console.debug("VITALS", l);
        console.debug(breaker);
      }
);
