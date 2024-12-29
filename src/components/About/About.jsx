import React, { useRef, useEffect, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import './About.css';

const About = () => {
    const phrases = [
        "I'm a passionate developer with a knack for building responsive and performance-driven web applications. With experience in modern frontend technologies, I strive to deliver innovative solutions that meet user needs and exceed expectations",
    ];

    const body = useRef(null);
    const isInView = useInView(body, { once: true, margin: "-75%" });

    const animation = {
        initial: { y: "100%" },
        enter: i => ({
            y: "0",
            transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i }
        })
    };

    if (typeof window !== 'undefined') {
        // Client-side-only code
        return (
            <div
                ref={body}
                className='body mt-52 mb-52 font-source-sans-pro'>
                {
                    phrases.map((phrase, index) => {
                        return <div key={index} className='lineMask'>
                            <motion.p custom={index} variants={animation} initial="initial" animate={isInView ? "enter" : ""}>
                                {phrase}
                            </motion.p>
                        </div>
                    })
                }
            </div>
        );
    }

    return null; // Return null if not in client-side rendering
};

export default About;
