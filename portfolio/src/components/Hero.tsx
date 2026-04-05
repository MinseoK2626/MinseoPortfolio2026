
import { Link } from "react-router-dom"
function Hero() {

  
  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        background: "linear-gradient(135deg,#0f172a,#1e3a8a,#3b82f6)",
        backgroundSize: "400% 400%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        fontFamily: "system-ui"
      }}
    >

      <h1
  style={{
    fontSize: "72px",
    fontWeight: "800",
    letterSpacing: "1px",
    marginBottom: "20px",
    color: "white",
    textShadow:
      "0 0 10px rgba(255,255,255,0.6), 0 0 30px rgba(96,165,250,0.7), 0 0 60px rgba(59,130,246,0.6)"
  }}
>
  Minseo Kim
</h1>

      <p
        style={{
          fontSize: "26px",
          marginBottom: "10px",
          opacity: 0.9
        }}
      >
        Commerce × Computer Science
      </p>

      <p
        style={{
          fontSize: "18px",
          maxWidth: "600px",
          marginBottom: "50px",
          opacity: 0.8
        }}
      >
        Building at the intersection of technology, finance, and strategy.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >

       <Link to="/about">
  <button style={buttonStyle}>About Me</button>
</Link>

<Link to="/projects">
  <button style={buttonStyle}>Projects</button>
</Link>

<Link to="/activities">
  <button style={buttonStyle}>Activities</button>
</Link>

<Link to="/experience">
  <button style={buttonStyle}>Experience</button>
</Link>
      </div>

    </section>
    
  )
}

const buttonStyle = {
  padding:"16px 40px",
  fontSize:"18px",
  borderRadius:"50px",
  border:"none",
  background:"rgba(255,255,255,0.15)",
  color:"white",
  backdropFilter:"blur(10px)",
  cursor:"pointer",
  transition:"all 0.3s",
  boxShadow:"0 10px 30px rgba(0,0,0,0.3)"
}

export default Hero