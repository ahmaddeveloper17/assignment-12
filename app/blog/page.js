import React from 'react'

export default function Blog() {
  return (
    <div style={{marginTop:"8%"}}>
<h1 style={{textAlign:"center" ,fontWeight:"bolder" , fontSize:"400%", color:"blue"}}>BLOG</h1>
<div className='container'>
<div className='row'>
<div className='col' style={{marginTop:"6%"}}>
  <h3 style={{color:"blue"}}>OUR BLOG</h3>
  <h2>Letest News & Blog</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
sed do eiusmod tempor incididunt labo. </p>
<div class="input-group mb-3">
  <input type="text" placeholder="Enter Your E-mail"/>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div>
</div>
<div className='col' >
  <div  class="backcolor">
  <p>Maecenas laoree efficiture sagittis <br/>
aliquam eleifend nisl.</p>
<p>Posted 7 MArch, 2020</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
sed do eiusmod tempor incididunt labore et dolore<br/>
magna aliqua. Ut enim ad minim veniam, quis<br/>
nostrud exercitation ullamco laboris nisi ut aliquip<br/>
ea commodo consequat. Duis aute irure dolor in<br/>
reprehenderit in voluptate velit esse cillum dolore<br/>
eu fugiat nulla pariatur. Excepteur sint occaecat<br/>
cupidatat non proident,</p>
<p style={{color:"blue"}}>Read More</p>
</div>
</div>
<div className='col'>
  <div class="backcolor">
  <h4>Maecenas laoree efficiture sagittis<br/>
aliquam eleifend nisl.</h4>
<p style={{color:"blue"}}>Posted 7 MArch, 2020</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
sed do eiusmod tempor incididunt labore et dolore<br/>
magna aliqua. Ut enim ad minim veniam, quis<br/>
nostrud exercitation ullamco laboris nisi ut aliquip<br/>
ea commodo consequat. Duis aute irure dolor in<br/>
reprehenderit in voluptate velit esse cillum dolore<br/>
eu fugiat nulla pariatur. Excepteur sint occaecat<br/>
cupidatat non proident,</p>
<p style={{color:"blue"}}>Read More</p>
</div>
</div>
</div>
</div>
    </div>
  )
}
