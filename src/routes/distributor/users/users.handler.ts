import type { User } from "@/lib/types.js";
import mockAccounts from "@lib/seed/users.json" with { type: "json" };

export const getAllAsync = async (): Promise<User[]> => {
    const data = mockAccounts;
    return data;
};
