import { CallRounded, EmailRounded, GitHub, KeyboardArrowRight, MyLocation } from '@mui/icons-material';
import { Container } from '@mui/material';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {

  return (

    <div id='contact' className=' bg-gradient-to-bl to-slate-900 from-[#00826c] py-5'>
      <Container className=' grid grid-cols-1 gap-3 text-white p-4 w-full h-auto'>
        <h1 className=' text-xl font-semibold uppercase mb-5'><span className=' underline underline-offset-8'>Contact</span> Us</h1>

        <section className='grid lg:grid-cols-12 gap-5 grid-cols-1 h-auto'>
          {/* address grid  */}
          <div className='flex flex-col gap-5 md:col-span-4'>
            <div className=' flex items-center overflow-hidden'>
              <img src=" /arifsbd/images/logo.png" alt="..." className=' object-cover w-28 ' loading='lazy'/>
              <h1 className=' text-base font-bold'> (Bangladesh) Limited</h1>
            </div>
            <div className='text-sm flex gap-5'>
              <MyLocation className=' bg-theme p-1 rounded-full ' />
              <div>
                {/* <span className=' font-bold'>Address:</span> */}
                <p className=' text-sm'>18 Rajuk Avenue (7th Fl), Motijheel C/A, Dhaka-1000, Bangladesh</p>
              </div>
            </div>
            <div className='text-sm flex gap-5'>
              <EmailRounded className=' bg-theme p-1 rounded-full ' />
              <div className=' group cursor-pointer'>
                <span className=' font-bold'>Email : </span>
                <Link className=' text-sm group-hover:underline '> arifs@dhaka.net</Link>
              </div>
            </div>
            <div className='text-sm flex gap-5'>
              <CallRounded className=' bg-theme p-1 rounded-full ' />
              <div>
                <p><span className=' font-bold'>Tel : </span> +88-02-41053435, +88-02-41053436, +88-02-41053437, +88-02-41053438 <span className=' font-bold'> & FAX : </span> +88-02-41053288</p>
              </div>
            </div>
          </div>

          {/* map grid */}
          <div className=' lg:col-span-4 flex justify-center items-end'>
            <iframe
              className=" rounded-lg w-full min-h-full h-52"
              title="Arifs (Bangladesh) Ltd"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.26936669020685!2d90.40802717220028!3d23.736327095054584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f48430033f%3A0x73683be2a43b3c1b!2sPioneer%20Law%20Associates!5e0!3m2!1sen!2sbd!4v1689211247540!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Navigation  grid*/}
          <div className=' md:col-span-4 grid grid-cols-5 gap-3 text-sm h-full'>
            <div className=' col-span-2 '>
              <h1 className='underline underline-offset-4 md:text-xl text-lg font-medium mb-3'>Navigate to</h1>
              <nav className=' flex flex-col justify-start items-start'>
                {
                  (["Home", "Products", "Gallery"]).map((item) => (
                    <Link key={item} className=' group flex justify-center items-center gap-3 group py-1 text-sm'> <KeyboardArrowRight className=' text-sm group-hover:translate-x-2 duration-300 transition-all ease-linear' /> {item} </Link>
                  ))
                }
              </nav>
            </div>

            {/* important grid */}
            <div className=' col-span-3'>
              <h1 className='underline underline-offset-4 md:text-xl text-lg font-medium mb-3'>Sister Concern</h1>
              <nav className=' flex flex-col justify-start items-start '>
                {
                  (["AG Noble (Bangladesh) LTD", "Orbit Agrovet Limited"]).map((item) => (
                    <Link key={item} className=' text-sm group flex justify-center items-center gap-3 group py-2' target='_blank'> <KeyboardArrowRight className=' text-sm group-hover:translate-x-2 duration-300 transition-all ease-linear' /> {item} </Link>
                  ))
                }
              </nav>
            </div>
          </div>
        </section>

        {/* copyright section */}
        <section className='flex flex-wrap justify-end items-center text-xs gap-1 md:mt-5 mt-3'>
          <h1>© Copyright 2023, Arifs (BD) LTD. All rights Reserved; </h1>
          <Link to="https://github.com/ibrahimk4111" className=' flex items-center gap-2 px-2' target='_blank'> Developed by : <GitHub className=' text-lg' /></Link>
        </section>
      </Container>
    </div>
  )
}

export default Footer