
import { useState } from 'react';

export default function Home() {
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const encoded = encodeURIComponent(address);
    window.location.href = `/property/${encoded}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Enter a Property Address</h1>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="px-4 py-2 rounded border w-80"
          placeholder="123 Main St, Anytown, USA"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Search
        </button>
      </form>
    </div>
  );
}
