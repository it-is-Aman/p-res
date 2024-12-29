import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <div className=' fixed top-0 z-50 w-full h-14 bg-black text-white flex justify-between items-center uppercase font-source-sans-pro'>
            <div
                onClick={() => { navigate('/') }}
                className=' ml-5 cursor-pointer '>
                {import.meta.env.VITE_NAME}
            </div>
            <div>
                <ul className='flex'>
                    <li onClick={() => { navigate('/projects') }} className='mr-5 cursor-pointer hover:underline'>Projects</li>
                    <li onClick={() => {
                        window.location.href = `mailto:${import.meta.env.VITE_EMAIL}`;
                    }} className='mr-5 cursor-pointer hover:underline'>Contact</li>
                    <li onClick={() => { window.open(import.meta.env.VITE_LINKEDIN, '_blank') }} className='mr-5 cursor-pointer hover:underline'>LinkedIn</li>
                </ul>
            </div>
        </div>
    )
}

export default Header