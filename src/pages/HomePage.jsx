import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../components/AboutUs';
import NodeMailer from '../components/NodeMailer';

const HomePage = () => {
    const words = ["Welcome", "To", "WebVote..."];


    return (

        <>
        <section className="home">
            <div className='home__cta'>
                <Link to={'/login'} className='cta__btn btn '>Login</Link>
                <Link to={'/register'} className='cta__btn btn btn-primary'>Sign Up</Link>
            </div>

            <div>
                <h2>
                    {words.map((word, index) => (
                        <span key={index} className="word" style={{ animationDelay: `${index * 0.5}s` }}>
                            {word}
                        </span>
                    ))}
                </h2>

            </div>

            <div className="home__text">
                <p>Create an election for your school or organization in seconds. Your voters can vote from any location on any device.</p>
            </div>
        </section>

        <section className="about__page">
            <AboutUs/>
        </section>

        <section className="email__form">
            <NodeMailer/>
        </section>
        </>
   
        


    );
};

export default HomePage;
