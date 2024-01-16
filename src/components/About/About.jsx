import { Container } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UserContext } from '../context/Context'

const About = () => {
    const { variants } = useContext(UserContext)

    return (
        <div className='lg:py-16 py-5'>
            <Container className=' grid lg:grid-cols-12 grid-cols-1 lg:gap-10 gap-5'>
                <motion.div
                    className=' flex justify-center items-center lg:col-span-6'
                    initial="hidden"
                    whileInView="visible"
                    variants={variants}
                    custom={-2}
                    viewport={{ once: true }}
                >
                    <video autoPlay muted loop className='h-auto w-auto max-h-full max-w-full rounded-lg shadow-lg shadow-slate-400 '>
                        <source src="/arifsbd/images/video.mp4" type="video/mp4" />
                        <h1>video</h1>
                    </video>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={variants}
                    custom={2}
                    viewport={{ once: true }}
                    className=' lg:col-span-6 '
                >
                    <div className=' flex flex-col justify-center items-start mb-3'>
                        {/* <h1 className=' text-xl font-semibold uppercase text-theme  underline underline-offset-8'>About</h1> */}
                        <div className=' text-lg font-semibold uppercase mt-3'>Arifs (Bangladesh) Limited</div>
                    </div>
                    <div className=' text-sm text-justify text-slate-700  [word-spacing:3px] leading-7 '>
                        <p>Arifs (Bangladesh) Limited is a young, dynamic company born in 1989 and is now a leading Distributor of Veterinary medicines, vaccines, Livestock nutritional products and equipments throughout the country.</p>
                        <p className=' md:block hidden'>One philosophy, that of high yield, has contributed to our continued growth and established our professional reputation, dedication, product selection and technological expertise is reflected in every aspect of Arifs activities. Our philosophy had been and always will be to serve our customers with value and assurance.</p>
                    </div>
                    <Link to="/about/profile" >
                        <button style={{ backgroundImage: `url(/arifsbd/images/blob.gif)` }} className=' bg-cover h-16 w-16 text-white mt-3'><h1 className=' text-xs '>Details</h1></button>
                    </Link>
                </motion.div>
            </Container>
        </div>
    )
}
export default About