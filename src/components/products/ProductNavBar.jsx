import { KeyboardArrowDown, ShoppingCart } from '@mui/icons-material'
import { MenuItem, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { HashLink } from 'react-router-hash-link'
import { UserContext } from '../context/Context'

const ProductNavBar = () => {

    const { productNavItem } = useContext(UserContext)

    return (
        <div>
            <MenuItem
                className=" hover:bg-theme text-white hover:text-black rounded-lg overflow-hidden flex gap-1 "
            >
                <ShoppingCart className=" text-lg " />
                <Typography className=" text-sm font-semibold ">Products</Typography>
                <KeyboardArrowDown />
            </MenuItem>
            <Typography
                className=" hidden group-hover:block absolute top-9 bg-slate-100 shadow-lg rounded-lg z-10"
            >
                {
                    productNavItem && productNavItem.map((item, index) => (
                        <HashLink key={index} className="transition-all duration-300">
                            <MenuItem className=" h-10 hover:bg-theme hover:text-white transition duration-300 ease-in text-black text-sm " >{item.company_name}</MenuItem>
                        </HashLink>
                    ))
                }
            </Typography>
        </div>
    )
}

export default ProductNavBar