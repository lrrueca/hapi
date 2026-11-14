import type { Deployment } from "@/lib/types.js";

export class DeploymentService {
    private readonly baseurl = "http://localhost:3001/api";

    public async getAll(): Promise<Deployment[]> {
        try {
            const response = await fetch(`${this.baseurl}/deployments`, {
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
    }
}

export default DeploymentService;
