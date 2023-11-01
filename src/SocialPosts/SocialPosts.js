import React from "react";
import "./SocialPost.css";
import { Box, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const SocialPosts = () => {
  return (
    <Box>
      <Card sx={{ maxWidth: 600 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src="pexels-ali-pazani-2613260.png" alt="" />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon sx={{ ml: "250px" }} />
            </IconButton>
          }
          title="Lara Leone"
          subheader="@thewallart"
        />

        <CardContent sx={{ textAlign: "justify" }}>
          <Typography variant="body2" color="text.secondary">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
            <span style={{ color: "red" }}>Read More</span>
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="194"
          image="pexels-humphrey-muleba-2045248.png"
          alt="Paella dish"
          sx={{ mb: "20px" }}
        />
        <Divider />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            <Typography component="span" sx={{ ml: "5px" }}>
              9.8k
            </Typography>
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
            <Typography component="span" sx={{ ml: "5px" }}>
              8.6k
            </Typography>
          </IconButton>
          <IconButton aria-label="comment">
            <ChatBubbleOutlineIcon />
            <Typography component="span" sx={{ ml: "5px" }}>
              7.2k
            </Typography>
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 600, mt: "30px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src=" pexels-imad-clicks-9810659.png" alt="" />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon sx={{ ml: "200px" }} />
            </IconButton>
          }
          title="Thomas J."
          subheader="@thecustomcreater"
        />
        <CardContent sx={{ textAlign: "justify" }}>
          <Typography variant="body2" color="text.secondary">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
            <span style={{ color: "red" }}>Read More</span>
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="194"
          image="pexels-tobias-bjørkli-2236382.png"
          alt="Paella dish"
          sx={{ mb: "20px" }}
        />
        <Divider />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            <Typography component="span" sx={{ ml: "5px" }}>
              9.8k
            </Typography>
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
            <Typography component="span" sx={{ ml: "5px" }}>
              8.6k
            </Typography>
          </IconButton>
          <IconButton aria-label="comment">
            <ChatBubbleOutlineIcon />
            <Typography component="span" sx={{ ml: "5px" }}>
              7.2k
            </Typography>
          </IconButton>
        </CardActions>
      </Card>
      
    </Box>
  );
};

export default SocialPosts;
