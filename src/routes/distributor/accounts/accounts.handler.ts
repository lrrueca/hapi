import type { Account, User } from "@/lib/types.js";
import mockAccounts from "@lib/seed/accounts.json" with { type: "json" };
import mockUsers from "@lib/seed/users.json" with { type: "json" };

export const getAllAsync = async (): Promise<Account[]> => {
    return mockAccounts;
};

export const getAccountUsersAsync = async (): Promise<User[]> => {
    return mockUsers;
};
