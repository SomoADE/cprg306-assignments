import ItemList from "./item-list";

const Page = () => {
    return (
        <main className="max-w-lg mx-auto p-6">
            <h1 className="text-3xl bg-yellow-300 font-bold text-left  mb-3">Shopping List</h1>
            <ItemList />
        </main>

    );
};

export default Page;
