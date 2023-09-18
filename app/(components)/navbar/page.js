import React from "react";
import Link from "next/link";

function Navebar() {
  return (
    <div >
     <nav className="navbar navbar-expand-lg bg-body-tertiary"  style={{ backgroundImage: "url('https://i.pinimg.com/originals/a9/02/c3/a902c36ba47e99e7330ff4ced84f7425.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: '5vh' ,Height:10 ,maxWidth : '100%' }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{marginRight:100 , marginLeft:100 , color : "white" , fontWeight : "bold"}}>
      LOGO
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" style={{marginRight:15}}>
          <Link className="nav-link active" aria-current="page" href="/"  style={{marginRight:"70" , color : "white"}} >
            HOME
          </Link>
        </li>
        <li className="nav-item" style={{marginRight:15}}>
          <Link className="nav-link active" aria-current="page" href="about"style={{marginRight:"70" , color : "white"}} >
          ABOUT
          </Link>
        </li>
        <li className="nav-item"style={{marginRight:15}}>
          <Link className="nav-link active" aria-current="page" href="pages"  style={{marginRight:"70" , color : "white"}} >
          PAGES
          </Link>
        </li>
        <li className="nav-item" style={{marginRight:15}}>
          <Link className="nav-link active" aria-current="page" href="services"  style={{marginRight:"70" , color : "white"}} >
          SERVICES
          </Link>
        </li>
        <li className="nav-item" style={{marginRight:15}}>
          <Link className="nav-link active" aria-current="page" href="portfolio"  style={{marginRight:"70" , color : "white"}} >
          PORTFOLIO
          </Link>
        </li>
        <li className="nav-item"style={{marginRight:15}}>
          <Link className="nav-link active" aria-current="page" href="blog"  style={{marginRight:"70" , color : "white"}} >
          BLOG
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="contact"  style={{marginRight:"70" , color : "white" }} >
          CONTACT
          </Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{width:"60%" , borderRadius: "50px"}}
        />
      </form>
    </div>
  </div>
</nav>


    </div>
  )
}
export default Navebar ;
