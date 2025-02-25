"use client";
import { useState } from "react";

export default function NewItem() {


  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const handleSubmit = (event) => {
    event.preventDefault();

    const item = { name, quantity, category };
    console.log(item);
    alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName("");
    setQuantity(0);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-4 shadow-md rounded-md space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md p-2 mt-1"
        />
      </div>


      <div>
        <label className="block text-sm font-medium text-gray-700">Quantity:</label>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="bg-red-800 text-black-700 px-3 py-1 rounded-md">-</button>
          <span className="text-xl">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((prev) => prev + 1)}
            className="bg-blue-800 text-blue-700 px-3 py-1 rounded-md">+</button>
        </div>
      </div>

      
      <div>
        <label className="block text-sm font-medium text-gray-700">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mt-1"
        >
          {[
            "Produce", "Dairy", "Bakery", "Meat", "Frozen Foods",
            "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"
          ].map((cat) => (
            <option key={cat} value={cat.toLowerCase()}>{cat}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
        Submit
      </button>
    </form>
  );
}
