import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function About() {
  return (
    <div className=''>
      <h3 className='my-5 text-center'>About Project</h3>
      <div className="row m-0 px-5">
        <div className="col-md-6 m-0 py-3">
          <p><span className='fw-bold'>Welcome to the about page of TE Project</span> - the website that allows you to compare the economic indicators of two different countries.</p>
          <p>TE Project was created in response to a request from Trade Economics, a renowned company in the field of economics. As a candidate for web developer position, I was tasked with designing and building a website that would allow users to compare two different countries side by side.</p>
          <p>With this website, you can easily compare and contrast various economic indicators, including GDP, POPULATION. Our goal is to provide users with a user-friendly platform that makes it easy to access and analyze data from different countries.</p>
          <p>TE Project is designed with simplicity and usability in mind. Our intuitive interface allows users to easily navigate the website and quickly access the information they need. Whether you are a student studying economics, a business owner considering expanding your operations overseas, or simply someone interested in understanding more about the world economy, TE Project has something to offer.</p>
          <p>At TE Project, we are committed to providing accurate, up-to-date data and analysis. We understand the importance of reliable information when it comes to making important decisions, and we strive to provide our users with the most current and accurate data available.</p>
          <p>Thank you for visiting TE Project, and we hope you find our website to be a valuable resource for understanding the economic performance of different countries around the world.</p>
        </div>
        <div className="col-md-6">
          <img className='img-fluid border rounded' src="/assets/SS1_Home.png" alt="" />
        </div>
      </div>

      <h3 className='my-5 pt-5 text-center'>About Developer</h3>
      <div className="row m-0 my-5">
        <div className="col-md-4 text-center">
          <img className='img-fluid rounded-circle w-50' src="https://avatars.githubusercontent.com/u/73586196?v=4" alt="" />
        </div>
        <div className="col-md-8">
          <h4>I am a passionate web developer</h4>
          <p>I know HTML, CSS, Bootstrap, ReactJS, NodeJS, MongoDB. Im working as a MERN stack developer for 2.5 years. Im an undergrade student of 10th semester. My major is Electrical and Electronic Engineering. </p>
          <br />
          <a className='btn btn-success' href="/assets/Fazlul_Karim_NSU_EEE.pdf" download>Download My CV</a>
          <h4 className='mt-5 mb-3'>Find me also</h4>
          <div className=''>

            <a style={{ color: '#1A75BB' }} target='blank' href="https://www.linkedin.com/in/fazlul-karim-a2650b1a9/"><FontAwesomeIcon className='h3 me-3' icon={faLinkedin} /></a>
            <a style={{ color: '#24292F' }} target='blank' href="https://github.com/Fazlul-Karim-Shahed"><FontAwesomeIcon className='h3 me-3' icon={faGithub} /></a>
            <a style={{ color: '#1CA1F1' }} target='blank' href="https://twitter.com/Fazlul2001"><FontAwesomeIcon className='h3 me-3' icon={faTwitter} /></a>
            <a style={{ color: '#1978F5' }} target='blank' href="https://www.facebook.com/profile.php?id=100051561011802"><FontAwesomeIcon className='h3 me-3' icon={faFacebook} /></a>
          </div>
        </div>
      </div>


    </div>
  )
}
