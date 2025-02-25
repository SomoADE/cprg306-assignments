"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div className="flex flex-col items-center p-6 bg-yellow-600 rounded-lg shadow-md max-w-sm mx-auto">
            <h2 className="text-xl font-bold mb-4 text-green-700">Select quantity</h2>
            <div className="flex items-center space-x-4">
                <button
                    onClick={decrement}
                    disabled={quantity === 1}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg disabled:opacity-50"
                > - </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                    onClick={increment}
                    disabled={quantity === 20}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"> + </button>
            </div>
        </div>
    );
}