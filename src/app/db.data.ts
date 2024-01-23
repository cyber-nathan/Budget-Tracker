import { CategoryInfo } from "./interfaces";
import { ExpenseList } from "./interfaces";

export let CATEGORY: CategoryInfo[] = [
    {
        id: 0,
        title: 'Food',
        totalBudget: 1000,
        amountSpent: 150,
        amountLeft: 850,
        expense: [{
            id: 0,
            expenseAmount: 150,
            expenseTitle: "Sushi",


        }]  
    }
]