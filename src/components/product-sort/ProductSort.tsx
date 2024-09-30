import React, { useCallback } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { IProductSort } from "./types";
import { fontSizeStyles, wrapperStyles } from "./styles";

export const ProductSort: React.FC<IProductSort> = ({ onSortChange }) => {
  const handleSortChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      onSortChange(event.target.value);
    },
    [onSortChange]
  );

  return (
    <Box sx={wrapperStyles}>
      <FormControl variant="standard" fullWidth>
        <InputLabel sx={fontSizeStyles}>Sort By</InputLabel>
        <Select defaultValue="" onChange={handleSortChange}>
          <MenuItem value="">Default</MenuItem>
          <MenuItem value="name:asc" sx={fontSizeStyles}>
            Name (A-Z)
          </MenuItem>
          <MenuItem value="name:desc" sx={fontSizeStyles}>
            Name (Z-A)
          </MenuItem>
          <MenuItem value="price:asc" sx={fontSizeStyles}>
            Price (Low to High)
          </MenuItem>
          <MenuItem value="price:desc" sx={fontSizeStyles}>
            Price (High to Low)
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
