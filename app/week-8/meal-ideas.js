"use client";
import { useEffect, useState } from "react";

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
    
    useEffect(() => {
        if (!ingredient) return; // Avoid fetching if no ingredient is selected
        
        const fetchMeals = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
                const data = await response.json();
                setMeals(data.meals || []);
            } catch (error) {
                console.error("Error fetching meal ideas:", error);
            }
        };

        fetchMeals();
    }, [ingredient]);

    return (
        <div className="mt-6 p-4 border rounded-md shadow-md bg-gray-100">
            <h2 className="text-lg font-bold text-center">Meal Ideas</h2>
            {meals.length === 0 ? (
                <p className="text-center text-gray-600">No meal ideas found.</p>
            ) : (
                <ul className="list-disc pl-6">
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className="text-blue-500">{meal.strMeal}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MealIdeas;
