import { KeyboardArrowDown, ShoppingCart } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, MenuItem, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
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
                        <Link to={`/products_company/${item.company_name}`} key={index} className="transition-all duration-300">
                            <MenuItem className=" h-10 hover:bg-theme hover:text-white transition duration-300 ease-in text-black text-sm " >{item.company_name}</MenuItem>
                        </Link>
                    ))
                }
            </Typography>
        </div>
    )
}

const ProductDrawerBar = ({toggleDrawer}) => {
    const { productNavItem } = useContext(UserContext)
    return (
        <div>
            <Accordion className=' shadow-none bg-bodyColor'>
                <AccordionSummary
                    expandIcon={<KeyboardArrowDown />}
                    className=" hover:bg-theme hover:text-white flex justify-start items-center gap-2 rounded-lg text-black"
                >
                    <Box className="flex justify-center items-center gap-2">
                        <ShoppingCart className=" text-xl " />
                        <Typography>Products</Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        productNavItem && productNavItem.map((item, index) => (
                            <Link onClick={toggleDrawer} to={`/products_company/${item.company_name}`} key={index} className="transition-all duration-300">
                                <MenuItem className=" p-1 h-10 hover:bg-theme hover:text-white transition duration-300 ease-in text-black text-sm rounded-lg" >{item.company_name}</MenuItem>
                            </Link>
                        ))
                    }
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export { ProductNavBar, ProductDrawerBar }