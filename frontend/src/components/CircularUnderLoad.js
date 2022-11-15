import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography, Box } from "@mui/material";
// import {  } from "@mui/system";

export default function CircularUnderLoad() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      {" "}
      <CircularProgress disableShrink size={100} />
    </Box>
  );
}
