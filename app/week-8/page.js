"use client";
import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData || []); // Ensure items is always an array
  const [selectedItem, setSelectedItem] = useState("");

  const addItem = (newItem) => {
    if (!newItem || !newItem.name || !newItem.category) return;
    setItems([...items, newItem]);
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <NewItem onAddItem={addItem} />
      <div className="flex gap-4">
        <ItemList items={items} onItemSelect={setSelectedItem} />
        {selectedItem && <MealIdeas ingredient={selectedItem} />}
      </div>
    </div>
  );
}
