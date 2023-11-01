import React from "react";
import ArtistFile from "../Artist/ArtistFile";
import HeaderComp from "../Header/HeaderComp";
import SocialPosts from "../SocialPosts/SocialPosts";
import DrawerComp from "../MenuItems/DrawerComp";
import Slider from "../Slider/Slider";

const Component = () => {
  return (
    <div>
      {/* Header component */}
      <HeaderComp />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {/* Drawer Component */}
        <DrawerComp />
          {/* Social Media Posts */}
        <SocialPosts />
        {/* Users */}
        <ArtistFile />
      </div>
      <div>
        {/* Carousel Component */}
        <Slider/>
      </div>
    </div>
  );
};

export default Component;
