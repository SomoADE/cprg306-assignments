const Item = ({ name, quantity, category, onClick }) => {
    return (
        <li 
            className="p-2 border-b flex justify-between cursor-pointer hover:bg-gray-200"
            onClick={() => onClick(name.split(",")[0])} // Extract main name before comma
        >
            <span className="font-semibold">{name}</span>
            <span className="text-gray-600">Qty: {quantity}</span>
            <span className="text-blue-500 italic">{category}</span>
        </li>
    );
};

export default Item;
