import React from 'react'

export default function Contact() {
  return (
    <div style={{ backgroundColor: "#e5e7eb" }}>
       <h1 style={{textAlign:"center" ,fontWeight:"bolder" , fontSize:"400%", color:"blue"}}>CONTACT</h1>
      <h2 style={{ marginTop: "8%", textAlign: "center", color: "blue" }}>OUR TEAM</h2>
      <h1 style={{ textAlign: "center" }}> Our top dedicated professionals.</h1>
      <div className='container'>
        <div className='row'>
          <div className='col'><img src=" https://images.squarespace-cdn.com/content/v1/57d19f76bebafbe70d497ada/1473422331142-L2I9EYVCUF74Q3D13ALW/Team%2Bbackground.jpeg?format=2500w" alt="" width="100%" height="100%"
            style={{ marginLeft: "%" }} class="zoom3" ></img></div>
          <div className='col'><img src="https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-climbing-the-peak-of-the-team-s-success-image_214836.jpg " alt="" width="100%" height="100%"
            style={{ marginLeft: "%" }} class="zoom3"  ></img></div>
        </div>
      </div>
    </div>
  )
}