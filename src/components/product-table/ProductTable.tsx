import React from "react";

import { TableContainer, Table, TableBody, Box } from "@mui/material";
import { ProductTableHeader } from "../product-table-header/ProductTableHeader";
import { ProductTableRow } from "../product-table-row/ProductTableRow";

import { IProductTable } from "./types";
import { tableContainerStyle } from "./styles";
export const ProductTable: React.FC<IProductTable> = React.memo(
  ({ products, deleteProduct, updateProduct }) => {
    const headerTitles = [
      "ID",
      "Image",
      "Name",
      "Description",
      "Price",
      "Stock",
      "Actions",
    ];
    return (
      <Box>
        <TableContainer sx={tableContainerStyle}>
          <Table>
            <ProductTableHeader headers={headerTitles} />
            <TableBody>
              {products.map((data) => (
                <ProductTableRow
                  key={data._id}
                  rowData={data}
                  onDeleteProduct={deleteProduct}
                  onUpdateProduct={updateProduct}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }
);
