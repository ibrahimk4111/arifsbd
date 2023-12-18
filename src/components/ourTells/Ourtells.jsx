import React, { useContext } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { UserContext } from '../context/Context'

const Ourtells = () => {
    const { variants } = useContext(UserContext)
    return (
        <div className='max-w-[1280px] mx-auto py-10 px-5 '>
            <h1>Our Mission & Vission</h1>
            <hr className=' h-1 bg-slate-300 my-2 rounded-full' />
            <div className=' grid grid-cols-1 gap-5'>
                {/* directors */}
                {/* <div className=' flex justify-around items-center py-3'>
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={variants}
                    custom={1}
                    viewport={{once:true}}
                    className='shadow-2xl shadow-slate-300 rounded-md p-2' >
                        <img src=" /images/karif.jpg" alt="..." className=' md:w-48 w-28 h-auto'/>
                        <h1 className='mt-3 font-bold md:text-2xl text-xl uppercase'>K.K Arif</h1>
                        <h1 className=' md:text-xl text-base'>Managing Director </h1>
                    </motion.div>
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={variants}
                    custom={2}
                    viewport={{once:true}}
                    className='shadow-2xl shadow-slate-300 rounded-md p-2'>
                        <img src=" /images/skhan.jpg" alt="..." className=' md:w-48 w-28 h-auto'/>
                        <h1 className='mt-3 font-bold md:text-2xl text-xl uppercase'>S.A Khan</h1>
                        <h1 className=' md:text-xl text-base'>Executive Director </h1>
                    </motion.div>
                </div> */}
                {/* description */}
                <div className=' flex flex-col md:gap-5 gap-2 mt-5 md:w-[80%] w-full mx-auto md:text-base text-sm'>
                    <p className=' text-justify'>Arifs (Bangladesh) Limited is a young, dynamic company born in 1989 and is now a leading Distributor of Veterinary medicines, vaccines, Livestock nutritional products and equipments throughout the country.</p>
                    <p className=' text-justify'>One philosophy, that of high yield, has contributed to our continued growth and established our professional reputation, dedication, product selection and technological expertise is reflected in every aspect of Arifs activities. Our philosophy had been and always will be to serve our customers with value and assurance.</p>
                    <p className=' text-justify'>Our aim is to remain moderate, flexible and cost effective. We provide our customers with an one-source supply of high quality products at cost effective price.</p>
                    <p className=' text-justify'>This website will enable you to become acquainted with our main product lines. Some of our products have already provided innovative solutions to many of your problems. Arifs will go to extraordinary length to be of help to our customers. After all, that is Arifs understanding of mutually beneficial relationship.</p>
                </div>
            </div>
        </div>
    )
}

export default Ourtells