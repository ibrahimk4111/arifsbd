import { CloseRounded, KeyboardArrowDown, ListAltRounded } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

const WhyChooseUs = () => {

    const [isVisible, setIsVisible] = useState(false)
    const [isVisible2, setIsVisible2] = useState(false)
    const [isVisible3, setIsVisible3] = useState(false)
    const [isVisible4, setIsVisible4] = useState(false)

    return (
        <Container className=' py-10 '>

            <div className=' grid lg:grid-cols-12 grid-cols-1 gap-5 py-5 '>
                <div className='lg:col-span-7'>
                    <p className=' pb-7 lg:text-3xl text-4xl lg:[word-spacing:3px] lg:leading-relaxed leading-loosed'>
                        We are famous for our High Quality Minerals
                    </p>
                    <section className={`flex flex-col gap-5 `}>

                        <Accordion className=' shadow hover:shadow-lg shadow-slate-300 '>
                            <AccordionSummary onClick={() => { setIsVisible(prev => !prev) }} className={`${isVisible ? "bg-theme rounded-t-md text-white" : ""} transition-all duration-300 ease-in h-20`} expandIcon={!isVisible ? <KeyboardArrowDown className=' font-semibold' /> : <CloseRounded />}>
                                <Box>
                                    <Typography className=' text-xl px-2 font-semibold'> 1. What is the price for your mineral offerings ? </Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails className={`${isVisible ? "scale-y-100 opacity-100 " : "scale-y-0 opacity-0"} transition-all duration-300 ease-in border-l-8 border-black p-5 leading-7 text-base`}>
                                <p>Our product prices fluctuate based on particle size and purity, including forms like powder, granules, aggregates, or lumps.</p>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className=' shadow hover:shadow-lg shadow-slate-300 '>
                            <AccordionSummary onClick={() => { setIsVisible2(prev => !prev) }} className={`${isVisible2 ? "bg-theme rounded-t-md text-white" : ""} transition-all duration-300 ease-in h-20`} expandIcon={!isVisible2 ? <KeyboardArrowDown className=' font-semibold' /> : <CloseRounded />}>
                                <Box>
                                    <Typography className=' text-xl px-2 font-semibold'> 2. What is the available payment Options ? </Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails className={`${isVisible2 ? "scale-y-100 opacity-100 " : "scale-y-0 opacity-0"} transition-all duration-300 ease-in border-l-8 border-black p-5 leading-7 text-base`}>
                                <p>Our product prices fluctuate based on particle size and purity, including forms like powder, granules, aggregates, or lumps.</p>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className=' shadow hover:shadow-lg shadow-slate-300 '>
                            <AccordionSummary onClick={() => { setIsVisible3(prev => !prev) }} className={`${isVisible3 ? "bg-theme rounded-t-md text-white" : ""} transition-all duration-300 ease-in h-20`} expandIcon={!isVisible3 ? <KeyboardArrowDown className=' font-semibold' /> : <CloseRounded />}>
                                <Box>
                                    <Typography className=' text-xl px-2 font-semibold'> 3. What is the available delivery Options ? </Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails className={`${isVisible3 ? "scale-y-100 opacity-100 " : "scale-y-0 opacity-0"} transition-all duration-300 ease-in border-l-8 border-black p-5 leading-7 text-base`}>
                                <p>Our product prices fluctuate based on particle size and purity, including forms like powder, granules, aggregates, or lumps.</p>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className=' shadow hover:shadow-lg shadow-slate-300 '>
                            <AccordionSummary onClick={() => { setIsVisible4(prev => !prev) }} className={`${isVisible4 ? "bg-theme rounded-t-md text-white" : ""} transition-all duration-300 ease-in h-20`} expandIcon={!isVisible4 ? <KeyboardArrowDown className=' font-semibold' /> : <CloseRounded />}>
                                <Box>
                                    <Typography className=' text-xl px-2 font-semibold'> 4. How can i track my order status ? </Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails className={`${isVisible4 ? "scale-y-100 opacity-100 " : "scale-y-0 opacity-0"} transition-all duration-300 ease-in border-l-8 border-black p-5 leading-7 text-base`}>
                                <p>Our product prices fluctuate based on particle size and purity, including forms like powder, granules, aggregates, or lumps.</p>
                            </AccordionDetails>
                        </Accordion>


                    </section>
                </div>
                <div className=' lg:col-span-5' >
                    <div>
                        <p className=' rounded-md p-7 lg:text-3xl text-4xl lg:[word-spacing:3px] lg:leading-relaxed leading-loosed bg-slate-200'>Get a free quote here</p>
                        <p className=' text-base [word-spacing:3px] leading-7 p-5'>We understand the importance of every inquiry, we cater each request with utmost interest and concern. </p>
                    </div>
                    {/* <div>
                        <div>
                            <h2>Quality of Service</h2>
                            <p>Our commitment is to deliver top-quality minerals, guaranteeing satisfaction, trust, and loyalty among our valued customers.</p>
                        </div>
                        <div>

                            <h2>Quality of Service</h2>
                            <p>Our commitment is to deliver top-quality minerals, guaranteeing satisfaction, trust, and loyalty among our valued customers.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </Container>
    )
}

export default WhyChooseUs