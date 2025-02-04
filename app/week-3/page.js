import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
