import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect } from "react";

export default function CustomIcons({ DataCollection, setpageNumber }) {
  console.log(DataCollection?.ProductData, "DataCollection");
  const [counterValue, setCounterValue] = React.useState();

  useEffect(() => {
    let increment = 0;
    let value = DataCollection?.ProductData / 5;
    let afterPoint = DataCollection?.ProductData % 5;
    if (afterPoint > 0) {
      increment = 1;
    }
    setCounterValue(parseInt(value) + increment);
  }, [DataCollection]);
  const handlePageNumber = async (e, v) => {
    setpageNumber(v);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={counterValue}
        onChange={handlePageNumber}
        renderItem={(item) => (
          <>
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          </>
        )}
      />
    </Stack>
  );
}
