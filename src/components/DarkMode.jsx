import "../style.css";
import { ChangeEventHandler } from "react";
import { HiMoon, HiOutlineSun } from "react-icons/hi";
import { IconContext } from "react-icons";

/* NEW (START) */
const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};
/* NEW (END) */

const DarkMode = () => {
  return (
    <div className="toggle-theme-wrapper">
      <IconContext.Provider value={{ color: "white" }}>
        <span>
          <HiOutlineSun />
        </span>
      </IconContext.Provider>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          // NEW
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className="slider round"></div>
      </label>
      <IconContext.Provider value={{ color: "#c770f0" }}>
        <span>
          <HiMoon />
        </span>
      </IconContext.Provider>
    </div>
  );
};

export default DarkMode;
