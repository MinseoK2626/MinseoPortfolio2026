import { useState } from "react"

function Activities(){

  return(

    <div
      style={{
        background:"#020617",
        color:"white",
        fontFamily:"system-ui"
      }}
    >

      <ActivitySection
        title="Student Council Appropriations Committee"
        slides={[
          {
            title:"Internal Role",
            image:"/council_internal.jpg",
            text:"Oversaw internal funding review cycles allocating $1.1M in Student Activities Funding across 800+ student organizations."
          },
          {
            title:"External Role",
            image:"/council_external.jpg",
            text:"Worked directly with student organizations to evaluate funding proposals and ensure fair allocation."
          },
          {
            title:"Financial Due Diligence",
            image:"/council_excel.png",
            text:"Performed financial review of budgets and invoices using Excel to verify funding requests."
          }
        ]}
      />

      <ActivitySection
        title="Honor Committee"
        slides={[
          {
            title:"Community of Trust",
            image:"/honor1.jpg",
            text:"Promoted UVA's Honor System and principles of academic integrity."
          },
          {
            title:"Education Initiatives",
            image:"/honor2.jpg",
            text:"Led outreach and education initiatives to strengthen the Community of Trust."
          }
        ]}
      />

      <ActivitySection
        title="Teaching Assistant – Software Development Essentials"
        slides={[
          {
            title:"Teaching Support",
            image:"/ta1.jpg",
            text:"Assisted students in learning Java programming and debugging techniques."
          },
          {
            title:"Code Review",
            image:"/ta2.jpg",
            text:"Provided structured feedback and mentoring to improve student coding practices."
          }
        ]}
      />

      <ActivitySection
        title="VISAS ESL Coordinator"
        slides={[
          {
            title:"Program Coordination",
            image:"/visas1.jpg",
            text:"Coordinated ESL sessions supporting international participants."
          },
          {
            title:"Volunteer Leadership",
            image:"/visas2.jpg",
            text:"Managed volunteers and organized weekly language exchange sessions."
          }
        ]}
      />

      <ActivitySection
        title="Honors & Scholarships"
        slides={[
          {
            title:"Beta Gamma Sigma",
            image:"/award1.jpg",
            text:"Recognized among the top 10% of students at the McIntire School of Commerce."
          },
          {
            title:"Thomas M. Berry Scholarship",
            image:"/award2.jpg",
            text:"Awarded for academic excellence and leadership."
          }
        ]}
      />

    </div>

  )

}

export default Activities



function ActivitySection({title, slides}:{title:string, slides:any[]}){

  const [index,setIndex] = useState(0)

  const next = () => setIndex((index+1)%slides.length)
  const prev = () => setIndex((index-1+slides.length)%slides.length)

  return(

    <section
      style={{
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        gap:"40px",
        padding:"40px 15px"
      }}
    >

      <h1
        style={{
          fontSize:"42px",
          textAlign:"center"
        }}
      >
        {title}
      </h1>

      <div
        style={{
          display:"flex",
          alignItems:"center",
          gap:"40px"
        }}
      >

        <button style={arrowStyle} onClick={prev}>
          ←
        </button>

        <img
          src={slides[index].image}
          style={{
            width:"600px",
            borderRadius:"16px",
            boxShadow:"0 20px 40px rgba(0,0,0,0.4)"
          }}
        />

        <button style={arrowStyle} onClick={next}>
          →
        </button>

      </div>

      <h2 style={{fontSize:"28px"}}>
        {slides[index].title}
      </h2>

      <p
        style={{
          maxWidth:"650px",
          textAlign:"center",
          lineHeight:1.6,
          opacity:0.8
        }}
      >
        {slides[index].text}
      </p>

      <div style={{display:"flex",gap:"8px"}}>
        {slides.map((_:any,i:number)=>(
          <div
            key={i}
            style={{
              width:"10px",
              height:"10px",
              borderRadius:"50%",
              background:i===index?"#3b82f6":"#475569"
            }}
          />
        ))}
      </div>

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
  cursor:"pointer"
}