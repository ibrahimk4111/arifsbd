import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { Container } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css"
import { Link } from 'react-router-dom';

const Partners = () => {
  const { partnerData } = useContext(UserContext)
  // console.log( partnerData )

  return (
    <div id='partners' className='pt-10'>
      <Container className='bg-slate-100 py-5 rounded-lg' >
        <div className='relative w-full'>
          <h1 className='uppercase font-semibold text-xl text-slate-400'> Our Partners </h1>
        </div>
        <hr className=' h-[2px] bg-theme my-2 rounded-full w-full mb-5' />

        <Swiper
          speed={1300}
          freeMode={true}
          autoplay={{
            delay: 1000,
            // reverseDirection: true,
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
          className="p-2"
        >
          {
            partnerData && partnerData.map((item, index) => (
              <SwiperSlide key={index} className=' h-auto '>
                <Link to={item.website} target='_blank'>
                  <div className=' bg-white grid lg:grid-cols-12 grid-cols-1 justify-center items-center gap-2 shadow shadow-slate-400 rounded-md lg:h-full h-auto'>
                    <div className=' col-span-4 flex justify-center items-center h-16 overflow-hidden '>
                      <img src={`${item.img}`} alt={index+1} className=' object-cover w-auto h-auto max-h-full p-1' loading='lazy' />
                    </div>
                    <h1 className=' col-span-8 lg:block hidden text-xs text-slate-500 p-1'>{item.name}</h1>
                  </div>
                  <h1 className='lg:hidden block text-xs text-slate-500 p-1 mt-2'>{item.name}</h1>
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Container>
      <div className=' text-center mt-5 text-2xl text-slate-400'>&</div>
    </div>
  )
}

export default Partners
