export interface CabconCode {
    id: string;
    codeMonth: string;
    status: "Open" | "Closed";
    startDate: Date;
    endDate: Date;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
