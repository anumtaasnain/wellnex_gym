import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Activity, Apple, Brain } from "lucide-react";

export default function ComingNext() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="coming-next"
      className="position-relative text-white py-5 overflow-hidden"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(120deg, var(--theme-color), #0a0a0a, #1c1c1c)",
        backgroundSize: "400% 400%",
        animation: "gradientFlow 12s ease infinite",
        transition: "background 0.5s ease",
      }}
    >
      {/* === Background Overlay Glow === */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, var(--theme-glow), transparent 70%)",
          zIndex: 0,
          transition: "all 0.4s ease",
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* === Title === */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2
            className="fw-bold display-6 mb-3"
            style={{
              letterSpacing: "1px",
              textShadow: "0 0 25px var(--theme-glow)",
              transition: "color 0.4s ease",
            }}
          >
            What’s <em style={{ color: "var(--theme-color)" }}>Coming Next</em>
          </h2>
          <p
            className="text-light mx-auto"
            style={{ maxWidth: "720px", opacity: 0.9 }}
          >
            We’re building a unified <strong>Wellnex Platform</strong> that
            combines <strong>fitness</strong>, <strong>nutrition</strong>,{" "}
            <strong>mental health</strong>, and <strong>diagnostics</strong> into
            one intelligent system — your all-in-one{" "}
            <em>digital wellness command center</em>.
          </p>
        </div>

        {/* === Coming Features Cards === */}
        <div className="row g-4 text-center">
          {[
            {
              icon: <Activity size={45} color="var(--theme-color)" />,
              title: "Wearable Integration",
              desc: "Seamlessly connect smartwatches and bands to visualize your performance, heart rate, and progress live.",
            },
            {
              icon: <Apple size={45} color="var(--theme-color)" />,
              title: "Nutrition & Meal Planning",
              desc: "AI-based personalized meal plans and macro tracking designed for your unique fitness goals.",
            },
            {
              icon: <Brain size={45} color="var(--theme-color)" />,
              title: "Corporate Wellness Dashboards",
              desc: "Empower organizations with data-driven insights to enhance employee health and productivity.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="col-md-4 col-sm-12"
              data-aos="zoom-in"
              data-aos-delay={200 * (i + 1)}
            >
              <div
                className="p-4 rounded-4 h-100 shadow-lg"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(6px)",
                  transition: "all 0.4s ease",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255,255,255,0.15)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255,255,255,0.08)")
                }
              >
                <div className="mb-3">{feature.icon}</div>
                <h5 className="fw-bold mb-2">{feature.title}</h5>
                <p className="text-light small mb-0">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* === CTA Button === */}
        <div
          className="text-center mt-5"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <a
            href="#"
            className="btn fw-semibold px-5 py-3 rounded-pill"
            style={{
              background: "var(--theme-color)",
              color: "white",
              fontSize: "1rem",
              boxShadow: "0 0 25px var(--theme-glow)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = "0 0 45px var(--theme-glow)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "0 0 25px var(--theme-glow)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Get Early Access
          </a>
        </div>
      </div>

      {/* === Animated Gradient Keyframes === */}
      <style>
        {`
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @media (max-width: 768px) {
            h2.display-6 {
              font-size: 2rem !important;
            }
            .btn {
              font-size: 0.9rem !important;
              padding: 10px 30px !important;
            }
          }
        `}
      </style>
    </section>
  );
}
