"use client";
import React, { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (!ingredient) return;

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals || []); // Ensure meals is always an array
      })
      .catch((error) => console.error("Error fetching meals:", error));
  }, [ingredient]);

  return (
    <div className="p-4 border rounded-md w-1/3">
      <h2 className="text-lg font-semibold mb-2">Meal Ideas</h2>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search meals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Filtered Meal List */}
      {meals.length > 0 ? (
        <ul className="list-disc pl-4">
          {meals
            .filter((meal) =>
              meal.strMeal.toLowerCase().includes(search.toLowerCase())
            )
            .map((meal) => (
              <li key={meal.idMeal} className="text-gray-800">
                {meal.strMeal}
              </li>
            ))}
        </ul>
      ) : (
        <p className="text-gray-500">No meal ideas found.</p>
      )}
    </div>
  );
}
