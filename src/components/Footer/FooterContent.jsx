import React from 'react'
import { useNavigate } from 'react-router-dom'

function FooterContent() {
    return (
        <div className='bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between'>
            <Section1 />
            <Section2 />
        </div>
    )
}

const Section1 = () => {
    const navigate = useNavigate()
    return (
        <div className='flex shrink-0 gap-20 font-source-sans-pro mt-10'>
            <div className='flex flex-col gap-2 '>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Essential Links</h3>
                <p onClick={() => { navigate('/') }} className='cursor-pointer'>Home</p>
                {/* <p className='cursor-pointer'>About</p> */}
                <p onClick={() => { navigate('/projects') }} className='cursor-pointer' >Projects</p>
                <p onClick={() => {
                    window.location.href = `mailto:${import.meta.env.VITE_EMAIL}`;
                }} className='cursor-pointer'>Contact</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Social Media Links</h3>
                <p onClick={() => { window.open(import.meta.env.VITE_LINKEDIN, '_blank') }} className='cursor-pointer'>LinkedIn</p>
                <p onClick={() => { window.open(import.meta.env.VITE_GITHUB, '_blank') }} className='cursor-pointer' >GitHub</p>
            </div>
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end font-cinzel'>
            <h1 className='text-[8vw] leading-[0.8] mt-10'>Building the web, one line of code at a time</h1>
            <p>© Copyright {new Date().getFullYear()} </p>
        </div>
    )
}

export default FooterContent