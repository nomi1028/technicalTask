import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CustomIcons from "./CustomIcons";
import CircularUnderLoad from "./CircularUnderLoad";

const ProductData = () => {
  const [productData, setProductData] = useState();

  const [DataCollection, setDataCollection] = useState();
  const [pageNumber, setpageNumber] = useState(1);
  let { category } = useParams();
  useEffect(() => {
    if (category) {
      axios
        .get(`http://localhost:5000/products/product/${category}/${pageNumber}`)
        .then((resp) => {
          if (resp.data) {
            setProductData(resp?.data?.ProductData);
          }
        });

      axios
        .get(`http://localhost:5000/products/data/${category}`)
        .then((resp) => {
          if (resp.data) {
            setDataCollection(resp?.data);
            console.log(resp.data);
          }
        });
    }
  }, [pageNumber]);
  console.log(productData, "sdfhjhgdshfgjhds");
  return !productData ? (
    // loader//
    <CircularUnderLoad />
  ) : (
    <>
      <div>
        <Grid container sx={{}}>
          {productData.length > 0
            ? productData?.map((data, index) => (
                <Grid item md={4} sm={6} lg={3} xs={12} sx={{ padding: "8px" }}>
                  {/* card */}
                  <MediaCard data={data} />
                </Grid>
              ))
            : "Data Not Found of this category"}
        </Grid>
        {productData.length > 0 ? (
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* pagination component */}
            <CustomIcons
              DataCollection={DataCollection}
              setpageNumber={setpageNumber}
            />
          </Typography>
        ) : null}
      </div>
    </>
  );
};

export default ProductData;
