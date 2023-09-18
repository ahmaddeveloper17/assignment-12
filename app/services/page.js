import React from 'react'
import Card from '../(components)/card/page'


export default function Services() {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bolder", fontSize: "400%", color: "blue" }}>SERVICES</h1>
      <h3 style={{ textAlign: "center", color: "blue", marginTop: "10%" }}> OUR SERVICES</h3>
      <h2 style={{ textAlign: "center", marginTop: "1%" }}>We Are Providing Digital services</h2>
      <div className='container' style={{ marginTop: "5%" }}>
        <div className='row'>
          <div className='col'><Card /> </div>
          <div className='col'>
            <div class="zoom1">
              <div >
                <img src="https://assigment-12.vercel.app/_next/image?url=%2Fmobile.webp&w=64&q=75" alt="" width="100" height="70"
                  style={{ marginLeft: "35%", width:"25%" }}></img>
                <h4 style={{ marginLeft: "3%" }}> Mobile App Development</h4>
                <p style={{ marginLeft: "1%" }}> Lorem ipsum dolor sit amet, consectetur<br />
                  adipiscing elit, sed do eiusmodtempor<br />
                  incididunt ut labore et dolore</p>

              </div>
            </div></div>
          <div className='col'> <div class="zoom1">
            <div >
              <img src="https://assigment-12.vercel.app/_next/image?url=%2Fai.webp&w=64&q=75" alt="" width="100" height="70"
                style={{ marginLeft: "35%" ,width:"25%" }}></img>
              <h4 style={{ marginLeft: "15%" }}>AI Based Solutions</h4>
              <p style={{ marginLeft: "1%" }}> Lorem ipsum dolor sit amet, consectetur<br />
                adipiscing elit, sed do eiusmodtempor<br />
                incididunt ut labore et dolore</p>

            </div>
          </div></div>
        </div>
      </div>
    </div>
  )
}