import React from 'react';
import './resources/css/Footer.css';
import {Link} from 'react-router-dom';
import { Button } from './Button';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="your Email" 
                        className="footer-input"/>
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>

                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2>About Us</h2>
                            <Link to="/sign-up">How it Works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>
                        <div class='footer-link-items'>
                            <h2>Social Media</h2>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Twitter</Link>
          </div>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            FlY2 <i class="fas fa-globe"/>
                        </Link>
                    </div>
                    <small className="website-rights">Vishal &copy; 2021</small>
                    <div className="social-icons">
                        <a className="social-icon-link facebook"
                            href='https://www.facebook.com/Vkmandal24/'
                            target='_blank'
                            arial-label='Facebook'
                            rel="noreferrer"
                            >
                                <i className="fab fa-facebook-f"></i>
                        </a>
                        <a 
                            className="social-icon-link instagram"
                            href='https://www.instagram.com/_ethical_psycho/'
                            target='_blank'
                            arial-label='Instagram'
                            rel="noreferrer"
                            >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a 
                            className="social-icon-link twitter"
                            href='https://www.twitter.com'
                            target='_blank'
                            arial-label='Twitter'
                            rel="noreferrer"
                            >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a 
                            className="social-icon-link Linkedin"
                            href='https://www.linkedin.com/in/vishal-mandal-b8b126154/'
                            target='_blank'
                            arial-label='Linkedin'
                            rel="noreferrer"
                            >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a 
                            className="social-icon-link youtube"
                            href='https://www.youtube.com/channel/UCUEmQexeCaEAtozjB8RShvQ/featured'
                            target='_blank'
                            arial-label='Youtube'
                            rel="noreferrer"
                            >
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Footer
