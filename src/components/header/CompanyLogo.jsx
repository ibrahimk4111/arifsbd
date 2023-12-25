import React, { useState } from 'react';
import { Container, Button, MenuItem, Typography } from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link'
import { KeyboardArrowDown } from '@mui/icons-material';

export default function CompanyLogo() {

  const [isOpen, setIsOpen] = useState(false)

  const sisterConcerns = [{
    "link": "/",
    "name": "AG Noble (Bangladesh) LTD"
  },
  {
    "link": "/",
    "name": "Orbit Agrovet Limited"
  }]

  return (
    <Container className=' flex justify-between items-center p-2'>
      {/* top nav left */}
      <div className=' flex items-center overflow-hidden col-span-2'>
        <img src=" /arifsbd/images/logo.png" alt="..." className=' object-cover lg:w-32 w-20 ' />
        <h1 className=' md:text-2xl text-base font-bold'> <span className=' text-theme '>(Bangladesh)</span> Limited</h1>
      </div>

      {/* top nav right */}
      <div className=" group relative ">
        <MenuItem
          onClick={()=>setIsOpen(!isOpen)}
          className=" hover:bg-theme text-black hover:text-white rounded-lg overflow-hidden flex gap-1 px-1 "
        >
          <Typography className=' text-sm '>Sister Conserns</Typography>
          <KeyboardArrowDown />
        </MenuItem>
        <Typography
          className={`z-50 lg:hidden lg:group-hover:block absolute right-0 bg-bodyColor shadow-lg rounded-lg ${isOpen ? "block": "hidden"}`}
        >
          {
            sisterConcerns.map((item, index) => (
              <Link to={item.link} key={index}>
                <MenuItem className=" hover:bg-theme text-black hover:text-white rounded-lg text-sm "
                >{item.name}</MenuItem>
              </Link>
            ))
          }
        </Typography>
      </div>
    </Container>
  );
}