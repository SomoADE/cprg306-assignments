"use client";
import { useState } from "react";
import Item from "./item";
import itemsData from "./item.json";

const ItemList = () => {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...itemsData].sort((a, b) => {
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
                    className={`px-4 py-2 rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-green-500"}`}
                    onClick={() => setSortBy("name")}
                >
                    Sort by Name
                </button>
                <button
                    className={`px-4 py-2 rounded ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-yellow-500"}`}
                    onClick={() => setSortBy("category")}
                >
                    Sort by Category
                </button>
                <button
                    className={`px-4 py-2 rounded ${sortBy === "group" ? "bg-green-500 text-white" : "bg-red-500"}`}
                    onClick={() => setSortBy("group")}
                >
                    Group by Category
                </button>
            </div>

            {sortBy === "group" ? (
                <div>
                    {Object.entries(groupedItems).map(([category, items]) => (
                        <div key={category} className="mb-4">
                            <h2 className="text-xl font-semibold capitalize">{category}</h2>
                            <ul className="space-y-1">
                                {items.map((item) => (
                                    <Item key={item.id} {...item} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <ul className="space-y-2">
                    {sortedItems.map((item) => (
                        <Item key={item.id} {...item} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemList;
