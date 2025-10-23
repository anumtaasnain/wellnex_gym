import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Ayesha R.",
    role: "Karachi",
    text: "SoulWhispers helped me find calm in chaos. It’s like therapy in my pocket.",
    rating: 5,
    img: "assets/images/1.jpg",
  },
  {
    name: "Imran M.",
    role: "Gym Owner, Lahore",
    text: "GymKey has transformed how I manage my gym. My members love the convenience.",
    rating: 5,
    img: "assets/images/2.jpg",
  },
  {
    name: "Zainab K.",
    role: "Wellness Coach, Islamabad",
    text: "Wellnex connects everything I need — workouts, nutrition, and mindset, all in one platform.",
    rating: 4,
    img: "assets/images/3.jpg",
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="testimonials"
      className="py-5 position-relative"
      style={{
        background: "#fff",
        overflow: "hidden",
        transition: "all 0.4s ease",
      }}
    >
      {/* Floating particles */}
      <div className="floating-particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {/* Themed soft glow overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(circle at top right, var(--theme-color)10, transparent 70%), 
            radial-gradient(circle at bottom left, var(--theme-color)05, transparent 70%)
          `.replace(/10/g, "1a").replace(/05/g, "0d"), // Slight transparency
          zIndex: 0,
          pointerEvents: "none",
          transition: "background 0.5s ease",
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2
            className="fw-bold display-6"
            style={{
              color: "#111",
              fontSize: "2.8rem",
              transition: "color 0.4s ease",
            }}
          >
            What Our{" "}
            <em
              style={{
                color: "var(--theme-color)",
                transition: "color 0.4s ease",
              }}
            >
              Members Say
            </em>
          </h2>
          <p
            className="text-muted w-75 mx-auto"
            style={{ fontSize: "1.05rem" }}
          >
            Every transformation has a story. Here’s what our community says
            about their wellness journey with Wellnex.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div
                className="p-4 rounded-4 text-center testimonial-card"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow:
                    "0 10px 25px rgba(0,0,0,0.05), 0 5px 15px rgba(0,0,0,0.05)",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px var(--theme-color)40";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.05)";
                }}
              >
                {/* User Image */}
                <div
                  className="mx-auto mb-3"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid var(--theme-color)",
                    boxShadow: "0 0 20px var(--theme-color)40",
                    transition: "all 0.4s ease",
                  }}
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Testimonial Text */}
                <p
                  className="text-muted mb-3"
                  style={{
                    fontStyle: "italic",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                  }}
                >
                  “{t.text}”
                </p>

                {/* Ratings */}
                <div className="mb-2">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <i
                      key={s}
                      className={`fa ${s < t.rating ? "fa-star" : "fa-star-o"}`}
                      style={{
                        color:
                          s < t.rating
                            ? "var(--theme-color)"
                            : "rgba(0,0,0,0.2)",
                        fontSize: "1.1rem",
                        margin: "0 2px",
                        transition: "color 0.3s ease",
                      }}
                    ></i>
                  ))}
                </div>

                {/* Name & Role */}
                <h5
                  className="fw-bold"
                  style={{
                    color: "#111",
                    transition: "color 0.4s ease",
                  }}
                >
                  {t.name}
                </h5>
                <p
                  className="text-secondary mb-0"
                  style={{ fontSize: "0.95rem" }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating particles animation */}
      <style>
        {`
          .floating-particles {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            z-index: 0; pointer-events: none;
            overflow: hidden;
          }

          .particle {
            position: absolute;
            background: var(--theme-color);
            opacity: 0.15;
            border-radius: 50%;
            animation: float 10s linear infinite;
            transition: background 0.5s ease;
          }

          ${Array.from({ length: 15 })
            .map(
              (_, i) => `.particle:nth-child(${i + 1}) {
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                width: ${5 + Math.random() * 8}px;
                height: ${5 + Math.random() * 8}px;
                animation-duration: ${5 + Math.random() * 5}s;
              }`
            )
            .join("\n")}

          @keyframes float {
            0% { transform: translateY(0); opacity: 0.6; }
            50% { transform: translateY(-40px); opacity: 0.3; }
            100% { transform: translateY(0); opacity: 0.6; }
          }
        `}
      </style>
    </section>
  );
}
