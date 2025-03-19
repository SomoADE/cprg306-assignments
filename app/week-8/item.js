"use client";
import React from "react";

export default function Item({ item, onItemSelect }) {
  if (!item) return null; // Ensure item is defined before rendering

  return (
    <div
      className="p-2 border-b cursor-pointer hover:bg-gray-200"
      onClick={() => onItemSelect(item.name)}
    >
      <strong>{item.name}</strong> - <span className="text-gray-600">{item.category}</span>
    </div>
  );
}
