"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

const Page = () => {
    const [items, setItems] = useState(itemsData);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleItemSelect = (itemName) => {
        setSelectedItem(itemName);
    };

    return (
        <main className="max-w-lg mx-auto p-6">
            <h1 className="text-2xl bg-purple-600 font-bold text-center mb-3">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
            {selectedItem && <MealIdeas ingredient={selectedItem} />}
        </main>
    );
};

export default Page;
