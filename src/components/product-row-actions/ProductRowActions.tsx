import React, { useCallback, useState } from "react";
import { Box, Button, Modal, TableCell } from "@mui/material";
import { IProductRowActions } from "./types";
import { modalStyles, actionStyles, deleteActionStyles } from "./styles";
import { ProductForm } from "../product-form";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export const ProductRowActions: React.FC<IProductRowActions> = React.memo(
  ({ onDeleteProduct, onUpdateProduct, rowData }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
    const openEditModal = useCallback(() => {
      setIsEditModalOpen(true);
    }, []);
    const openDeleteModal = useCallback(() => {
      setIsDeleteModalOpen(true);
    }, []);
    const handleDelete = useCallback(() => {
      onDeleteProduct(rowData._id);
    }, [rowData, onDeleteProduct]);

    const handleCloseModal = useCallback(() => {
      setIsEditModalOpen(false);
      setIsDeleteModalOpen(false);
    }, []);

    const handleSaveChanges = useCallback(
      (updatedProduct: FormData) => {
        onUpdateProduct(updatedProduct);
        setIsEditModalOpen(false);
      },
      [onUpdateProduct]
    );
    return (
      <>
        <TableCell onClick={openEditModal} sx={actionStyles}>
          <Button color="inherit" startIcon={<EditIcon />}>
            Edit
          </Button>
        </TableCell>
        <Modal open={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
          <Box sx={modalStyles}>
            <h2>Edit Product</h2>
            <ProductForm
              productToEdit={rowData}
              onSubmit={handleSaveChanges}
              onCancel={handleCloseModal}
            />
          </Box>
        </Modal>

        <TableCell onClick={openDeleteModal} sx={actionStyles}>
          <Button color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </TableCell>
        <Modal
          open={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
        >
          <Box sx={modalStyles}>
            <h2>Delete Product</h2>
            <p>
              Are you sure you want to delete <b>{rowData.name}</b>?
            </p>
            <Box sx={deleteActionStyles}>
              <Button onClick={handleCloseModal} color="inherit">
                Cancel
              </Button>
              <Button onClick={handleDelete} color="error" variant="outlined">
                Delete
              </Button>
            </Box>
          </Box>
        </Modal>
      </>
    );
  }
);
