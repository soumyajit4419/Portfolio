import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import config from "./config/config.json";
import "./easteregg";
import Analytics from "analytics";

import { AnalyticsProvider, AnalyticsConsumer } from "use-analytics";
// require('dotenv').config()
const querys = new URLSearchParams(window.location.search);

const analytics = Analytics({
  app: "personal-site",
  plugins: [
    {
      /* All plugins require a name */
      name: "my-example",
      /* Everything else below this is optional depending on your plugin requirements */
      // config: {},
      initialize: ({ config }) => {
        // console.log("CALLED INIT")
        // load provider script to page
      },
      page: ({ payload }) => {
        // console.log("CALLED")
        // call provider specific page tracking
      },
      track: ({ payload }) => {
        // console.log("CALLED")
        // call provider specific event tracking
      },
      identify: async ({ payload }) => {
        // call provider specific user identify method
        // console.log("identify#(payload)", payload)
        fetch(
          `${
            process.env.REACT_APP_PRODUCTION_ANALYTICS_URL &&
            process.env.NODE_ENV === "production"
              ? process.env.REACT_APP_PRODUCTION_ANALYTICS_URL
              : "http://localhost:8080/"
          }ana`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: process.env.REACT_APP_PASSWORD,
            },
            method: "POST",
            body: JSON.stringify({
              url: window.location.href,
              data: payload.traits,
              ref: querys.get("ref") || "No Ref",
              AnonId: payload.anonymousId,
              id: payload.userId,
              ip_info: await fetch(
                "https://ipinfo.io/json?token=" +
                  process.env.REACT_APP_IPINFO_TOKEN
              ).then((res) => res.json()),
              type: payload.options?.type || payload.type,
            }),
            mode: "cors",
          }
        );
      },
      // loaded: () => {
      //   // console.log("CALLED LOADED")

      //   // return boolean so analytics knows when it can send data to third party
      //   return !!window.myPluginLoaded
      // }
    },
  ],
});

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
analytics.identify("open-page");
ReactDOM.render(
  <React.StrictMode>
    <AnalyticsProvider instance={analytics}>
      <App />
    </AnalyticsProvider>
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
