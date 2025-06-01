// pages/index.js
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [address, setAddress] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (address.trim()) {
      router.push(`/property/${encodeURIComponent(address)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">Property Insight Dashboard</h1>
      <form onSubmit={handleSearch} className="w-full max-w-2xl">
        <input
          type="text"
          placeholder="Enter property address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-4 text-lg text-gray-900 rounded mb-4"
        />
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white text-lg rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
}
