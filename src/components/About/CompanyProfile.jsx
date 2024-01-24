import React, { useContext } from 'react'
import { motion } from "framer-motion"
import { UserContext } from '../context/Context'
import { Container } from '@mui/material'

const CompanyProfile = () => {
  const { variants } = useContext(UserContext)
  return (
    <Container className='py-10'>

      <div>
        {/* directors */}
        <div className=' grid md:grid-cols-2 grid-cols-1 gap-5'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            custom={-2}
            viewport={{ once: true }}
            className='shadow shadow-slate-300 rounded p-2 h-auto '
          >
            <div className='grid grid-cols-12 gap-5 '>
              <div className=' lg:col-span-4 col-span-5 overflow-hidden h-full '>
                <img src="/arifsbd/images/karif.jpg" alt="..." className='  w-auto h-auto ' loading='lazy'/>
              </div>
              <div className=' lg:col-span-8 col-span-7 pr-4 lg:flex-none flex flex-col justify-end'>
                <h1 className=' text-xl uppercase font-semibold mb-2 font-serif'>K.K Arif</h1>
                <p className=' text-base font-semibold font-serif'>Managing Director </p>
                <p className=' text-sm'>Email: cdm@dhaka.net</p>
                <hr className=' h-1 border-slate-300 my-2 rounded-full' />
                <p className=' lg:block hidden text-sm text-justify  [word-spacing:4px] leading-6'>Lorem ips quia? lore Eum, consequuntur dignissimos libero, explicabo necessitatibus, repudiandae repellat eaque delectus ut odit veniam soluta consequatur.</p>
              </div>
            </div>
            <p className=' lg:hidden block mt-3 text-sm text-justify [word-spacing:4px] leading-6'>Lorem ips quia? lore Eum, consequuntur dignissimos libero, explicabo necessitatibus, repudiandae repellat eaque delectus ut odit veniam soluta consequatur.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            custom={2}
            viewport={{ once: true }}
            className='shadow shadow-slate-300 rounded p-2 h-auto '
          >
            <div className='grid grid-cols-12 gap-5 '>
              <div className=' lg:col-span-4 col-span-5 overflow-hidden h-full '>
                <img src="/arifsbd/images/skhan.png" alt="..." className='  w-auto h-auto ' loading='lazy'/>
              </div>
              <div className=' lg:col-span-8 col-span-7 pr-4 lg:flex-none flex flex-col justify-end'>
                <h1 className=' text-xl uppercase font-semibold mb-2 font-serif'>S.A Khan</h1>
                <p className=' text-base font-semibold font-serif'>Executive Director </p>
                <p className=' text-sm'>Email: arifs@dhaka.net</p>
                <hr className=' h-1 border-slate-300 my-2 rounded-full' />
                <p className=' lg:block hidden text-sm text-justify  [word-spacing:4px] leading-6'>Lorem ips quia? lore Eum, consequuntur dignissimos libero, explicabo necessitatibus, repudiandae repellat eaque delectus ut odit veniam soluta consequatur.</p>
              </div>
            </div>
            <p className=' lg:hidden block mt-3 text-sm text-justify  [word-spacing:4px] leading-6'>Lorem ips quia? lore Eum, consequuntur dignissimos libero, explicabo necessitatibus, repudiandae repellat eaque delectus ut odit veniam soluta consequatur.</p>
          </motion.div>
        </div>

        {/* description */}
        <div className=' flex flex-col md:gap-5 gap-2 mt-5 text-sm p-4  [word-spacing:4px] leading-6'>
          <h2 className=' text-xl text-theme font-semibold'>Company background</h2>
          <hr className=' h-1 border-slate-400 ' />
          <p className=' text-justify'>Arifs (Bangladesh) Limited is a young, dynamic company born in 1989 and is now a leading Distributor of Veterinary medicines, vaccines, Livestock nutritional products and equipments throughout the country.</p>
          <p className=' text-justify'>One philosophy, that of high yield, has contributed to our continued growth and established our professional reputation, dedication, product selection and technological expertise is reflected in every aspect of Arifs activities. Our philosophy had been and always will be to serve our customers with value and assurance.</p>
          <p className=' text-justify'>Our aim is to remain moderate, flexible and cost effective. We provide our customers with an one-source supply of high quality products at cost effective price.</p>
          <p className=' text-justify'>This website will enable you to become acquainted with our main product lines. Some of our products have already provided innovative solutions to many of your problems. Arifs will go to extraordinary length to be of help to our customers. After all, that is Arifs understanding of mutually beneficial relationship.</p>
        </div>
      </div>
    </Container>
  )
}

export default CompanyProfile
