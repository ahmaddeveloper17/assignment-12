import React from 'react'
export default function Portfolio() {
  return (
    <div style={{ marginTop: "5%", marginLeft: "10%" }}>
      <h1 style={{textAlign:"center", marginRight:"10%" ,fontWeight:"bolder" , fontSize:"400%", color:"blue"}}>PORTFOLIO</h1>
      <h3 style={{ color: "blue" }}>
      OUR PORTFOLIO </h3>
      <h2>Take A Look At Our Latest Work</h2>
      <div className='container' style={{ marginTop: "4%" }}>
        <div className='row'>
          <div  className='col'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHv4GIxkXZMeOXYutrqoYhuh7xWEh9e403Tw&usqp=CAU" alt="" width="100%" height="80%"
            style={{ marginLeft: "-15%" }} class="zoom2"></img></div>
          <div className='col'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_Np0j7NWuigAmwyayvqNMaam8IkRs0-XHw&usqp=CAU" alt="" width="100%" height="80%"
            style={{ marginLeft: "-15%" }} class="zoom2"></img></div>
          <div className='col'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHxD--45gGQOiu87UPMFO1DO2sRlMVC2EzA&usqp=CAU" alt="" width="100%" height="80%"
            style={{ marginLeft: "-15%" }} class="zoom2"></img></div>
        </div>
      </div>
      <div className='container' style={{ marginTop: "-3%" }}>
        <div className='row'>
          <div className='col'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvI5_OimWVb1sp1k4Ar-GqUI1nq8gR42tV4w&usqp=CAU" alt="" width="100%" height="80%"
            style={{ marginLeft: "-15%" }} class="zoom2"></img></div>
          <div className='col'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw6ZLmZeujvUIxSTikktUl-oYQJ2iJIg1pUg&usqp=CAU" alt="" width="100%" height="80%"
            style={{ marginLeft: "-15%" }} class="zoom2"></img></div>
          <div className='col'><img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRne9rQP2gtLNnW-VxPl4I1abBtfMhcThnG4w&usqp=CAU" alt=" " width="100%" height="80%"
            style={{ marginLeft: "-15%" }} class="zoom2"></img></div>
        </div>
      </div>


    </div>
  )
}