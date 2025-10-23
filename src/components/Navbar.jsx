import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Palette } from "lucide-react"; // Palette icon

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "theme-red");

  const sections = [
    "home",
    "about",
    "apps",
    "why-wellnex",
    "coming-soon", // Ensure this section exists in your page
    "stay-connected",
  ];

  // === Apply theme on mount ===
  useEffect(() => {
    document.body.classList.remove(
      "theme-red",
      "theme-blue",
      "theme-green",
      "theme-orange",
      "theme-purple",
      "theme-pink"
    );
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // === Scroll spy & navbar background ===
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const scrollPos = window.scrollY + 100;

      for (let sec of sections) {
        const element = document.getElementById(sec);
        if (element) {
          if (
            scrollPos >= element.offsetTop &&
            scrollPos < element.offsetTop + element.offsetHeight
          ) {
            setActiveSection(sec);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === Smooth scroll for nav links ===
  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // === Theme change ===
  const handleThemeChange = (color) => {
    setTheme(color);
    setThemeMenuOpen(false);
  };

  return (
    <header
      className={`position-fixed top-0 w-100 py-4 ${
        scrolled ? "bg-dark shadow-lg" : "bg-transparent"
      }`}
      style={{
        zIndex: 1000,
        transition: "all 0.4s ease",
        backdropFilter: scrolled ? "blur(6px)" : "none",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="btn border-0 p-0 text-white fs-5 fw-bold text-decoration-none"
          style={{
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "1px",
            cursor: "pointer",
          }}
        >
          Wellnex{" "}
          <em
            style={{
              color: "var(--theme-color)",
              fontStyle: "normal",
              textShadow: "0 0 6px rgba(255,90,95,0.7)",
            }}
          >
            Systems
          </em>
        </button>

        {/* Hamburger for mobile */}
        <button
          className="navbar-toggler d-md-none border-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2.5px",
              backgroundColor: "#fff",
              margin: "4px 0",
              borderRadius: "2px",
            }}
          ></span>
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2.5px",
              backgroundColor: "#fff",
              margin: "4px 0",
              borderRadius: "2px",
            }}
          ></span>
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2.5px",
              backgroundColor: "#fff",
              margin: "4px 0",
              borderRadius: "2px",
            }}
          ></span>
        </button>

        {/* Nav Links */}
        <ul
          className={`nav align-items-center mb-0 ${
            menuOpen
              ? "flex-column position-absolute top-100 start-0 w-100 bg-dark py-3"
              : "d-none d-md-flex gap-3"
          }`}
          style={{
            transition: "all 0.4s ease",
            textAlign: menuOpen ? "center" : "left",
          }}
        >
          {sections.map((item) => (
            <li key={item} className="nav-item my-1 my-md-0">
              <button
                onClick={() => handleNavClick(item)}
                className={`btn bg-transparent border-0 text-uppercase fw-medium position-relative ${
                  activeSection === item ? "text-theme" : "text-white"
                }`}
                style={{
                  fontSize: "0.85rem",
                  letterSpacing: "0.5px",
                  transition: "color 0.3s ease, transform 0.3s ease",
                }}
              >
                {item.replace(/\b\w/g, (c) => c.toUpperCase())}
                <span
                  className="position-absolute start-0 bottom-0 w-100"
                  style={{
                    height: "2px",
                    backgroundColor:
                      activeSection === item ? "var(--theme-color)" : "transparent",
                    transition: "all 0.3s ease",
                    transform: activeSection === item ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                  }}
                ></span>
              </button>
            </li>
          ))}

          {/* Sign Up (Mobile) */}
          <li className="nav-item d-md-none mt-2">
            <button className="btn btn-theme rounded-pill px-4 fw-semibold shadow-sm">
              Sign Up
            </button>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="d-flex align-items-center gap-3">
          {/* Theme Switcher */}
          <div
            className={`theme-toggle position-relative ${themeMenuOpen ? "open" : ""}`}
          >
            <Palette
              color="var(--theme-color)"
              size={22}
              style={{ cursor: "pointer" }}
              onClick={() => setThemeMenuOpen(!themeMenuOpen)}
            />

            <div className="theme-options">
              <div
                className="theme-color-circle theme-red-circle"
                onClick={() => handleThemeChange("theme-red")}
              ></div>
              <div
                className="theme-color-circle theme-blue-circle"
                onClick={() => handleThemeChange("theme-blue")}
              ></div>
              <div
                className="theme-color-circle theme-green-circle"
                onClick={() => handleThemeChange("theme-green")}
              ></div>
              <div
                className="theme-color-circle theme-orange-circle"
                onClick={() => handleThemeChange("theme-orange")}
              ></div>
              <div
                className="theme-color-circle theme-purple-circle"
                onClick={() => handleThemeChange("theme-purple")}
              ></div>
              <div
                className="theme-color-circle theme-pink-circle"
                onClick={() => handleThemeChange("theme-pink")}
              ></div>
            </div>
          </div>

          {/* Sign Up (Desktop) */}
          <button
            className="btn btn-theme btn-sm rounded-pill px-4 fw-semibold shadow-sm d-none d-md-block"
            style={{
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 0 10px var(--theme-color)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
