import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { Box, CircularProgress, Container, Accordion, AccordionSummary, AccordionDetails, IconButton, Typography } from '@mui/material'
import { Event, EventOutlined, FormatQuoteTwoTone, ImageAspectRatio, ImagesearchRoller, KeyboardArrowDown, ListAlt, ListAltRounded } from '@mui/icons-material'


const Gallery = () => {
    const { galleryData } = useContext(UserContext)

    return (
        <div className=' bg-gradient-to-t from-slate-900 to-theme bg-fixed '>
            <Container id='gallery' className='md:py-10 py-5'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='relative w-full'>
                        <FormatQuoteTwoTone className='absolute md:-top-5 -top-3 left-0 text-[#00cba9] opacity-30 md:text-6xl text-2xl rotate-180 blur-[2px]' />
                        <h1 className='md:ml-20 ml-5 uppercase font-semibold text-2xl text-white'> Event Images </h1>
                    </div>
                    <hr className=' h-[1px] bg-slate-300 my-2 rounded-full w-full' />
                    <h1 className=' w-[80%] text-justify py-5 text-white'>Every year we arrange and participate several international functions and events to develop agricultural growth of Bangladesh. </h1>
                </div>

                {galleryData.length > 0 ?
                    (
                        <section >
                            {
                                galleryData.map((event, index) => (
                                    <Accordion key={index} >
                                        <AccordionSummary className=' bg-[#415f5f] flex justify-center items-center ' expandIcon={<KeyboardArrowDown className=' text-white '/>}>
                                            <IconButton>
                                                <ListAltRounded className='text-white' />
                                            </IconButton>
                                            <Box className="flex justify-center items-center">
                                                <Typography className=' md:text-lg text-sm text-white uppercase px-2'> {event.name} </Typography>
                                            </Box>
                                        </AccordionSummary>
                                        <hr className=' h-0 bg-slate-300 mb-5 mt-2 rounded-full' />
                                        <AccordionDetails className=' grid lg:grid-cols-3 grid-cols-1 gap-3 overflow-y-auto max-h-[70vh]'>
                                            {event.imgs && (event.imgs).map((img, index) => (
                                                <div key={img} className=' overflow-hidden relative w-full '>
                                                    <img src={`/arifsbd/${img}`} alt=".." className=' object-cover rounded-md w-full' />
                                                    <div className=' absolute top-0 left-0 w-full h-full flex justify-center items-end '>
                                                        <div className='w-full bg-gradient-to-t from-black rounded-b-md p-2 text-white '>
                                                            <h1 className=' w-full text-end'>{index + 1}</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </AccordionDetails>
                                    </Accordion>
                                ))
                            }
                        </section>
                    ) : (
                        <div className='w-full h-[30vh] flex justify-center items-center'>
                            <Box sx={{ display: 'flex' }}>
                                <CircularProgress />
                            </Box>
                        </div>
                    )
                }
            </Container>
        </div>
    )
}

export default Gallery