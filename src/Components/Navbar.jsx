import { Link } from "react-router-dom";
import "../Routes/main.css";
import imgHeader from "./assets/images/DH.ico";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const changeTheme = (isDarkMode, setIsDarkMode) => {
  const newTheme = isDarkMode ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  document.body.classList.remove(isDarkMode ? "dark" : "light");
  document.body.classList.add(newTheme);
  setIsDarkMode(!isDarkMode);
};

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(savedTheme);
    setIsDarkMode(savedTheme === "dark");
  }, []);

  return (
    <header>
      <nav>
        <div>
          <Link to="/">
            <h1 style={{ display: "flex", alignItems: "center" }}>
              <img src={imgHeader} alt="logo-dh" />
              Doctor
            </h1>
          </Link>
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/favs">Favs</Link>
          </li>

        <button
          onClick={() => changeTheme(isDarkMode, setIsDarkMode)}
          className="theme-toggle-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          {isDarkMode ? (
            <Moon style={{ color: "white" }} />
          ) : (
            <Sun style={{ color: "black" }} />
          )}{" "}
        </button>
          </ul>
      </nav>
    </header>
  );
};

export default Navbar;
