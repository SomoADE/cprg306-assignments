import NewItem from "./new-item";


export default function week5() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6">
            <h1 className="text-red-xl font-bold mb-6">Week 5 - Shopping List</h1>
            <NewItem />
        </main>
    );
}