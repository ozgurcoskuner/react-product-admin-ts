import React, { useCallback, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { IProductForm } from "./types";
import { IProduct } from "../product-management";
import {
  actionStyles,
  formWrapperStyles,
  imageEditStyle,
  imageStyle,
  textfieldNumberStyles,
  uploadStyles,
} from "./styles";

const defaultProduct = {
  _id: "",
  name: "",
  description: "",
  price: 0,
  stock: 0,
  featuredImage: "",
};

export const ProductForm: React.FC<IProductForm> = ({
  productToEdit = defaultProduct,
  onSubmit,
  onCancel,
}) => {
  const [productData, setProductData] = useState<IProduct>(productToEdit);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type } = e.target;

      let parsedValue = value;
      if (type === "number") {
        parsedValue = value === "" ? "" : String(Number(value));
      }
      setProductData((prev) => ({
        ...prev,
        [name]: parsedValue,
      }));
    },
    []
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setImageFile(e.target.files[0]);
      }
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append("_id", productData._id);
      formData.append("name", productData.name);
      formData.append("description", productData.description);
      formData.append("price", productData.price.toString());
      formData.append("stock", productData.stock.toString());
      formData.append("image", productData.featuredImage);
      if (imageFile) {
        formData.append("image", imageFile);
      }

      onSubmit(formData);
    },
    [imageFile, onSubmit, productData]
  );

  return (
    <Box component="form" onSubmit={handleSubmit} sx={formWrapperStyles}>
      <TextField
        label="Product Name"
        name="name"
        value={productData.name}
        onChange={handleInputChange}
        fullWidth
        required
      />
      <TextField
        label="Description"
        name="description"
        value={productData.description}
        onChange={handleInputChange}
        fullWidth
        required
      />
      <TextField
        label="Price"
        name="price"
        type="number"
        value={productData.price}
        onChange={handleInputChange}
        slotProps={textfieldNumberStyles}
        fullWidth
        required
      />
      <TextField
        label="Stock"
        name="stock"
        type="number"
        value={productData.stock}
        onChange={handleInputChange}
        slotProps={textfieldNumberStyles}
        fullWidth
        required
      />
      <div style={imageEditStyle}>
        {productData.featuredImage && !imageFile && (
          <Box>
            <img
              src={productData.featuredImage}
              alt="Product"
              style={imageStyle}
            />
          </Box>
        )}
        <input
          type="file"
          id="file-upload"
          onChange={handleFileChange}
          accept="image/*"
          required={!productData.featuredImage}
          style={{
            position: "absolute",
            left: "50%",
            marginTop: "40px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            clip: "rect(1px, 1px, 1px, 1px)",
            whiteSpace: "nowrap",
          }}
        />
        <label htmlFor="file-upload" style={uploadStyles}>
          <Button variant="contained" component="span">
            {imageFile
              ? imageFile.name
              : productData.featuredImage
              ? "Change Image"
              : "Upload Image"}
          </Button>
        </label>
      </div>

      <Box sx={actionStyles}>
        <Button onClick={onCancel} type="button" color="inherit">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          {productToEdit._id !== "" ? "Save Changes" : "Add Product"}
        </Button>
      </Box>
    </Box>
  );
};
