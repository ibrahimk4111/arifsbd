import { CloseRounded, KeyboardArrowDown } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const WhyChooseUs = () => {

    const [progress, setProgress] = useState(1);

    // useEffect(() => {
    const timer = () => {
        setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 93 ? prevProgress = 93 : prevProgress + 1));
        }, 80);
    }
    //     timer()
    // }, [])



    const [isVisible, setIsVisible] = useState(false)
    const [isVisible2, setIsVisible2] = useState(false)
    const [isVisible3, setIsVisible3] = useState(false)
    const [isVisible4, setIsVisible4] = useState(false)

    return (
        <Container className=' py-10 '>

            <div className=' grid lg:grid-cols-12 grid-cols-1 gap-5 py-5 '>
                <div className='lg:col-span-7'>
                    <p className=' pb-7 lg:text-3xl text-4xl lg:[word-spacing:3px] lg:leading-relaxed leading-loosed font-semibold'>
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
                        <p className=' rounded-md p-3 lg:text-3xl text-4xl lg:[word-spacing:3px] lg:leading-relaxed leading-loosed mt-5 bg-slate-100'>Get a free quote here</p>
                        <p className=' text-base [word-spacing:3px] leading-7 py-5 px-3 text-justify'>We understand the importance of every inquiry, we cater each request with utmost interest and concern. </p>
                    </div>
                    <div className=' grid grid-cols-1 gap-8'>
                        <div
                            className=' flex lg:flex-row flex-col justify-center items-center gap-5'
                        >
                            <div>
                                <Progress
                                    type="circle"
                                    percent={progress}
                                    width={100}
                                    // symbol={progress}
                                    theme={
                                        {
                                            active: {
                                                symbol: progress + '%',
                                                trailColor: 'yellow',
                                                color: 'orange'
                                            }
                                        }
                                    }
                                />
                            </div>
                            <div className=' flex flex-col justify-center lg:items-start items-center'>
                                <h2 className=' text-2xl font-semibold mb-2'>Quality of Service</h2>
                                <p className='[word-spacing:3px] leading-7 text-sm lg:text-left text-center'>Our commitment is to deliver top-quality minerals, guaranteeing satisfaction, trust, and loyalty among our valued customers.</p>
                            </div>
                        </div>
                        <motion.div
                            whileInView={timer}
                            className=' flex lg:flex-row flex-col justify-center items-center gap-5'
                        >
                            <div>
                                <Progress
                                    type="circle"
                                    percent={progress + 2}
                                    width={100}
                                    // symbol={progress}
                                    theme={
                                        {
                                            active: {
                                                symbol: (progress + 2) + '%',
                                                trailColor: 'yellow',
                                                color: 'orange'
                                            }
                                        }
                                    }
                                />
                            </div>
                            <div className=' flex flex-col justify-center lg:items-start items-center'>
                                <h2 className=' text-2xl font-semibold mb-2'>Purity</h2>
                                <p className='[word-spacing:3px] leading-7 text-sm lg:text-left text-center'>High purity Egyptian minerals, prized for their quality, cater to industries worldwide, meeting stringent standards and demands.</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </Container>
    )
}

export default WhyChooseUs