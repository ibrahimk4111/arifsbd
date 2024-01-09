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
        <img src=" /arifsbd/images/logo.png" alt="..." className=' object-cover lg:w-32 w-16 ' />
        <h1 className=' md:text-2xl text-base '> (Bangladesh) Limited</h1>
      </div>

      {/* top nav right */}
      <div className=" group relative ">
        <MenuItem
          onClick={()=>setIsOpen(!isOpen)}
          className=" hover:bg-theme text-black hover:text-white rounded-lg overflow-hidden flex gap-1 px-1 shadow "
        >
          <Typography className=' text-xs '>Sister Conserns</Typography>
          <KeyboardArrowDown />
        </MenuItem>
        <Typography
          className={`z-[1000] scale-0 lg:group-hover:scale-100 flex flex-col transition duration-300 divide-y-2 divide-white absolute right-0 bg-slate-100 shadow-lg rounded-lg ${isOpen ? "scale-100": "scale-0"}`}
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