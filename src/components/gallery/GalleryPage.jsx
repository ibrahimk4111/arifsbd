import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { Box, CircularProgress, Container, Accordion, AccordionSummary, AccordionDetails, IconButton, Typography } from '@mui/material'
import { FormatQuoteOutlined, KeyboardArrowDown, ListAltRounded } from '@mui/icons-material'
import { HashLink as Link } from 'react-router-hash-link'


const GalleryPage = () => {
    const { galleryData } = useContext(UserContext)
    // console.log( galleryData )

    return (
        <div className=' py-10 my-5'>
            <Container >
                <div className='flex flex-col'>
                    <div className=' flex justify-between items-center '>
                        <div className='relative w-full'>
                            <FormatQuoteOutlined className='absolute md:-top-5 -top-3 left-0 md:text-6xl text-2xl rotate-180 blur-[3px]' />
                            <h1 className='lg:ml-20 ml-7 uppercase font-semibold text-xl '> Event Images </h1>
                        </div>
                        <Link to="/gallery" className=' hover:text-white text-center w-24 hover:bg-slate-700 rounded-lg p-1 transition duration-300 ease-in '> see more </Link>
                    </div>
                    <hr className=' h-[1px] bg-slate-300 my-2 rounded-full w-full' />
                    <h1 className=' lg:w-[80%] w-full text-justify py-5 '>Every year we arrange and participate several international functions and events to develop agricultural growth of Bangladesh. </h1>
                </div>

                {galleryData && galleryData.length > 0 ?
                    (
                        <section >
                            {
                                galleryData.map((event, index) => (
                                    <Accordion key={index} >
                                        <AccordionSummary className=' bg-[#415f5f] flex justify-center items-center ' expandIcon={<KeyboardArrowDown className=' text-white ' />}>
                                            <IconButton>
                                                <ListAltRounded className='text-white' />
                                            </IconButton>
                                            <Box className="flex justify-center items-center">
                                                <Typography className=' md:text-lg text-sm text-white uppercase px-2'> {event.name} </Typography>
                                            </Box>
                                        </AccordionSummary>
                                        <hr className=' h-0 bg-slate-300 mb-5 mt-2 rounded-full' />
                                        <AccordionDetails className=' grid lg:grid-cols-4 grid-cols-2 gap-3 overflow-y-auto max-h-[70vh]'>
                                            {event.imgs && (event.imgs).map((img, index) => (
                                                <div key={index} className=' overflow-hidden relative w-full '>
                                                    <img src={`${img}`} alt=".." className=' object-cover rounded-md w-full' />
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

export default GalleryPage