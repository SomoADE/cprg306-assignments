const Item = ({ name, quantity, category }) => {
    return (
        <li className="p-2 border-b flex justify-between">
            <span className="font-semibold">{name}</span>
            <span className="text-gray-600">Qty: {quantity}</span>
            <span className="text-blue-500 italic">{category}</span>
        </li>
    );
};

export default Item;

