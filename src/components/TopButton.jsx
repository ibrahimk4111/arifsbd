import { KeyboardArrowUp } from '@mui/icons-material'
import React, { useContext } from 'react'
import { UserContext } from './context/Context'

const TopButton = () => {

    const {isVisible} = useContext(UserContext)
    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }


    return (
        <div>
            <div className=' fixed bottom-16 right-5 z-50 cursor-pointer'>
                <KeyboardArrowUp onClick={backToTop} className={` ${isVisible ? "block" : "hidden"} text-3xl p-1 bg-white text-[#00cba9] hover:scale-125 rounded-full shadow shadow-theme transition-all duration-300 ease-in`}/>
            </div>
        </div>
    )
}

export default TopButton