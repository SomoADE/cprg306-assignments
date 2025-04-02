"use client";

import { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useAuth } from "../_utils/auth-context";

export default function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", quantity: 1, category: "other" });
  const { user } = useAuth(); // Get user authentication info

  
  useEffect(() => {
    async function loadItems() {
      if (user) {
        const data = await getItems(user.uid);
        setItems(data);
      }
    }
    loadItems();
  }, [user]);

  
  async function handleAddItem() {
    if (user && newItem.name.trim() !== "") {
      const id = await addItem(user.uid, newItem);
      setItems([...items, { id, ...newItem }]);
      setNewItem({ name: "", quantity: 1, category: "other" }); 
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      
      
      <ul className="list-disc ml-6 mb-4">
        {items.map((item) => (
          <li key={item.id} className="text-lg">
            {item.name} - {item.quantity} ({item.category})
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Item name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="number"
          min="1"
          max="100"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
          className="border p-2 rounded w-20"
        />
        <select
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
        <button
          onClick={handleAddItem}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}
