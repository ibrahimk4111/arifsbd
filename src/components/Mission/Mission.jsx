import { Container } from '@mui/material';
import React, { useContext } from 'react';
import { motion } from "framer-motion";
import { UserContext } from '../context/Context';

const Mission = () => {
    const { variants } = useContext(UserContext)
    return (
        <div className='py-10 relative mb-16' >
            {/* <div className=' absolute top-0 left-0 h-[100vh] w-full blur-xl' style={{backgroundImage: `url(/arifsbd/images/55slider.jpg)`, backgroundSize: 'cover'}}></div> */}
            <Container >
                <div className='grid grid-cols-12' >
                    <div className=' lg:col-span-9 col-span-12 grid grid-cols-1 gap-3 ' >
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            variants={variants}
                            custom={1}
                            viewport={{ once: true }}
                            exit="hidden"
                            className=' shadow shadow-slate-400 p-5 bg-white rounded-md '
                        >
                            <h2 className=' text-xl text-theme font-semibold'>Our Mission & Vission</h2>
                            <hr className=' h-1 mb-5 border-slate-400 mt-2' />
                            <div className=' flex flex-col gap-2 text-sm tracking-wide text-justify [word-spacing:3px] leading-7'>
                                <p>Our Mission is to bring animal healthcare & nutritional product must be of international standards within the reach of every poultry & livestock farmers.</p>
                                <p>We are always ready to assist our livestock sector with the widest range of solution from disease control to quality nutrition with a track recode of over 34 years.</p>
                                <p>Our aim is to remain moderate, flexible and cost effective. We provide our customer with a one source supply of world class products at cost effective price.</p>
                                <p>With the new business strategy to focus more on sales and marketing, Arifs is preparing for the future. We are pleased to be able to participate actively in this progress. Focusing on partnerships, our mission is to offer you not only the best product solutions available in the market at any time; it is also to work closely with you to stay ahead of the competition. We believe the foundation of a successful partnership with you is our contribution of know-how and innovative products and services, handled by a dedicated and experienced team of specialists, cooperating with you to advance our mutual interests and amplify our success.</p>
                                <p>Our vision is to be recognized Arifs as a leader in animal health care product, valued by farmers, veterinarians, nutritionist, distributor, retailer, respected by the animal health care community, sought after as an employer and admired by our competitors.</p>
                            </div>
                        </motion.section>
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            variants={variants}
                            custom={2}
                            viewport={{ once: true }}
                            className=' shadow shadow-slate-400 p-3 bg-white rounded-md '
                        >
                            <h2 className=' text-xl text-theme font-semibold'>Our Purpose</h2>
                            <hr className=' h-1 mb-5 border-slate-400 mt-2' />
                            <div className=' flex flex-col gap-2 text-sm tracking-wide text-justify [word-spacing:3px] leading-7'>
                                <p>To produce high quality chicks and feed so that poultry farmers can be productive and prosperous.</p>
                                <p>To produce safe eggs and chicken which consumers can eat with confidence.</p>
                                <p>To produce organic fertilizer which replenishes the organic content of the soil, increases long-term fertility and protects farmers' profits.</p>
                            </div>
                        </motion.section>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Mission