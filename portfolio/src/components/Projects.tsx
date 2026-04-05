import { useState } from "react"

function Projects() {

  return (

    <div
      style={{
        background:"#020617",
        color:"white",
        fontFamily:"system-ui"
      }}
    >

      <ProjectSection
        title="McIntire x [solidcore] Strategic Growth Project"
        slides={[
          {
            image:"/slidesolid.jpg",
            text:"Strategic consulting project analyzing growth opportunities for [solidcore]."
          },
          {
            image:"/presentation.jpg",
            text:"Team presentation at the McIntire School of Commerce."
          },
          {
            image:"/solidcore_team.jpg",
            text:"MEH"
          }
        ]}
      />


      <ProjectSection
        title="Capri Holdings Strategic Value Creation Project"
        slides={[
          {
            image:"/valuation.png",
            text:"DCF valuation model evaluating intrinsic value post M&A."
          },
          {
            image:"/slidecapri.jpg",
            text:"Strategic proposal recommending geographic diversification through M&A."
          },
          {
            image:"/capri_map.png",
            text:"Team presentation at the McIntire School of Commerce."
          }
        ]}
      />


      <ProjectSection
        title="Shareholder Memo Analysis: Netflix"
        slides={[
          {
            image:"/memo.png",
            text:"Investment-style memo evaluating Netflix's long-term strategic outlook."
          },
          {
            image:"/netflix_chart.png",
            text:"Industry analysis and financial trends supporting the thesis."
          }
        ]}
      />

    </div>

  )

}

export default Projects



function ProjectSection({title, slides}:{title:string, slides:any[]}){

  const [index,setIndex] = useState(0)

  const next = () => {
    setIndex((index + 1) % slides.length)
  }

  const prev = () => {
    setIndex((index - 1 + slides.length) % slides.length)
  }

  return(

    <section
      style={{
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        gap:"40px",
        padding:"100px 40px"
      }}
    >

      <h1
        style={{
          fontSize:"42px",
          textAlign:"center",
          maxWidth:"800px"
        }}
      >
        {title}
      </h1>


      <div
        style={{
          display:"flex",
          alignItems:"center",
          gap:"30px"
        }}
      >

        <button
          style={arrowStyle}
          onClick={prev}
        >
          ←
        </button>


        <img
          src={slides[index].image}
          style={{
            width:"600px",
            borderRadius:"16px",
            boxShadow:"0 30px 60px rgba(0,0,0,0.5)"
          }}
        />


        <button
          style={arrowStyle}
          onClick={next}
        >
          →
        </button>

      </div>


      <p
        style={{
          maxWidth:"600px",
          textAlign:"center",
          opacity:0.8,
          lineHeight:1.6
        }}
      >
        {slides[index].text}
      </p>

    </section>

  )

}


const arrowStyle = {
  width:"50px",
  height:"50px",
  borderRadius:"50%",
  border:"none",
  background:"#1e3a8a",
  color:"white",
  fontSize:"22px",
  cursor:"pointer",
  boxShadow:"0 10px 20px rgba(0,0,0,0.4)"
}