// pages/index.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [inputAddress, setInputAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputAddress.trim()) {
      router.push(`/property/${encodeURIComponent(inputAddress.trim())}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8">Enter a Property Address</h1>
        <form onSubmit={handleSubmit} className="flex items-center gap-4">
          <input
            type="text"
            placeholder="123 Main St, Anytown, USA"
            className="flex-grow px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={inputAddress}
            onChange={(e) => setInputAddress(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
