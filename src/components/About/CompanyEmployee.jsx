import React, { useContext } from 'react'
import { motion } from "framer-motion"
import { UserContext } from '../context/Context'
import { Container } from '@mui/material'

const items = [
  {
    "name": "MR. K.K. ARIF",
    "img": "images/karif.jpg",
    "designation": "Managing Director",
    "email": "cdm@dhaka.net"
  },
  {
    "name": "MR. S.A. KHAN",
    "img": "images/karif.jpg",
    "designation": "Executive Director",
    "email": "arifs@dhaka.net"
  },
  {
    "name": "DR. ADHIR R. DAS",
    "img": "images/karif.jpg",
    "designation": "Sr. Technical Manager",
    "email": "adhir@arifs_bd.com"
  }, {
    "name": "MR. P. K.DATTA (Apu)",
    "img": "images/karif.jpg",
    "designation": "G.M – Operations",
    "email": "apu@arifs_bd.com, pronaydatta@gmail.com"
  },
  {
    "name": "MR. K.K. ARIF",
    "img": "images/karif.jpg",
    "designation": "Managing Director",
    "email": "cdm@dhaka.net"
  },
  {
    "name": "MR. S.A. KHAN",
    "img": "images/karif.jpg",
    "designation": "Executive Director",
    "email": "arifs@dhaka.net"
  },
  {
    "name": "DR. ADHIR R. DAS",
    "img": "images/karif.jpg",
    "designation": "Sr. Technical Manager",
    "email": "adhir@arifs_bd.com"
  }, {
    "name": "MR. P. K.DATTA (Apu)",
    "img": "images/karif.jpg",
    "designation": "G.M – Operations",
    "email": "apu@arifs_bd.com, pronaydatta@gmail.com"
  },
  {
    "name": "MR. K.K. ARIF",
    "img": "images/karif.jpg",
    "designation": "Managing Director",
    "email": "cdm@dhaka.net"
  },
  {
    "name": "MR. S.A. KHAN",
    "img": "images/karif.jpg",
    "designation": "Executive Director",
    "email": "arifs@dhaka.net"
  },
  {
    "name": "DR. ADHIR R. DAS",
    "img": "images/karif.jpg",
    "designation": "Sr. Technical Manager",
    "email": "adhir@arifs_bd.com"
  }, {
    "name": "MR. P. K.DATTA (Apu)",
    "img": "images/karif.jpg",
    "designation": "G.M – Operations",
    "email": "apu@arifs_bd.com, pronaydatta@gmail.com"
  }
]

const CompanyEmployee = () => {
  const { variants } = useContext(UserContext)

  return (
    <div className=' py-5 '>
      <Container>
        <div className=' grid lg:grid-cols-3 grid-cols-1 gap-3 '>
          {
            items.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={variants}
                custom={2}
                viewport={{ once: true }}
                className='shadow shadow-slate-300 rounded p-2 h-auto '
              >
                <h1>{index+1}</h1>
                <div className='grid grid-cols-12 gap-3 '>
                  <div className=' lg:col-span-4 col-span-5 overflow-hidden h-full '>
                    <img src="/arifsbd/images/karif.jpg" alt="..." className='  w-auto h-auto ' />
                  </div>
                  <div className=' lg:col-span-8 col-span-7 pr-2 lg:flex-none flex flex-col justify-end'>
                    <h1 className=' text-lg uppercase font-semibold mb-2 '>{item.name}</h1>
                    <p className=' text-sm font-semibold'>{item.designation}</p>
                    <a href={`mailto:${item.email}`} className=' text-sm '>Email: <span className=' hover:text-theme '>{item.email}</span></a>
                  </div>
                </div>
              </motion.div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default CompanyEmployee