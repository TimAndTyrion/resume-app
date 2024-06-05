import React from "react";
import {Box, IconButton} from "@mui/material";
import {FaGithub, FaLinkedin} from "react-icons/fa6";


const HoverIcon = ({children}: { children: React.ReactElement }): React.ReactElement => {
    return (
        <IconButton size='large' sx={{color: '#8599bc', "&:hover ": {color: '#efefef'}}}>
            {children}
        </IconButton>
    )
}

export function FooterLinks(): React.ReactElement {
    return (
        <footer id='footer'>
            <Box>
                <a href='https://www.linkedin.com/in/tim-colburn-2605447/' target="_blank"><HoverIcon><FaLinkedin/></HoverIcon></a>
                <a href='https://github.com/TimAndTyrion' target='_blank'><HoverIcon><FaGithub/></HoverIcon></a>
            </Box>
        </footer>
    )
}