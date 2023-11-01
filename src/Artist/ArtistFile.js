import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Avatar, CardHeader, Typography } from '@mui/material';
import "./Artist.css"

const ArtistFile = () => {
  return (
    <Box >
      <Box
        sx={{
          display: "flex",
          cursor: "pointer",
        }}
      >
        <Typography>Artists</Typography>
        <Typography sx={{ color: "#8D8D8D", pl: "15px" }}>
          Photographers
        </Typography>
      </Box>
{/* 1st card */}
    <Card className='artist-con1' sx={{ minWidth: 275,height:"130px", mt:"20px" }}>
      <Box sx={{mt:"70px", color:"white"}}>
        <CardHeader  
      avatar={
            <Avatar aria-label="recipe">
              <img src="pexels-anastasia-shuraeva-4406721.png " alt="" />
            </Avatar>
          }
        
          title="Thomas Edward"
          subheader="@thewildwithyou"
        />
        </Box>
    </Card>
    {/* 2nd Card */}
    <Card className='artist-con2'  sx={{ minWidth: 275,height:"130px",mt:"20px" }}>
    <Box sx={{mt:"70px",color:"white"}}>
      <CardHeader 
      avatar={
            <Avatar aria-label="recipe">
              <img src="pexels-andrea-piacquadio-3771118.png " alt="" />
            </Avatar>
          }
          
          title="Chris Doe"
          subheader="@thewildwithyou"
        />
        </Box>
    </Card>
    {/* 3rd card */}
    <Card className='artist-con3'  sx={{ minWidth: 275,height:"130px", mt:"20px" }}>
    <Box sx={{mt:"70px",color:"white"}}>
      <CardHeader 
      avatar={
            <Avatar aria-label="recipe">
              <img src="pexels-antoni-shkraba-4442102.png " alt="" />
            </Avatar>
          }
          sx={{color:"white", }}
          title="Emilie Jones"
          subheader="@thewildwithyou"
        />
        </Box>
    </Card>
    {/* 4th card */}
    <Card className='artist-con4'  sx={{ minWidth: 275,height:"130px", mt:"20px" }}>
    <Box sx={{mt:"70px",color:"white"}}>
      <CardHeader 
      avatar={
            <Avatar aria-label="recipe">
              <img src="pexels-antoni-shkraba-4442005.png " alt="" />
            </Avatar>
          }
          
          title="Jessica Williams"
          subheader="@thewildwithyou"
        />
        </Box>
    </Card>
    {/* 5th card */}
    <Card className='artist-con5'  sx={{ minWidth: 275, height:"130px",mt:"20px" }}>
    <Box sx={{mt:"70px",color:"white"}}>
      <CardHeader 
      avatar={
            <Avatar aria-label="recipe">
              <img src="pexels-andrea-piacquadio-3771118.png " alt="" />
            </Avatar>
          }
          
          title="Thomas Edward"
          subheader="@thewildwithyou"
        />
        </Box>
    </Card>
    {/* 6th  card */}
    <Card className='artist-con6'  sx={{ minWidth: 275, height:"130px", mt:"20px" }}>
    <Box sx={{mt:"70px", color:"white"}}>
      <CardHeader 
      avatar={
            <Avatar aria-label="recipe">
              <img src=" pexels-antoni-shkraba-4442102.png" alt="" />
            </Avatar>
          }
          
          title="Jessica Williams"
          subheader="@thewildwithyou"
        />
        </Box>
    </Card>

    </Box>
  )
}

export default ArtistFile
