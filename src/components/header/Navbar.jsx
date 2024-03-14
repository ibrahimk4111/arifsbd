import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Notifications, KeyboardArrowDown, MenuRounded, ContactSupport, House, AccessTimeFilled, Image, PriorityHigh, PeopleAltRounded, Opacity } from "@mui/icons-material";
import { Box, IconButton, Typography, Badge, MenuItem, Container } from "@mui/material";
import TemporaryDrawer from "./Drawer";
import { ProductNavBar } from "./ProductNavBar";
import NotificationDrawer from "./NotificationDrawer";
import { useContext } from "react";
import { UserContext } from "../context/Context";
import { motion } from 'framer-motion';
import { paths } from "../Utils/Paths";


const Navbar = () => {

    const { isVisible } = useContext(UserContext)
    return (
        <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.9 } }}
            className={` flex justify-center items-center z-50 bg-theme text-white shadow w-full shadow-slate-700 ${isVisible ? "fixed top-0 h-16 transition-height duration-300 ease-in " : "h-12"}`}>
            <Container className=" flex justify-between items-center ">
                {/* toggle icon */}
                <Box className=" lg:hidden block">
                    <TemporaryDrawer>
                        <IconButton size="large" className="  text-white">
                            <MenuRounded />
                        </IconButton>
                    </TemporaryDrawer>
                </Box>

                <Box className="lg:hidden block">
                    <Link to={paths.products}>
                        <MenuItem className="hover:bg-theme text-white hover:text-black underline underline-offset-4">
                            <Typography className=" text-base ">Products</Typography>
                        </MenuItem>
                    </Link>
                </Box>

                {/* main navbar */}
                <Box className="lg:flex hidden ">
                    <Link to='/' >
                        <MenuItem className=" hover:bg-theme text-white hover:text-black transition duration-300 ease-in flex justify-center items-center gap-2 rounded-lg">
                            <House className=" text-lg " />
                            <Typography className=" text-sm font-semibold ">Home</Typography>
                        </MenuItem>
                    </Link>

                    <Box className="z-[1000] group relative">
                        <ProductNavBar />
                    </Box>

                    <Link smooth to="/#partners">
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
                        <Box
                            className=" scale-0 group-hover:scale-100 flex flex-col transition duration-300 divide-y-2 divide-white bg-slate-100 shadow-lg rounded-lg z-10 absolute top-9"
                        >
                            {
                                ([{ "name": "Profile", "route": "profile" }, { "name": "Company Honor", "route": "achievement" }, { "name": "Members", "route": "employee" }]).map((item, index) => (
                                    <Link to={`/about/${item.route}`} key={index} >
                                        <MenuItem className="h-10 hover:bg-theme hover:text-white transition duration-300 ease-in text-black text-sm" >{item.name}</MenuItem>
                                    </Link>
                                ))
                            }
                        </Box>
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

                <Box>
                    <NotificationDrawer>
                        {/* <IconButton size="large" className=" hover:text-black transition duration-300 ease-in text-white"> */}
                        <Link className=" relative ">
                            <Badge badgeContent="" variant="dot" color="warning" className=" animate-ping absolute top-0 right-0 "></Badge>
                            <Notifications />
                        </Link>
                        {/* </IconButton> */}
                    </NotificationDrawer>
                </Box>
            </Container>
        </motion.div>
    );
};

export default Navbar;
