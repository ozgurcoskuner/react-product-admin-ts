import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { StockFilters } from "../product-management";
import { IProductStockFilter } from "./types";
import { labelStyles, radioStyles } from "./styles";

export const ProductStockFilter: React.FC<IProductStockFilter> = React.memo(
  ({ onStockFilterChange }) => {
    const [selectedFilter, setSelectedFilter] = useState<StockFilters>(
      StockFilters.All
    );

    const handleFilterChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value as StockFilters;
        setSelectedFilter(value);
        onStockFilterChange(value);
      },
      [onStockFilterChange]
    );
    return (
      <Box>
        <FormControl component="fieldset">
          <RadioGroup
            name="stock-filter"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <FormControlLabel
              value={StockFilters.InStock}
              control={<Radio sx={radioStyles} />}
              label="Show In-Stock"
              slotProps={{
                typography: labelStyles,
              }}
            />
            <FormControlLabel
              value={StockFilters.NoStock}
              control={<Radio sx={radioStyles} />}
              label="Show No-Stock"
              slotProps={{
                typography: labelStyles,
              }}
            />
            <FormControlLabel
              value={StockFilters.All}
              control={<Radio sx={radioStyles} />}
              label="Show Both"
              slotProps={{
                typography: labelStyles,
              }}
            />
          </RadioGroup>
        </FormControl>
      </Box>
    );
  }
);
