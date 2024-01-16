import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { Container } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css"
import { Link } from 'react-router-dom';

const Clients = () => {
    const { partnerData } = useContext(UserContext);
    const ourClients = partnerData;

    return (
        <div id='partners' className='pb-10 pt-5'>
            <Container className=' bg-slate-100 py-5 rounded-lg'>
                <div className='relative w-full'>
                    <h1 className='uppercase font-semibold text-xl text-slate-400'> Our Clients </h1>
                </div>
                <hr className=' h-[2px] bg-theme my-2 rounded-full w-full mb-5' />

                {/* <Swiper
          speed={1300}
          freeMode={true}
          autoplay={{
            delay: 1000,
            reverseDirection: true,
            disableOnInteraction: false
          }}
          breakpoints={{
            0: {
              spaceBetween: 10,
              slidesPerView: 2.2
            },
            640: {
              spaceBetween: 10,
              slidesPerView: 2.2
            },
            768: {
              spaceBetween: 10,
              slidesPerView: 3.2
            },
            1024: {
              spaceBetween: 10,
              slidesPerView: 4.2
            }
          }}
          modules={[Autoplay, FreeMode]}
          className="pt-5 px-2 pb-2"
        > */}
                <section className=' grid lg:grid-cols-8 grid-cols-4 justify-center items-center gap-3 p-2'>
                    {
                        ourClients && ourClients.map((item, index) => (
                            // <SwiperSlide key={index} className=' h-auto '>
                            <Link key={index} to={item.website} target='_blank'>
                                <div title={item.name} className='w-full  bg-white rounded-md group'>
                                    <div className=' shadow shadow-slate-400 rounded-md lg:h-full h-auto'>
                                        <div className=' col-span-4 flex justify-center items-center h-14 overflow-hidden '>
                                            <img src={`${item.img}`} alt={index + 1} className='object-cover w-auto h-auto max-h-full p-1' loading='lazy' />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            // </SwiperSlide>
                        ))
                    }
                </section>
                {/* </Swiper> */}
            </Container>
        </div>
    )
}

export default Clients
