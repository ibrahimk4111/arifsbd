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
        <section className=' grid lg:grid-cols-9 sm:grid-cols-6 grid-cols-4 gap-3 p-2'>
          {
            ourClients && ourClients.map((item, index) => (
              <Link key={index} to={item.website} target='_blank'>
                <div title={item.name} className='w-full bg-white shadow shadow-slate-400 rounded-md group h-auto'>
                  <div className=' flex justify-center items-center h-14 w-28 overflow-hidden '>
                    <img src={`${item.img}`} alt={index + 1} className='object-cover w-auto h-auto max-h-full p-1' loading='lazy' />
                  </div>
                </div>
              </Link>
            ))
          }
        </section>
      </Container>
    </div>
  )
}

export default Clients
