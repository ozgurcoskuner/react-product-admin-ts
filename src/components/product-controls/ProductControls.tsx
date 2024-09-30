import { Box } from "@mui/material";
import React from "react";
import { wrapperStyles } from "./styles";
import { ProductStockFilter } from "../product-stock-filter";
import { IProductControls } from "./types";
import { ProductPriceFilter } from "../product-price-filter/ProductPriceFilter";
import { ProductSort } from "../product-sort/ProductSort";
import { ProductCreator } from "../product-creator";

export const ProductControls: React.FC<IProductControls> = React.memo(
  ({ onStockFilterChange, onPriceFilterChange, onSortChange, addProduct }) => {
    return (
      <Box sx={wrapperStyles}>
        <ProductStockFilter onStockFilterChange={onStockFilterChange} />
        <ProductSort onSortChange={onSortChange} />
        <ProductPriceFilter onPriceFilterChange={onPriceFilterChange} />
        <ProductCreator addProduct={addProduct} />
      </Box>
    );
  }
);
