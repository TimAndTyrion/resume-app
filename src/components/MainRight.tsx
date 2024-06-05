import React, {useEffect, useMemo, useRef} from "react";
import {Box, Divider, Grid, Typography} from "@mui/material";
import {JobCard} from "./JobCard.tsx";
import {jobData} from "./JobData.ts";

interface MainRightProps {
    setIsAboutVisible: (isVisible: boolean) => void;
    setIsExpVisible: (isVisible: boolean) => void;
    setIsProjectsVisible: (isVisible: boolean) => void;
}


export function MainRight(props: MainRightProps): React.ReactElement {
    const aboutRef = useRef();
    const expereinceRef = useRef();

    const aboutObserver = useMemo(() => new IntersectionObserver(
        ([entry]) => props.setIsAboutVisible(entry.isIntersecting)
    ), [aboutRef])

    const expObserver = useMemo(() => new IntersectionObserver(
        ([entry]) => props.setIsExpVisible(entry.isIntersecting)
    ), [expereinceRef])


    useEffect(() => {
        aboutObserver.observe(aboutRef.current || new Element())
        return () => aboutObserver.disconnect()
    }, [])

    useEffect(() => {
        expObserver.observe(expereinceRef.current || new Element())
        return () => expObserver.disconnect()
    }, [])



    return (
        <Grid container spacing={2}
              overflow={{xs: 'none', md: 'auto'}}
              sx={{
                  gap: 2,
                  maxHeight: '100vh',
                  scrollBehavior: 'smooth',
                  scrollbarWidth: "none", // Hide the scrollbar for firefox
                  '&::-webkit-scrollbar': {
                      display: 'none', // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
                  },
                  '&-ms-overflow-style:': {
                      display: 'none', // Hide the scrollbar for IE
                  }
              }}
        >
            <Grid item xs={12}>
                <Box id='about' ref={aboutRef} sx={{marginTop: 2}}>
                    <Typography fontSize={18} color='#8599bc'>
                        Result-oriented and self-motivated Senior Software Engineer with over 20 years of professional experience, 
                        adept at both consulting and in-house roles. Skilled in developing, implementing, and configuring web 
                        applications across multiple platforms and languages. Proficient in version control systems, content 
                        management systems, and adept at collaborating within agile development environments. Known for delivering high-quality 
                        solutions through effective teamwork and strategic problem-solving. 
                    </Typography>
                    <Divider sx={{marginY: 1}}/>

                    <Typography fontSize={18} color='#8599bc'>
                        I love working in collaborative environments where we learn from each other and
                        are passionate about the products we build. I also love to mentor, bringing fresh ideas to the
                        team.
                    </Typography>
                </Box>
            </Grid>

            <Divider sx={{marginY: 2}}/>

            <Grid item xs={12}>
                <Box id='experience' ref={expereinceRef}>
                    {jobData.map(job => <JobCard key={job.company} job={job}/>)}
                </Box>
            </Grid>
        </Grid>
    )
}