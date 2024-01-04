import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Notifications, KeyboardArrowDown, MenuRounded, ShoppingCart, ContactSupport, House, AccessTimeFilled, Image, PriorityHigh, PeopleAltRounded } from "@mui/icons-material";
import { Box, IconButton, Typography, Badge, MenuItem, Container } from "@mui/material";
import TemporaryDrawer from "./Drawer";
import {ProductNavBar} from "../products/ProductNavBar";


const Navbar = () => {

    return (
        <div className=" mb-2 z-50 ">
            <div className=" bg-theme text-white shadow top-0 w-full shadow-slate-700" >
                <Container className=" flex justify-between items-center">
                    {/* toggle icon */}
                    <Box className=" lg:hidden block">
                        <TemporaryDrawer>
                            <IconButton size="large" className="  text-white">
                                <MenuRounded />
                            </IconButton>
                        </TemporaryDrawer>
                    </Box>
                    
                    {/* main navbar */}
                    <Box className="lg:flex hidden">
                        <Link to='/' >
                            <MenuItem className=" hover:bg-theme text-white hover:text-black transition duration-300 ease-in flex justify-center items-center gap-2 rounded-lg">
                                <House className=" text-lg " />
                                <Typography className=" text-sm font-semibold ">Home</Typography>
                            </MenuItem>
                        </Link>

                        <Box className="z-[1000] group relative">
                            <ProductNavBar/>
                        </Box>

                        <Link smooth to="#partners">
                            <MenuItem className=" hover:bg-theme hover:text-black transition duration-300 ease-in text-white flex justify-center items-center gap-2 rounded-lg">
                                <PeopleAltRounded className=" text-lg " />
                                <Typography className=" text-sm font-semibold ">Partners</Typography>
                            </MenuItem>
                        </Link>

                        <Link to="/mission">
                            <MenuItem className=" hover:bg-theme hover:text-black transition duration-300 ease-in text-white flex justify-center items-center gap-2 rounded-lg">
                                <AccessTimeFilled className=" text-lg " />
                                <Typography className=" text-sm font-semibold ">Mission & Vission</Typography>
                            </MenuItem>
                        </Link>

                        <Box className="z-[1000] group relative">
                            <MenuItem
                                className=" hover:bg-theme text-white hover:text-black transition duration-300 ease-in rounded-lg overflow-hidden flex gap-1"
                            >
                                <PriorityHigh className=" text-lg " />
                                <Typography className=" text-sm font-semibold ">About</Typography>
                                <KeyboardArrowDown />
                            </MenuItem>
                            <Typography
                                className=" hidden group-hover:block absolute top-9 bg-slate-100 shadow-lg rounded-lg "
                            >
                                {
                                    ([{"name":"Profile", "route":"profile"}, {"name":"Company Honor", "route":"achievement"}, {"name":"Members", "route":"employee"}]).map((item) => (
                                        <Link to={`/about/${item.route}`} key={item}>
                                            <MenuItem className=" h-10 hover:bg-theme hover:text-white transition duration-300 ease-in text-black text-sm " >{item.name}</MenuItem>
                                        </Link>
                                    ))
                                }
                            </Typography>
                        </Box>

                        <Link smooth to="/#gallery">
                            <MenuItem className=" hover:bg-theme hover:text-black transition duration-300 ease-in text-white flex justify-center items-center gap-2 rounded-lg">
                                <Image className=" text-lg " />
                                <Typography className=" text-sm font-semibold ">Gallery</Typography>
                            </MenuItem>
                        </Link>
                        <Link smooth to="#contact">
                            <MenuItem className=" hover:bg-theme hover:text-black transition duration-300 ease-in text-white flex justify-center items-center gap-2 rounded-lg">
                                <ContactSupport className=" text-lg " />
                                <Typography className=" text-sm font-semibold ">Contact</Typography>
                            </MenuItem>
                        </Link>
                    </Box>
                    
                    {/* <Box sx={{ flexGrow: 1 }} /> */}
                    <Box>
                        <IconButton size="large" className=" hover:text-black transition duration-300 ease-in text-white animate-bounce">
                            <Badge badgeContent="" variant="dot" color="info">
                                <Notifications />
                            </Badge>
                        </IconButton>
                    </Box>

                </Container>
            </div>


        </div >
    );
};

export default Navbar;
