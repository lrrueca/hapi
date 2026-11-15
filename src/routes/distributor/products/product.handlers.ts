import type { Product } from "./product.types.js";
const baseUrl = process.env.MOCK_API_URL;

export const getAllAsync = async (): Promise<Product[]> => {
    try {
        const response = await fetch(`${baseUrl}/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch data:", error);
        throw error;
    }
};
