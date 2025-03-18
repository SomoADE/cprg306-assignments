"use client";
import { useState } from "react";
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    const groupedItems = sortedItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <div>
            <div className="mb-4 space-x-2">
                <button
                    className={`px-4 py-2 rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                    onClick={() => setSortBy("name")}
                >
                    Sort by Name
                </button>
                <button
                    className={`px-4 py-2 rounded ${sortBy === "category" ? "bg-green-500 text-white" : "bg-gray-300"}`}
                    onClick={() => setSortBy("category")}
                >
                    Sort by Category
                </button>
            </div>

            <ul className="space-y-2">
                {sortedItems.map((item) => (
                    <Item key={item.id} {...item} onClick={onItemSelect} />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
