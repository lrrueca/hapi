import mockFreezers from "@lib/seed/freezers.json" with { type: "json" };
import type { FreezerDataProps } from "./freezers.component.js";

export const getAllAsync = async (): Promise<FreezerDataProps[]> => {
    return mockFreezers;
};
