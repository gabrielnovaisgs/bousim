"use client";

const data = [
    { category: "Food", value: 120.50 },
    { category: "Transport", value: 80.00 },
    { category: "Entertainment", value: 60.75 },
    { category: "Utilities", value: 150.00 },
    { category: "Health", value: 90.25 },
];

export function CategoryExpensesPlot() {
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-md shadow-sm">
            <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">{ }</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">R$ { }</span>
        </div>
    );
}