import { Box, Button, Modal } from "@mui/material";
import React, { useCallback, useState } from "react";
import { ProductForm } from "../product-form";
import { IProductCreator } from "./types";
import { addProductStyles, modalStyle, wrapperStyles } from "./styles";

export const ProductCreator: React.FC<IProductCreator> = React.memo(
  ({ addProduct }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
    const handleSaveChanges = useCallback(
      (updatedProduct: FormData) => {
        addProduct(updatedProduct);
        setIsAddModalOpen(false);
      },
      [addProduct]
    );

    const handleCloseModal = useCallback(() => {
      setIsAddModalOpen(false);
    }, []);

    return (
      <Box sx={wrapperStyles}>
        <Button sx={addProductStyles} onClick={() => setIsAddModalOpen(true)}>
          Add New Product
        </Button>
        <Modal open={isAddModalOpen} onClose={handleCloseModal}>
          <Box sx={modalStyle}>
            <h2>Add Product</h2>
            <ProductForm
              onSubmit={handleSaveChanges}
              onCancel={handleCloseModal}
            />
          </Box>
        </Modal>
      </Box>
    );
  }
);
