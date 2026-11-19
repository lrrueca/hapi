import type { Account } from "@/lib/types.js";
import mockAccounts from "@lib/seed/accounts.json" with { type: "json" };

export const getAllAsync = async (): Promise<Account[]> => {
    const data = mockAccounts;
    return data;
};
