import newItem from './new-item.js';

export default function page() {
    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-6">New Item </h1>
            <newItem />
        </main>
    );
}