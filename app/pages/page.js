import React from 'react'

export default function Pages() {
  return (
    <div style={{ marginLeft: "10%", marginTop: "8%", }}>
      <h1 style={{textAlign:"center", marginRight:"10%" ,fontWeight:"bolder" , fontSize:"400%", color:"blue"}}>PAGES</h1>
      <h2 style={{ color: "blue" }}>OUR PRICING</h2>
      <h1>Choose A Plan That’s Right For You </h1>
      <div className='container' style={{ marginTop: "6%", marginLeft: "-4%" }}>
        <div className='row'>
          <div className='col' style={{ marginRight:"2%", borderRadius:"7%", border: "2px solid blue", textAlign: "center" }}  >
          <div  class="zoom4">
            <h4>Basic Plan</h4>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS43isgXomBenALq_irK7JJjk41BhgPYsNyTKZyT0HVVM9uBcPCxwFSunzlsK2JJIyfehI&usqp=CAU" alt="" width="100" height="70"/>
            <h4 style={{ color: "blue" }}>$50/Month</h4>
            <p> Graphic Design<br />
              Web Design<br />
              UI/UX<br />
              HTML/CSS<br />
              SEO Marketing<br />
              Business Analysis</p>
            <button type="button" className="btn btn-primary" style={{ width: '30%', height: '23%', borderRadius: "70px" }}> Start Now</button>
            </div>
          </div>
          <div className='col' style={{ borderRadius:"7%",  border: "2px solid blue", textAlign: "center" }}>
          <div class="zoom4">
            <h4>Standart Plan</h4>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS43isgXomBenALq_irK7JJjk41BhgPYsNyTKZyT0HVVM9uBcPCxwFSunzlsK2JJIyfehI&usqp=CAU" alt="" width="100" height="70"/>
            <h4 style={{ color: "blue" }}>$99/Month</h4>
            <p> Graphic Design<br />
              Web Design<br />
              UI/UX<br />
              HTML/CSS<br />
              SEO Marketing<br />
              Business Analysis</p>
            <button type="button" className="btn btn-primary" style={{ width: '30%', height: '23%', borderRadius: "70px" }}> Start Now</button>
            </div>
          </div>
          <div className='col' style={{ marginLeft:"2%", borderRadius:"7%",  border: "2px solid blue", textAlign: "center" }}>
           <div class="zoom4">
            <h4>Premium Plan</h4>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS43isgXomBenALq_irK7JJjk41BhgPYsNyTKZyT0HVVM9uBcPCxwFSunzlsK2JJIyfehI&usqp=CAU" alt="" width="100" height="70"/>
            <h4 style={{ color: "blue" }}>$150/Month</h4>
            <p> Graphic Design<br />
              Web Design<br />
              UI/UX<br />
              HTML/CSS<br />
              SEO Marketing<br />
              Business Analysis</p>
            <button type="button" className="btn btn-primary" style={{ width: '30%', height: '23%', borderRadius: "70px" }}> Start Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
