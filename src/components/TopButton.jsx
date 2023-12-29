import { KeyboardArrowUp } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'

const TopButton = () => {

    const [isVisible, setVisible] = useState(false)

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.onscroll = () => {
        if (document.documentElement.scrollTop > 300) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    }

    return (
        <div>
            <div className=' fixed bottom-5 right-5 z-50 cursor-pointer'>
                <KeyboardArrowUp onClick={backToTop} className={` ${isVisible ? "block" : "hidden"} text-3xl p-1 bg-white text-[#00cba9] hover:scale-125 rounded-full shadow shadow-theme transition-all duration-300 ease-in`}/>
            </div>
        </div>
    )
}

export default TopButton