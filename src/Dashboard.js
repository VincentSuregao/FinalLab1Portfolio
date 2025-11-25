import React, { useEffect, useState } from "react";
import { fetchProducts } from "./ProductService";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const needsReorder = (product) => {
    const threshold = product.avgSalesPerWeek * (product.leadTimeDays / 7);
    return product.currentInventory < threshold;
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Inventory Dashboard</h1>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th>Product Name</th>
            <th>Current Inventory</th>
            <th>Avg Sales/Week</th>
            <th>Lead Time (Days)</th>
            <th>Reorder Suggestion</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.currentInventory}</td>
              <td>{product.avgSalesPerWeek}</td>
              <td>{product.leadTimeDays}</td>
              <td
                style={{
                  fontWeight: "bold",
                  color: needsReorder(product) ? "red" : "green"
                }}
              >
                {needsReorder(product) ? "Reorder" : "OK"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
