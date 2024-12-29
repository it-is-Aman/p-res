import React from 'react'
import FooterContent from './FooterContent'

function Footer() {
    return (
        <div
            className='relative h-[800px]'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='fixed bottom-0 h-[800px] w-full'>
                <FooterContent />
            </div>
        </div>
    )
}

export default Footer