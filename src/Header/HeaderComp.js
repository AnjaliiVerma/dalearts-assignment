import React from "react";
import { Box, TextField, Typography,IconButton } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import "./Header.css";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const HeaderComp = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        m: "40px 0px",
      }}
    >
      {/* 1st Part */}
      <Box
        sx={{
          backgroundColor: "white",
          width: "240px",
          borderRadius: "10px",
          padding: "35.5px 0px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "Bold",
            fontFamily: "'Times New Roman', Times, serif",
          }}
        >
          LOGO
        </Typography>
      </Box>
      {/* 2nd Part for searching */}
      <Box
        sx={{
          display: "flex",
          background: "white",
          width: "600px",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "10PX",
        }}
      >
        
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            placeholder="Search Here..."
          />
        
        <Box sx={{ display: "flex" }}>
          <TuneIcon sx={{ mr: "10px" }} />
          <Typography sx={{ mr: "10px" }}>Filter</Typography>
        </Box>
      </Box>
      {/* 3rd Part to became a seller */}
      <Box
        sx={{
          backgroundColor: "#88C2BB",
          minWidth: 275,
          borderRadius: "10px",
          padding: "43px 0px",
          color: "white",
        }}
      >
        <Typography
          sx={{
            fontWeight: "Bold",
            fontFamily: "'Times New Roman', Times, serif",
          }}
        >
          Become a Seller
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderComp;
