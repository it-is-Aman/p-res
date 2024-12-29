import React, { useState, useEffect } from 'react'
import './Hero.css'
const Hero = () => {
    const [windowsWidth, setWindowsWidth] = useState(0);
    useEffect(() => {
        setWindowsWidth(window.innerWidth);
    }, [])

    const getBlocks = () => {
        const blockSize = windowsWidth * 0.025;
        const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
        return [...Array(nbOfBlocks).keys()].map((_, index) => {
            return <div onMouseEnter={(e) => { colorize(e.target) }} key={index}></div>
        })
    }

    const colorize = (el) => {
        el.style.backgroundColor = 'black'
        setTimeout(() => {
            el.style.backgroundColor = 'transparent';
        }, 300)
    }

    return (
        <div className='container1'        >
            <div className='body font-cinzel font-bold'>
                <p>I'm a Developer Crafting Intuitive and Modern Web Experiences</p>
            </div>
            <div className="grid">
                {
                    windowsWidth > 0 && [...Array(20).keys()].map((_, index) => {
                        return <div key={'b_' + index} className="column">
                            {
                                getBlocks()
                            }
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Hero;