import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Classes() {
  const [activeTab, setActiveTab] = useState(0);

  const classes = [
    {
      title: "Strength & Conditioning",
      img: "assets/images/training-image-01.jpg",
      icon: "assets/images/strength-icon.png",
      desc: "Build endurance, power, and balance with expert-guided strength training that improves your overall fitness performance.",
    },
    {
      title: "Cardio & Endurance",
      img: "assets/images/training-image-03.jpg",
      icon: "assets/images/cardio-icon.png",
      desc: "Boost stamina and heart health through intensive cardio workouts designed to energize your body and mind.",
    },
    {
      title: "Yoga & Flexibility",
      img: "assets/images/training-image-02.jpg",
      icon: "assets/images/yoga-icon.png",
      desc: "Enhance your flexibility and mindfulness through calming yoga sessions guided by experienced instructors.",
    },
    {
      title: "CrossFit Challenge",
      img: "assets/images/training-image-04.jpg",
      icon: "assets/images/crossfit-icon.png",
      desc: "Experience the ultimate full-body challenge with CrossFit-inspired workouts that push your limits safely and effectively.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      id="classes"
      className="py-5 position-relative"
      style={{
        background: "#fdfdfd",
        overflow: "hidden",
      }}
    >
      {/* Soft gradient background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at top left, rgba(220,53,69,0.05), transparent 70%), radial-gradient(circle at bottom right, rgba(220,53,69,0.04), transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* === Section Header === */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">
            Our <em style={{ color: "var(--theme-color)" }}>Classes</em>
          </h2>
          <p
            className="text-muted w-75 mx-auto"
            style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            Train smarter with our diverse range of professional fitness
            programs designed to fit your goals and lifestyle.
          </p>
        </div>

        {/* === Tabs and Content === */}
        <div className="row align-items-stretch g-4">
          {/* === Tabs Section === */}
          <div className="col-lg-4" data-aos="fade-right">
            <ul className="list-group shadow-lg rounded-4 overflow-hidden">
              {classes.map((c, index) => (
                <li
                  key={index}
                  className={`list-group-item d-flex align-items-center justify-content-start py-4 px-3 ${
                    activeTab === index ? "text-white active-tab" : "bg-white"
                  }`}
                  style={{
                    cursor: "pointer",
                    border: "none",
                    transition: "all 0.4s ease",
                    background:
                      activeTab === index
                        ? "var(--theme-color)"
                        : "linear-gradient(145deg, #fff, #f7f7f7)",
                    boxShadow:
                      activeTab === index
                        ? "0 8px 25px rgba(0,0,0,0.15)"
                        : "0 5px 15px rgba(0,0,0,0.05)",
                    transform: activeTab === index ? "scale(1.02)" : "scale(1)",
                  }}
                  onClick={() => setActiveTab(index)}
                >
                  <div
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor:
                        activeTab === index
                          ? "rgba(255,255,255,0.25)"
                          : "rgba(0,0,0,0.05)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <img
                      src={c.icon}
                      alt={c.title}
                      width="28"
                      height="28"
                      style={{
                        filter:
                          activeTab === index
                            ? "brightness(250%) drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                            : "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
                        transition: "filter 0.3s ease",
                      }}
                    />
                  </div>
                  <span
                    className="fw-semibold fs-6"
                    style={{
                      color: activeTab === index ? "#fff" : "#333",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {c.title}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="text-center mt-4" data-aos="zoom-in">
              <a
                href="#schedule"
                className="btn rounded-pill px-4 py-3 fw-semibold"
                style={{
                  border: "2px solid var(--theme-color)",
                  color: "var(--theme-color)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "var(--theme-color)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.boxShadow =
                    "0 5px 20px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--theme-color)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                View All Schedules
              </a>
            </div>
          </div>

          {/* === Active Class Content === */}
          <div className="col-lg-8" data-aos="fade-left">
            <div
              className="card shadow-lg border-0 rounded-4 h-100 overflow-hidden"
              style={{ transition: "all 0.4s ease" }}
            >
              <img
                src={classes[activeTab].img}
                alt={classes[activeTab].title}
                className="card-img-top"
                style={{
                  height: "320px",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <div className="card-body text-start p-4">
                <h4
                  className="fw-bold mb-3"
                  style={{ color: "var(--theme-color)" }}
                >
                  {classes[activeTab].title}
                </h4>
                <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
                  {classes[activeTab].desc}
                </p>
                <a
                  href="#schedule"
                  className="btn rounded-pill px-4 py-2 fw-semibold"
                  style={{
                    background: "var(--theme-color)",
                    color: "#fff",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 5px 20px rgba(0,0,0,0.2)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.boxShadow = "none")
                  }
                >
                  View Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover animation for active tab */}
      <style>
        {`
          .active-tab {
            background: var(--theme-color) !important;
          }
          .btn-theme-outline:hover {
            background: var(--theme-color);
            color: #fff;
            box-shadow: 0 5px 20px rgba(0,0,0,0.15);
          }
        `}
      </style>
    </section>
  );
}
