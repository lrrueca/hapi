import type { Freezer } from "@/lib/types.js";
import mockFreezers from "@lib/seed/freezers.json" with { type: "json" };

export const getAllAsync = async (): Promise<Freezer[]> => {
    return mockFreezers;
};
