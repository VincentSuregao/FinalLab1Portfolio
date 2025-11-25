import axios from "axios";

// Example API (use your own API if available)
const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    const products = response.data.map((item) => ({
      id: item.id,
      name: item.title,
      currentInventory: Math.floor(Math.random() * 100), // Simulated inventory
      avgSalesPerWeek: Math.floor(Math.random() * 20) + 1, // Simulated sales
      leadTimeDays: Math.floor(Math.random() * 14) + 1 // Simulated lead time
    }));
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
