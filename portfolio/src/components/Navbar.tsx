import { useState, useEffect } from "react"

function Navbar() {

  const [section, setSection] = useState("about")

  useEffect(() => {

    const handleScroll = () => {

      const scrollY = window.scrollY

      if (scrollY < window.innerHeight * 0.7) {
        setSection("about")
      } else {
        setSection("resume")
      }

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (

    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "60px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        color: "white",
        fontSize: "24px",
        fontWeight: "600",
      }}
    >

      <span>About</span>
      <span>Resume</span>

      {/* indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "-14px",
          left: section === "about" ? "28px" : "120px",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#3b82f6",
          boxShadow: "0 0 10px #3b82f6, 0 0 20px #60a5fa",
          transition: "all 0.3s ease"
        }}
      />

    </div>

  )

}

export default Navbar