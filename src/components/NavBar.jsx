import { Link } from "react-router-dom";
import "./NavBarStyle.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useLocalStorage from "use-local-storage";

const NavBar = () => {
  // ............Theme toggle Start .............

  const [theme, setTheme] = useLocalStorage("theme", "dark-theme");

  function toggleTheme() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // ............Theme toggle end .............

  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  const [color, setColor] = useState(false);

  function changeColor() {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  useEffect(() => {
    if (window.location.pathname != "/") {
      setColor(true);
    } else {
      setColor(false);
    }
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>

      <ul
        onClick={() => setClick(false)}
        className={click ? "nav-menu active" : "nav-menu"}
      >
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/project"> Project </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/contact"> Contact </Link>
        </li>

        <div onClick={() => toggleTheme()}>
          {theme === "dark-theme" ? (
            <i class="bx bx-moon toggle-icon"></i>
          ) : (
            <i class="bx bxs-moon toggle-icon"></i>
          )}
        </div>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
