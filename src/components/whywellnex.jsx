import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const whyWellnexFeatures = [
  {
    title: "Integrated Wellness",
    desc: "Physical, mental, and emotional health combined in one connected ecosystem.",
    icon: "assets/images/healthcare.png",
    gradient: "linear-gradient(135deg, var(--theme-color-light), #fecfef)",
  },
  {
    title: "AI-Driven Personalization",
    desc: "Smart recommendations tailored to your wellness goals using intelligent insights.",
    icon: "assets/images/ai-brain.png",
    gradient: "linear-gradient(135deg, var(--theme-color-light), #c2e9fb)",
  },
  {
    title: "Scalable for Providers",
    desc: "From boutique studios to global wellness chains — scalable and reliable.",
    icon: "assets/images/growth.png",
    gradient: "linear-gradient(135deg, var(--theme-color-light), #a6c1ee)",
  },
  {
    title: "Built for the Future",
    desc: "Modern, cloud-first infrastructure designed for privacy and innovation.",
    icon: "assets/images/cloud.png",
    gradient: "linear-gradient(135deg, var(--theme-color-light), #ffd1ff)",
  },
];

export default function WhyWellnex() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }, // mobile fix
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="why-wellnex"
      style={{
        background: "#ffffff",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orbital Glow Container */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "600px",
          height: "600px",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: `radial-gradient(circle, var(--theme-color-rgba-15) 0%, transparent 70%)`,
              transformOrigin: "center center",
              animation: `orbit ${20 + i * 5}s linear infinite`,
            }}
          ></div>
        ))}
      </div>

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Section Header */}
        <div
          className="text-center mb-5"
          data-aos="fade-up"
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            padding: "0 15px",
          }}
        >
          <h2
            style={{
              fontWeight: "700",
              fontSize: "2.6rem",
              color: "#1a1a1a",
              lineHeight: "1.2",
            }}
          >
            Why <span style={{ color: "var(--theme-color)" }}>Wellnex?</span>
          </h2>
          <p
            style={{
              color: "#555",
              marginTop: "15px",
              fontSize: "1.05rem",
              lineHeight: "1.7",
            }}
          >
            Explore what makes Wellnex the next generation of fitness, AI, and
            mental wellness integration.
          </p>
        </div>

        {/* Carousel Feature Cards */}
        <Slider {...settings}>
          {whyWellnexFeatures.map((feature, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "40px 28px",
                  textAlign: "center",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  transition: "all 0.35s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  margin: "0 10px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 40px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.06)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, var(--theme-color-rgba-25) 0%, rgba(255,255,255,0) 70%)",
                    animation: "floatGlow 4s ease-in-out infinite alternate",
                    zIndex: 0,
                  }}
                ></div>

                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    margin: "0 auto 25px auto",
                    borderRadius: "50%",
                    background: feature.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    boxShadow: "0 0 25px var(--theme-color-rgba-25)",
                    zIndex: 2,
                  }}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    style={{
                      width: "45px",
                      height: "45px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <h5
                  style={{
                    fontWeight: "700",
                    color: "var(--theme-color)",
                    marginBottom: "12px",
                    position: "relative",
                    zIndex: 2,
                    fontSize: "1.1rem",
                  }}
                >
                  {feature.title}
                </h5>
                <p
                  style={{
                    color: "#555",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    zIndex: 2,
                    position: "relative",
                    padding: "0 10px",
                  }}
                >
                  {feature.desc}
                </p>

                <div
                  style={{
                    width: "40px",
                    height: "3px",
                    background:
                      "linear-gradient(90deg, var(--theme-color), var(--theme-color-light))",
                    margin: "15px auto 0",
                    borderRadius: "10px",
                    transition: "width 0.4s ease",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style>
        {`
          @keyframes floatGlow {
            0% { transform: translateX(-50%) translateY(0); opacity: 0.8; }
            100% { transform: translateX(-50%) translateY(10px); opacity: 0.4; }
          }

          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(250px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(250px) rotate(-360deg); }
          }

          .slick-slider {
            width: 100%;
          }

          .slick-list {
            overflow: hidden;
          }

          .slick-track {
            display: flex !important;
          }

          .slick-slide {
            display: flex !important;
            justify-content: center;
            align-items: stretch;
            height: auto;
          }

          .slick-slide > div {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .slick-slide > div > div {
            width: 100%;
            margin: 0 10px;
          }

          .slick-dots li button:before {
            color: var(--theme-color);
          }

          @media (max-width: 768px) {
            #why-wellnex {
              padding: 60px 0;
            }
            h2 {
              font-size: 2rem !important;
            }
            p {
              font-size: 0.95rem !important;
            }
            .slick-slide > div > div {
              margin: 0 5px;
            }
          }

          @media (max-width: 480px) {
            h2 { font-size: 1.7rem !important; }
            p { font-size: 0.9rem !important; }
          }
        `}
      </style>
    </section>
  );
}
