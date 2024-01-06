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
    <div id='partners' className='py-5'>
      <Container >
        <div className='relative w-full'>
          <h1 className='uppercase font-semibold text-xl text-slate-400'> Our Partners </h1>
        </div>
        <hr className=' h-[1px] bg-slate-300 my-2 rounded-full w-full' />

        <Swiper
          speed={1300}
          freeMode={true}
          autoplay={{
            delay: 1000,
            reverseDirection: true,
            disableOnInteraction: false
          }}
          breakpoints={{
            0: {
              spaceBetween: 5,
              slidesPerView: 2.2
            },
            640: {
              spaceBetween: 10,
              slidesPerView: 4.2
            },
            768: {
              spaceBetween: 15,
              slidesPerView: 5.2
            },
            1024: {
              spaceBetween: 20,
              slidesPerView: 6.2
            }
          }}
          modules={[Autoplay, FreeMode]}
          className="py-5 px-2"
        >
          {
            partnerData && partnerData.map((item, index) => (
              <SwiperSlide key={index} className=' h-auto'>
                <Link>
                  <div className=' flex justify-center items-center h-20 overflow-hidden rounded-md shadow shadow-slate-400 '>
                    <img src={`${item.img}`} alt={item.id} className=' object-cover max-h-full max-w-full w-auto h-auto' loading='lazy'/>
                  </div>
                  <h1 className=' text-xs mt-2 text-slate-500 '>{item.name}</h1>
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Container>
    </div>
  )
}

export default Partners
