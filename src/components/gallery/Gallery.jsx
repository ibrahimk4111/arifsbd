import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { Box, CircularProgress, Container, Accordion, AccordionSummary, AccordionDetails, IconButton, Typography } from '@mui/material'
import { FormatQuoteOutlined, KeyboardArrowDown, ListAltRounded } from '@mui/icons-material'
import { HashLink as Link } from 'react-router-hash-link'


const Gallery = () => {
    const { galleryData } = useContext(UserContext)
    // console.log( galleryData )

    return (
        <div id='gallery' className=' bg-gradient-to-t from-slate-900 to-theme bg-fixed py-10 '>
            <Container >
                <div className='flex flex-col'>
                    <div className=' flex justify-between items-center '>
                        <div className='relative w-full'>
                            <FormatQuoteOutlined className='absolute lg:-top-5 -top-3 left-0 text-white lg:text-6xl text-4xl rotate-180 blur-[2px]' />
                            <h1 className='lg:ml-20 ml-14 uppercase font-semibold text-xl text-white'> Event Images </h1>
                        </div>
                        <Link to="/gallerypage" className=' text-sm text-center text-white w-28 hover:bg-slate-700 rounded-lg p-1 transition duration-300 ease-in '> see more </Link>
                    </div>
                    <hr className=' h-[1px] bg-slate-300 my-2 rounded-full w-full' />
                    <h1 className=' lg:w-[80%] w-full text-justify py-5 text-white'>Every year we arrange and participate several international functions and events to develop agricultural growth of Bangladesh. </h1>
                </div>

                {galleryData && galleryData.length > 0 ?
                    (
                        <section className=' flex flex-col gap-5 '>
                            {
                                galleryData.map((event, index) => (  
                                    <Accordion key={index}>
                                        <AccordionSummary className=' bg-[#415f5f] flex justify-center items-center ' expandIcon={<KeyboardArrowDown className=' text-white ' />}>
                                            <IconButton>
                                                <ListAltRounded className='text-white' />
                                            </IconButton>
                                            <Box className="flex justify-center items-center">
                                                <Typography className=' lg:text-lg text-sm text-white uppercase px-2'> {event.name} </Typography>
                                            </Box>
                                        </AccordionSummary>
                                        <hr className=' h-0 bg-slate-300 mb-5 mt-2 rounded-full' />
                                        <AccordionDetails className=' grid lg:grid-cols-4 grid-cols-2 gap-3 overflow-y-auto max-h-[55vh]'>
                                            {event.imgs && (event.imgs).map((img, index) => (
                                                <div key={index} className=' overflow-hidden relative w-full '>
                                                    <img src={`${img}`} alt=".." className=' object-cover rounded-md w-full' loading='lazy'/>
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