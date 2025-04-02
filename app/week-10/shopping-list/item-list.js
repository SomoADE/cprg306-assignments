"use client";
import React from "react";
import Item from "./item";

export default function ItemList({ items = [], onItemSelect }) {
  return (
    <div className="p-4 border">
      <h2 className="text-lg font-semibold mb-2">Shopping List</h2>
      {items.length > 0 ? (
        items.map((item, index) => <Item key={index} item={item} onItemSelect={onItemSelect} />)
      ) : (
        <p className="text-gray-500">No items found.</p>
      )}
    </div>
  );
}
