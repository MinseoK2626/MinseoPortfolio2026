import { useState, useEffect, useRef } from "react"

function About() {

  const [section, setSection] = useState("about")

  const aboutRef = useRef<HTMLDivElement>(null)
  const resumeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const handleScroll = () => {

      const resumeTop = resumeRef.current?.offsetTop || 0
      const scrollY = window.scrollY + window.innerHeight / 2

      if (scrollY >= resumeTop) {
        setSection("resume")
      } else {
        setSection("about")
      }

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (

    <div
      style={{
        background: "#020617",
        color: "white",
        fontFamily: "system-ui"
      }}
    >

      {/* TOP INDICATOR */}

      <div
        style={{
          position: "fixed",
          top: "30px",
          right: "80px",
          display: "flex",
          gap: "40px",
          fontWeight: "600",
          zIndex: 1000
        }}
      >

        <span>About</span>
        <span>Resume</span>

        <div
          style={{
            position: "absolute",
            bottom: "-10px",
            left: section === "about" ? "0px" : "90px",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#60a5fa",
            transition: "0.3s"
          }}
        />

      </div>



      {/* ABOUT SECTION */}

      <section
        ref={aboutRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 80px"
        }}
      >

        <div
          style={{
            display: "flex",
            maxWidth: "1100px",
            gap: "80px",
            alignItems: "center"
          }}
        >

          <img
            src="/headshot.jpg"
            alt="Minseo"
            style={{
              width: "320px",
              borderRadius: "20px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)"
            }}
          />

          <div>

            <h1
              style={{
                fontSize: "48px",
                marginBottom: "20px"
              }}
            >
              Hello! I'm Minseo Kim
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.7",
                color: "#cbd5f5",
                marginBottom: "20px"
              }}
            >
              I am a third-year student at the University of Virginia's 
              McIntire School of Commerce double majoring in Commerce 
              and Computer Science. I enjoy building at the intersection 
              of technology, finance, and strategy.
            </p>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.7",
                color: "#cbd5f5"
              }}
            >
              My interests include investment banking, venture investing, 
              and building technology-driven solutions that solve real-world 
              problems. Through both academic projects and extracurricular 
              leadership, I strive to combine analytical thinking with 
              creative problem solving.
            </p>

            <p
              style={{
                marginTop: "40px",
                opacity: 0.6
              }}
            >
              ↓ Scroll to view my resume
            </p>

          </div>

        </div>

      </section>



      {/* RESUME SECTION */}

      <section
        ref={resumeRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 80px"
        }}
      >

        <h1
          style={{
            fontSize: "48px",
            marginBottom: "40px"
          }}
        >
          Resume
        </h1>


        <a
          href="/MinseoKim_Resume.pdf"
          target="_blank"
        >

          <img
            src="/resume.png"
            alt="Resume"
            style={{
              width: "420px",
              borderRadius: "12px",
              boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
              transition: "0.3s",
              cursor: "pointer"
            }}

            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }

            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }

          />

        </a>

      </section>

    </div>
  )
}

export default About