import React from 'react'
import Card2 from '../(components)/card2/page'

export default function About() {
  return (
    <div style={{ marginTop: "4%" }}>
      <h1 style={{ textAlign: "center", marginRight: "10%", fontWeight: "bolder", fontSize: "400%", color: "blue" }}>ABOUT</h1>
      <div className='container' style={{ marginTop: "10%" }}>
        <div className='row'>
          <div className='col'>
            <img src="https://assigment-12.vercel.app/_next/image?url=%2Fpngwing.png&w=640&q=75" alt="" width="90%" height="90%"
              style={{ marginLeft: "3%" }} class="zoom"></img>
          </div>
          <div className='col'>
            <h3 style={{ color: "blue" }}>ABOUT US</h3>
            <h2 style={{ marginTop: "3%" }}>We design, build brands<br />
              & digital projects.</h2>
            <p style={{ marginTop: "3%" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
              Duis aute irure dolor in reprehenderit<br />

              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur<br />
              sint occaecat cupidatat non proident,</p>
            <button type="button" className="btn btn-primary" style={{ marginLeft: '15%', width: '25%', height: '10%', borderRadius: "70px" }}>Read More</button>
          </div>
        </div>
      </div>

      <div className='containerFluid' style={{ margin: "2% 2% 2% 2%" }}>
        <div className='row'>
          <div className='col'><Card2 /></div>
          <div className='col'>
            <div style={{ border: "2px solid white", backgroundColor: "#F2F9FF" }} class="box">
              <img src="https://assigment-12.vercel.app/_next/image?url=%2Fpartnership.png&w=64&q=75" alt="" width="100" height="70"
                style={{ marginLeft: "38%" , width:"20%" }}></img>
              <h4 style={{ marginLeft: "25%" }}>Our partnership </h4>
              <p style={{ marginLeft: "1%" }}> Lorem ipsum dolor sit amet, consectetur<br />
                adipiscing elit, sed do eiusmodtempor<br />
                incididunt ut labore et dolore</p>

            </div>
          </div>
          <div className='col'>
            <div style={{ border: "2px solid white", backgroundColor: "#F2F9FF" }} class="box">
              <img src="https://assigment-12.vercel.app/_next/image?url=%2Fidea.png&w=64&q=75" alt="" width="100" height="70"
                style={{ marginLeft: "38%" , width:"17%" ,height:"30%" }}></img>
              <h4 style={{ marginLeft: "30%", marginTop:"5%" }}>Super ideas </h4>
              <p style={{ marginLeft: "1%" }}> Lorem ipsum dolor sit amet, consectetur<br />
                adipiscing elit, sed do eiusmodtempor<br />
                incididunt ut labore et dolore</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
