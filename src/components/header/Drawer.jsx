import { useState } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { PriorityHigh, KeyboardArrowDown, ContactSupport, House, AccessTimeFilled, Image, CloseRounded } from "@mui/icons-material";
import { Box, Typography, MenuItem, Drawer, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ProductDrawerBar } from './ProductNavBar';

export default function TemporaryDrawer({ children }) {
    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, ["left"]: open });
    };

    return (
        <div >
            <div onClick={toggleDrawer(true)}>{children}</div>
            <Drawer
                anchor="left"
                open={state["left"]}
                onClose={toggleDrawer(false)}
                className=''
            >

                <div className='w-96 h-full bg-bodyColor '>
                    <Box onClick={toggleDrawer(false)} className=" bg-theme p-3 flex gap-3 justify-center text-white cursor-pointer">
                        <Typography
                            component="label"
                            htmlFor="close-icon"
                            fontSize="sm"
                            fontWeight="lg"
                        >
                            Close
                        </Typography>
                        <CloseRounded className=' rounded-lg ' />
                    </Box>
                    <Box className="flex flex-col justify-center gap-1 p-2 divide-y-2 divide-slate-100">
                        <Link to='/' onClick={toggleDrawer(false)} >
                            <MenuItem className=" hover:bg-theme h-12 text-black hover:text-white flex justify-start items-center gap-2 rounded-lg">
                                <House className=" text-xl " />
                                <Typography>Home</Typography>
                            </MenuItem>
                        </Link>

                        <Box>
                            <ProductDrawerBar toggleDrawer={toggleDrawer(false)}/>
                        </Box>

                        <Link to="/mission" onClick={toggleDrawer(false)} >
                            <MenuItem className="h-12 hover:bg-theme hover:text-white text-black flex justify-start items-center gap-2 rounded-lg">
                                <AccessTimeFilled className=" text-xl " />
                                <Typography>Mission & Vission</Typography>
                            </MenuItem>
                        </Link>
                        <Box >
                            <Accordion className=' shadow-none bg-bodyColor'>
                                <AccordionSummary
                                    expandIcon={<KeyboardArrowDown />}
                                    className=" hover:bg-theme hover:text-white rounded-lg text-black "
                                >
                                    <Box className="flex justify-center items-center gap-2">
                                        <PriorityHigh className=" text-xl " />
                                        <Typography>About</Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {
                                        ([{ "name": "Profile", "route": "profile" }, { "name": "Company Honor", "route": "achievement" }, { "name": "Members", "route": "employee" }]).map((item, index) => (
                                            <Link to={`/about/${item.route}`} onClick={toggleDrawer(false)} key={index}>
                                                <MenuItem className=" hover:bg-theme hover:text-white text-black rounded-lg">{item.name}</MenuItem>
                                            </Link>
                                        ))
                                    }
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                        <Link to="/#gallery" onClick={toggleDrawer(false)} >
                            <MenuItem className="h-12 hover:bg-theme hover:text-white text-black flex justify-start items-center gap-2 rounded-lg">
                                <Image className=" text-xl " />
                                <Typography>Gallery</Typography>
                            </MenuItem>
                        </Link>
                        <Link to="/#contact" onClick={toggleDrawer(false)} >
                            <MenuItem className="h-12 hover:bg-theme hover:text-white text-black flex justify-start items-center gap-2 rounded-lg">
                                <ContactSupport className=" text-xl " />
                                <Typography>Contact</Typography>
                            </MenuItem>
                        </Link>
                    </Box>
                </div>

            </Drawer>
        </div>
    );
}