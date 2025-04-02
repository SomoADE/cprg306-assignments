
"use client";
import React, { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && category) {
      onAddItem({ name, category });
      setName("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border">
      <h2 className="text-lg font-semibold mb-2">Add New Item</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border mb-2 w-half "
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border mb-2 w-half"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">
        Add Item
      </button>
    </form>
  );
}
