import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { IProductTableRow } from "./types";
import { ProductRowActions } from "../product-row-actions";
import { imageStyle, inStockStyle, noStockStyle } from "./styles";

export const ProductTableRow: React.FC<IProductTableRow> = React.memo(
  ({ rowData, onDeleteProduct, onUpdateProduct }) => {
    const { _id, name, description, price, stock, featuredImage } = rowData;
    return (
      <TableRow
        sx={{ backgroundColor: stock > 0 ? inStockStyle : noStockStyle }}
      >
        <TableCell>{_id}</TableCell>
        <TableCell>
          <img src={featuredImage} alt={name} style={imageStyle} />
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{description}</TableCell>
        <TableCell>{price}</TableCell>
        <TableCell>{stock}</TableCell>
        <ProductRowActions
          rowData={rowData}
          onDeleteProduct={onDeleteProduct}
          onUpdateProduct={onUpdateProduct}
        />
      </TableRow>
    );
  }
);
