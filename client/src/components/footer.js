import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom'
// import { Facebook } from 'react-social-icons';
import { FiYoutube,FiTwitter,FiInstagram } from "react-icons/fi";
import {FaFacebook} from 'react-icons/fa'



import './css/footer.css'



function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p>BLACK LIVES MATTER</p>
                <p className="footer-subscription-heading">
                Join the Adventure newsletter to receive our best places and the our guides               </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
               </p>
                {/* <a href="mailto:hege@example.com">hege@example.com</a> */}
                <div >
                    <form>
                        <input type="email"
                            name="email"
                            placeholder="Email"
                            className="footer-input" />
                        <Button buttonstyle='btn--outline'>subscribe</Button>
                    </form>

                </div>
            </section>
            {/* <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h3>AboutUs</h3>
                            <Link to='/signUp'>How it Works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Guides</Link>
                            <Link to='/'>Country</Link>
                        </div>
                    </div>
                    <div className="footer-link-items">
                        <h3>ContactUs</h3>
                        <Link to='/signUp'>How it Works</Link>
                        <Link to='/'>United States</Link>
                        <Link to='/'>United Kingdom</Link>
                        <Link to='/'>Israel</Link>

                    </div>
                 
                </div> */}
                {/* <div> */}
                <p className="footer-subscription-text A">
                Contact Us
               </p>
                <div className="SocialMedia">
                        {/* <h3>Contact Us</h3> */}
                        <Link className="social-Link" to='#'><FiInstagram/></Link>
                        <Link className="social-Link" to='#'> <FaFacebook/></Link>
                        <Link className="social-Link" to='#'><FiYoutube/></Link>
                        <Link className="social-Link" to='#'><FiTwitter/></Link>
                    </div>
                {/* </div> */}
            </div>
           
    
    )
}
export default Footer