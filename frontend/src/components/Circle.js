import { Typography } from "@mui/material";
import React, { useState } from "react";
import ShowerIcon from "@mui/icons-material/Shower";
import IceSkatingIcon from "@mui/icons-material/IceSkating";
import DevicesIcon from "@mui/icons-material/Devices";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import CottageIcon from "@mui/icons-material/Cottage";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Face4Icon from "@mui/icons-material/Face4";
import { useNavigate, useParams } from "react-router-dom";

const Circle = () => {
  const [icon, setIcon] = useState(<ShowerIcon />);
  const [category, setcategory] = useState("bath");
  const navigate = useNavigate();
  const productCategory = () => {
    if (category) {
      navigate(`/product/${category}`);
    }
  };
  return (
    <Typography
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "300px",
        height: "300px",
        color: "black",
        backgroundColor: "Lightgray",
        borderRadius: "50%",
        boxShadow: "5px 10px 5px 10px white",
        margin: "0 auto",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          width: "280px",
          height: "280px",
          color: "black",
          backgroundColor: "black",
          borderRadius: "50%",
          position: "relative",
        }}
      >
        <Typography
          sx={{ color: "white", position: "absolute", left: "0" }}
          onClick={() => {
            setIcon(<ShowerIcon />) || setcategory("shower");
          }}
        >
          <ShowerIcon />
        </Typography>
        <Typography
          sx={{ color: "white", position: "absolute", top: "0" }}
          onClick={() => {
            setIcon(<IceSkatingIcon />) || setcategory("IceSkatingIcon");
          }}
        >
          <IceSkatingIcon />
        </Typography>
        <Typography
          sx={{ color: "white", position: "absolute", bottom: "0" }}
          onClick={() => {
            setIcon(<IceSkatingIcon />) || setcategory("IceSkatingIcon");
          }}
        >
          <IceSkatingIcon />
        </Typography>
        <Typography
          sx={{ color: "white", position: "absolute", right: "0" }}
          onClick={() => {
            setIcon(<DevicesIcon />) || setcategory("laptope");
          }}
        >
          <DevicesIcon />
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            width: "85%",
            top: "20%",
          }}
        >
          <Typography
            sx={{ color: "white" }}
            onClick={() => {
              setIcon(<LocalTaxiIcon />) || setcategory("Car");
            }}
          >
            <LocalTaxiIcon />
          </Typography>
          <Typography
            sx={{ color: "white" }}
            onClick={() => {
              setIcon(<PedalBikeIcon />) || setcategory("bike");
            }}
          >
            <PedalBikeIcon />
          </Typography>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            width: "85%",
            bottom: "20%",
          }}
        >
          <Typography
            sx={{ color: "white" }}
            onClick={() => {
              setIcon(<CottageIcon />) || setcategory("House");
            }}
          >
            <CottageIcon />
          </Typography>
          <Typography
            sx={{ color: "white" }}
            onClick={() => {
              setIcon(<PhoneAndroidIcon />) || setcategory("Phone");
            }}
          >
            <PhoneAndroidIcon />
          </Typography>
        </Typography>

        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "230px",
            height: "230px",
            color: "black",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              height: "200px",
              color: "black",
              backgroundColor: "black",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => productCategory()}
          >
            {icon}
            {category}
          </Typography>
        </Typography>
      </Typography>
    </Typography>
  );
};

export default Circle;
