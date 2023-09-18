import React from 'react'
import Services from './services/page'
import About from './about/page'
import Portfolio from './portfolio/page'
import Contact from './contact/page'
import Pages from './pages/page'
import Blog from './blog/page'


export default function page() {
  return (
    <div>
      <Services />
      <About />
      <Portfolio/>
      <Contact/>
      <Pages/>
      <Blog/>
    </div>
  )
}
