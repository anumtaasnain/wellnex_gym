import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const flagshipApps = [
  {
    name: "SoulWhispers",
    tagline: "Your Pocket-Sized Wellness Companion",
    description:
      "SoulWhispers is a mindfulness and emotional wellness app designed to help users reconnect with their inner calm. Through guided meditations, reflective journaling, and AI-powered mood tracking, it nurtures mental clarity and emotional resilience in a fast-paced world.",
    features: [
      "Telehealth and diagnostics",
      "Mood journaling with AI insights",
      "Personalized providers",
      "Seamless booking & check-in for consultation sessions",
    ],
    buttonText: "Download SoulWhispers",
    icon: "assets/images/soulwhisper.png",
    gradient: "linear-gradient(135deg, #f7f2f2, #fff)",
  },
  {
    name: "GymKey",
    tagline: "Smart Access to Fitness, Anytime",
    description:
      "GymKey is your digital passport to fitness freedom. Whether you're a gym owner or a fitness enthusiast, GymKey connects users with partner gyms, tracks workouts, and simplifies access—all from a single app.",
    features: [
      "Seamless check-in at partner gyms",
      "Workout tracking and performance analytics",
      "Membership management for gym owners",
      "Realtime class schedules and bookings",
    ],
    buttonText: "Explore GymKey",
    icon: "assets/images/gymkey.png",
    gradient: "linear-gradient(135deg, #f5f2f2, #fafafa)",
  },
];

export default function FlagshipApps() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // 🌈 Get current theme color
  const themeColor =
    getComputedStyle(document.documentElement)
      .getPropertyValue("--theme-color")
      .trim() || "#dc3545";

  return (
    <section
      id="apps"
      className="py-5 position-relative"
      style={{ background: "#fff5f5" }}
    >
      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* === Heading === */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold display-6">
            Our Flag
            <em className="theme-text" style={{ color: "var(--theme-color)" }}>
              ship Apps
            </em>
          </h2>
          <p
            className="text-muted w-75 mx-auto mt-3"
            style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            Designed to empower wellness, fitness, and mindfulness, our apps
            combine cutting-edge technology with human-centered design to
            deliver transformative experiences.
          </p>
        </div>

        {/* === App Cards === */}
        <div className="row g-4 justify-content-center">
          {flagshipApps.map((app, i) => (
            <div
              key={i}
              className="col-md-6"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div
                className="p-5 rounded-4 h-100 app-card text-center position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #ffffff, #fffafa)",
                  boxShadow: `0 15px 35px ${themeColor}20`,
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  border: `1px solid ${themeColor}25`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px)";
                  e.currentTarget.style.boxShadow = `0 35px 60px ${themeColor}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 15px 35px ${themeColor}20`;
                }}
              >
                {/* === Floating Icon === */}
                <div
                  style={{
                    width: "105px",
                    height: "100px",
                    borderRadius: "50%",
                    background: app.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 25px auto",
                    boxShadow: `0 0 35px ${themeColor}40`,
                    overflow: "hidden",
                    animation: "glowPulse 2.5s infinite alternate",
                  }}
                >
                  <img
                    src={app.icon}
                    alt={app.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                {/* === App Info === */}
                <h5
                  className="fw-bold mb-2"
                  style={{ color: "var(--theme-color)" }}
                >
                  {app.name}
                </h5>
                <p
                  className="text-secondary mb-2"
                  style={{ fontWeight: "500" }}
                >
                  {app.tagline}
                </p>
                <p
                  className="text-muted"
                  style={{ fontSize: "0.95rem", lineHeight: 1.6 }}
                >
                  {app.description}
                </p>

                {/* === Features === */}
                <ul
                  className="text-muted text-start mb-4"
                  style={{ paddingLeft: "20px" }}
                >
                  {app.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        marginBottom: "6px",
                        position: "relative",
                        paddingLeft: "20px",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          top: "0",
                          color: "var(--theme-color)",
                          fontWeight: "700",
                        }}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* === Action Button === */}
                <a
                  href={app.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn px-5 py-2 rounded-pill fw-semibold"
                  style={{
                    background: "var(--theme-color)",
                    color: "#fff",
                    transition: "all 0.3s ease",
                    boxShadow: `0 0 20px ${themeColor}40`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 8px 25px ${themeColor}60`;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 20px ${themeColor}40`;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {app.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Glow Animation === */}
      <style>
        {`
          @keyframes glowPulse {
            0% { box-shadow: 0 0 15px var(--theme-color); }
            50% { box-shadow: 0 0 25px var(--theme-color); }
            100% { box-shadow: 0 0 15px var(--theme-color); }
          }
        `}
      </style>
    </section>
  );
}
