import React from 'react'
import { FaPaintBrush } from 'react-icons/fa';
import { FaKey, FaMobileScreen } from "react-icons/fa6";
import { GiPadlockOpen } from 'react-icons/gi';
import { FaChartPie } from "react-icons/fa";

const AboutUs = () => {
    return (
        <section className="about__section">
            <div className="container about__container-section">
                <h2>Your Elections. Any Location...</h2>
                    <div className="row  aboutus__container">
                        <div className="col-12 col-sm-4 aboutUs__box ">
                            <div className="icon__image">
                                <FaKey/>
                            </div>
                            <h3>Secure Voting</h3>
                            <p>WebVote is secure and encrypted, ensuring that your data is protected at all times.</p>
                        </div>
                            
                        <div className="col-12 col-sm-4 aboutUs__box">
                            <div className="icon__image">
                                <FaMobileScreen/>
                            </div>
                            <h3>Mobile Ready</h3>
                            <p>Elections are optimized for desktop and mobile devices. Voters can vote from a web browser or our iOS & Android apps</p>
                        </div>

                        <div className="col-12 col-sm-4 aboutUs__box ">
                            <div className="icon__image">
                                <FaPaintBrush/>
                            </div>
                            <h3>Custom Design</h3>
                            <p>Personalize your election with your organization's logo and colors. No HTML/CSS knowledge necessary.</p>
                        </div>

                    </div>

                    <div className="row  aboutus__container">
                        <div className="col-12 col-sm-4 aboutUs__box ">
                            <div className="icon__image">
                                <GiPadlockOpen/>
                            </div>
                            <h3>Immutable Elections</h3>
                            <p>Voters have no acces to change anything asides voting and viewing the result of everything even in an ongoing election</p>
                        </div>
                            
                        <div className="col-12 col-sm-4 aboutUs__box">
                            <div className="icon__image">
                                <FaChartPie/>
                            </div>
                            <h3>Amazing Result chart</h3>
                            <p>Election results are automatically calculated and presented with beautiful loading bar.</p>
                        </div>


                    </div>
            </div>
        </section>
    )
}

export default AboutUs