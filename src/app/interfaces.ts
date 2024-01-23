
export interface CategoryInfo {
    id: number;
    title: string;
    totalBudget: number;
    amountSpent: number;
    amountLeft: number;
    expense: ExpenseList[] 
}

export interface ExpenseList {
    id: number;
    expenseTitle: string;
    expenseAmount: number;
    date?: string;
    paymentMethod?: string;
    vendor?: string;
    note?: string;
}