import type { CabconCode } from "./cabconCode.types.js";
const baseUrl = "http://localhost:3001/api";

export const getAllAsync = async (): Promise<CabconCode[]> => {
    try {
        const response = await fetch(`${baseUrl}/cabcon/code`, {
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
