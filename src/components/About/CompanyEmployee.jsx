import React, { useContext } from 'react'
import { motion } from "framer-motion"
import { UserContext } from '../context/Context'
import { Container } from '@mui/material'

export const Item = () => {
  const { variants } = useContext(UserContext)
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      custom={-2}
      viewport={{ once: true }}
      className='shadow shadow-slate-300 rounded p-2 h-auto '
    >
      <div className='grid grid-cols-12 gap-3 '>
        <div className=' lg:col-span-4 col-span-5 overflow-hidden h-full '>
          <img src="/arifsbd/images/karif.jpg" alt="..." className='  w-auto h-auto ' />
        </div>
        <div className=' lg:col-span-8 col-span-7 pr-4 lg:flex-none flex flex-col justify-end'>
          <h1 className=' text-lg uppercase font-semibold mb-2 '>K.K Arif</h1>
          <p className=' text-sm font-semibold'>Managing Director </p>
          <p className=' text-sm '>Email: cdm@dhaka.net</p>
        </div>
      </div>
    </motion.div>
  )
}

const CompanyEmployee = () => {

  return (
    <div className=' py-5 '>
      <Container>
        <div className=' grid lg:grid-cols-3 grid-cols-1 gap-3 '>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </div>
      </Container>
    </div>
  )
}

export default CompanyEmployee