import React, { useCallback, useEffect, useState } from "react";
import { ProductControls } from "../product-controls";
import axios from "axios";
import { IProduct, StockFilters } from "./types";
import { ProductTable } from "../product-table";
import { noProductsStyles } from "./styles";

export const ProductManagement: React.FC = React.memo(() => {
  const [selectedStockFilter, setSelectedStockFilter] = useState<StockFilters>(
    StockFilters.All
  );
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [sortBy, setSortBy] = useState<string>("");
  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/products?stock=${selectedStockFilter}&min=${minPrice}&max=${maxPrice}&sortBy=${sortBy}`
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [selectedStockFilter, maxPrice, minPrice, sortBy]);
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const deleteProduct = useCallback(async (id: string) => {
    try {
      await axios.delete(`http://localhost:4000/api/products/${id}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  }, []);
  const updateProduct = useCallback(async (updatedProduct: FormData) => {
    try {
      const updatedProductId = updatedProduct.get("_id");

      const response = await axios.put(
        `http://localhost:4000/api/products/${updatedProductId}`,
        updatedProduct,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === updatedProductId ? response.data : product
        )
      );
    } catch (error) {
      console.log(error);
    }
  }, []);
  const addProduct = useCallback(async (newProduct: FormData) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/products",
        newProduct,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setProducts((prevProducts) => [...prevProducts, response.data]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleStockFilterChange = useCallback((filter: StockFilters) => {
    setSelectedStockFilter(filter);
  }, []);
  const handlePriceFilterChange = useCallback((min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  }, []);

  const handleSortChange = useCallback((sort: string) => {
    setSortBy(sort);
  }, []);

  return (
    <>
      <ProductControls
        onStockFilterChange={handleStockFilterChange}
        onPriceFilterChange={handlePriceFilterChange}
        onSortChange={handleSortChange}
        addProduct={addProduct}
      />
      {products.length === 0 ? (
        <div style={noProductsStyles}>There're no products</div>
      ) : (
        <ProductTable
          products={products}
          deleteProduct={deleteProduct}
          updateProduct={updateProduct}
        />
      )}
    </>
  );
});
