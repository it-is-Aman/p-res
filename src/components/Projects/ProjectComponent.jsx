import React from "react";
import "./ProjectComponent.css"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'

function ProjectComponent({ project }) {
    const anim = {
        initial: { width: 0 },
        open: { width: "auto", transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
        closed: { width: 0 }
    }
    const [isActive, setIsActive] = useState(false);

    const { id, title1, title2, src } = project;

    const navigate = useNavigate();

    return (
        <div onMouseEnter={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}
            key={id}
            className='project'
            onClick={() => { navigate(`/projects/${id}`) }}
        >
            <p>{title1}</p>
            <motion.div variants={anim} animate={isActive ? "open" : "closed"} className='imgContainer'>
                <img src={`/img/${src}`}></img>
            </motion.div>
            <p>{title2}</p>
        </div>
    )
}


export default ProjectComponent