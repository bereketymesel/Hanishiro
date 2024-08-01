import React from 'react'
import img1 from '../assets/img1.jpg'
// import '../styles/About.css'
function About() {
  return (
    <div className='about'>
    <div className='aboutTop' style={{ backgroundImage: `url(${img1})` }}></div>
    <div className='aboutBottom'>
      <h2 className='aboutus'>AboutUs</h2>
       
      <p> hani shiro was established in 2005 e.c by  a share holder 
        of 5 person <br/>organized by kolfe keranyo werda 2 administerters <br/>with the capital of 200,000 .we prepared both fasting and non fasting foods </p>
        </div>
        <div className="about-container">
      <div className="about-item">
        <h2>Vision</h2>
        <p>Bisrat envisions to be the best and forerunner in the quality of products, market leader and perpetual favorite of customers in the sector in Ethiopia and East Africa.</p>
      </div>
      <div className="about-item">
        <h2>Mission</h2>
        <p>As a corporation engaged in the production of roofing iron sheets, plastics, PVC, water tanks and other basic factory products, it strives to be a leader in the market by carrying out social responsibility and maintaining integrity by using modern technology and management systems in order to satisfy the needs of its customers by providing quality products.</p>
      </div>
      <div className="about-item">
        <h2>CoreValues</h2>
        <p>
<ul>
 
<li>Establishing Trust relationship with customers</li>
<li>Providing quality products</li>
<li>Commitment</li>
<li>Honesty and integrity</li>
<li>Respect for customers</li>
<li>Accountability</li>
 
</ul>

</p>
      </div>
      <div className="about-item">
        <h2>our merits</h2>
        <p>Our aim statement goes here...</p>
      </div>
    </div>
      
      
      
     </div>
     
  )
  
}

export default About