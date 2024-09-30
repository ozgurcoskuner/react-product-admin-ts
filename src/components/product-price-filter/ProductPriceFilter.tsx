import React, { useCallback, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { IProductPriceFilter } from "./types";
import {
  applybuttonStyles,
  resetbuttonStyles,
  buttonsWrapperStyles,
  textFieldStyles,
  textfieldWrapperStyles,
  wrapperStyles,
} from "./styles";

export const ProductPriceFilter: React.FC<IProductPriceFilter> = ({
  onPriceFilterChange,
}) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const applyFilter = useCallback(() => {
    const min = minPrice === "" ? 0 : Number(minPrice);
    const max = maxPrice === "" ? Infinity : Number(maxPrice);
    onPriceFilterChange(min, max);
  }, [maxPrice, minPrice, onPriceFilterChange]);

  const resetFilter = useCallback(() => {
    setMinPrice("");
    setMaxPrice("");

    onPriceFilterChange(0, Infinity);
  }, [onPriceFilterChange]);

  return (
    <Box sx={wrapperStyles}>
      <Box sx={textfieldWrapperStyles}>
        <TextField
          label="Min Price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          variant="outlined"
          fullWidth
          slotProps={textFieldStyles}
        />
        <TextField
          label="Max Price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          variant="outlined"
          fullWidth
          slotProps={textFieldStyles}
        />
      </Box>
      <Box sx={buttonsWrapperStyles}>
        <Button
          variant="contained"
          onClick={applyFilter}
          sx={applybuttonStyles}
        >
          Apply
        </Button>
        <Button variant="outlined" onClick={resetFilter} sx={resetbuttonStyles}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};
