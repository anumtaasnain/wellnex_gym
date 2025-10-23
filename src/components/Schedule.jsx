import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Schedule() {
  const [filter, setFilter] = useState("All");

  const schedule = [
    {
      class: "Strength & Conditioning",
      day: "Monday",
      time: "10:00AM - 11:30AM",
      trainer: "William",
      type: "Morning",
      icon: "/assets/images/strength-icon.png",
    },
    {
      class: "Cardio & Endurance",
      day: "Tuesday",
      time: "5:00PM - 6:30PM",
      trainer: "Emma",
      type: "Evening",
      icon: "/assets/images/cardio-icon.png",
    },
    {
      class: "Yoga & Flexibility",
      day: "Wednesday",
      time: "8:00AM - 9:00AM",
      trainer: "Sophia",
      type: "Morning",
      icon: "/assets/images/yoga-icon.png",
    },
    {
      class: "CrossFit Challenge",
      day: "Thursday",
      time: "6:00PM - 7:30PM",
      trainer: "James",
      type: "Evening",
      icon: "/assets/images/crossfit-icon.png",
    },
    {
      class: "Muscle Training",
      day: "Friday",
      time: "2:00PM - 3:30PM",
      trainer: "Paul",
      type: "Afternoon",
      icon: "/assets/images/muscle-icon.png",
    },
  ];

  const filters = ["All", "Morning", "Afternoon", "Evening"];

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  const filteredSchedule =
    filter === "All" ? schedule : schedule.filter((s) => s.type === filter);

  return (
    <section
      id="schedule"
      className="py-5 position-relative overflow-hidden"
      style={{
        position: "relative",
        zIndex: 1,
        transition: "background 0.8s ease",
      }}
    >
      {/* Animated Gradient Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(120deg, var(--theme-color), #000)",
          opacity: 0.15,
          animation: "gradientMove 6s ease-in-out infinite alternate",
          zIndex: -2,
        }}
      ></div>

      {/* Floating glow effects */}
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "var(--theme-color)",
          filter: "blur(180px)",
          opacity: 0.2,
          top: "-100px",
          left: "-80px",
          animation: "floatBlob 10s ease-in-out infinite alternate",
          zIndex: -3,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "var(--theme-color)",
          filter: "blur(150px)",
          opacity: 0.15,
          bottom: "-100px",
          right: "-80px",
          animation: "floatBlob 12s ease-in-out infinite alternate-reverse",
          zIndex: -3,
        }}
      ></div>

      <div className="container">
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold display-6" style={{ color: "var(--text-color)" }}>
            Class{" "}
            <em
              style={{
                color: "var(--theme-color)",
                transition: "color 0.4s ease",
              }}
            >
              Schedule
            </em>
          </h2>
          <p className="text-secondary w-75 mx-auto">
            Plan your wellness journey with our interactive timetable. From
            strength to mindfulness — find your ideal session.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className="d-flex justify-content-center gap-3 flex-wrap mb-5"
          data-aos="zoom-in"
        >
          {filters.map((tab) => (
            <button
              key={tab}
              className={`btn fw-semibold rounded-pill px-4 py-2 ${
                filter === tab ? "text-white" : ""
              }`}
              style={{
                borderColor: "var(--theme-color)",
                color: filter === tab ? "#fff" : "var(--theme-color)",
                background:
                  filter === tab ? "var(--theme-color)" : "transparent",
                boxShadow:
                  filter === tab
                    ? "0 8px 20px rgba(0,0,0,0.2)"
                    : "0 0 0 rgba(0,0,0,0)",
                transform: filter === tab ? "scale(1.08)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
              onClick={() => setFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Schedule Cards */}
        <div className="row g-4 justify-content-center">
          {filteredSchedule.map((s, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div
                className="p-4 text-center rounded-4 h-100"
                style={{
                  background: "var(--card-bg, rgba(255,255,255,0.96))",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow:
                    "0 8px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.05)",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  className="d-flex justify-content-center align-items-center mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, var(--theme-color), rgba(255,255,255,0.2))",
                    boxShadow: "0 0 25px var(--theme-color)",
                    margin: "0 auto",
                    transition: "all 0.4s ease",
                  }}
                >
                  <img
                    src={s.icon}
                    alt={s.class}
                    width="42"
                    height="42"
                    style={{
                      filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.25))",
                    }}
                  />
                </div>

                <h5
                  className="fw-bold mb-2"
                  style={{
                    color: "var(--theme-color)",
                    transition: "color 0.4s ease",
                  }}
                >
                  {s.class}
                </h5>
                <p className="text-secondary mb-1">
                  <strong>Day:</strong> {s.day}
                </p>
                <p className="text-secondary mb-1">
                  <strong>Time:</strong> {s.time}
                </p>
                <p className="fw-semibold mb-0">
                  <span style={{ color: "var(--theme-color)" }}>Trainer:</span>{" "}
                  {s.trainer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-5" data-aos="zoom-in">
          <a
            href="#contact"
            className="btn px-5 py-2 rounded-pill fw-semibold text-white"
            style={{
              background: "var(--theme-color)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
              transition: "all 0.3s ease",
            }}
          >
            Join a Class
          </a>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes floatBlob {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-30px) scale(1.1); }
        }
      `}</style>
    </section>
  );
}
