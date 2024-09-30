import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";
import { IProductTableHeader } from "./types";
import { headerStyles } from "./styles";

export const ProductTableHeader: React.FC<IProductTableHeader> = React.memo(
  ({ headers }) => {
    return (
      <TableHead>
        <TableRow>
          {headers.map((title, index) => (
            <TableCell
              sx={headerStyles}
              key={index}
              colSpan={title === "Actions" ? 2 : 0}
            >
              {title}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
);
