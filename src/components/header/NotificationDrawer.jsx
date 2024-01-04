import { useState } from 'react';
// import { HashLink as Link } from "react-router-hash-link";
import { CloseRounded } from "@mui/icons-material";
import { Box, Typography,  Drawer } from "@mui/material";

export default function NotificationDrawer({ children }) {
    const [state, setState] = useState({
        right: false,
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, ["right"]: open });
    };

    return (
        <div >
            <div onClick={toggleDrawer(true)}>{children}</div>
            <Drawer
                anchor="right"
                open={state["right"]}
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
                    <div>Drawer for notifications</div>
                </div>

            </Drawer>
        </div>
    );
}