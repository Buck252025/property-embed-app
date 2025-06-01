// pages/property/[address].js
import { useRouter } from 'next/router';

export default function PropertyResults() {
  const router = useRouter();
  const { address } = router.query;

  const encodedAddress = encodeURIComponent(address || '');

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Results for: {address}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Market</h2>
          <a href={`https://www.zillow.com/homes/${encodedAddress}_rb/`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            View on Zillow
          </a>
        </div>

        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Mortgage</h2>
          <a href="https://app.propstream.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            Open in PropStream
          </a>
        </div>

        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">FM Rent</h2>
          <a href="https://rentcast.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            View RentCast Projections
          </a>
        </div>

        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Section 8 Rent</h2>
          <a href="https://www.huduser.gov/portal/datasets/fmr.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            View HUD Rent Data
          </a>
        </div>

        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Crime</h2>
          <a href={`https://spotcrime.com/search?q=${encodedAddress}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            View Crime Map
          </a>
        </div>

        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Comps (PropStream)</h2>
          <a href="https://app.propstream.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            View Nearby Comps
          </a>
        </div>
      </div>
    </div>
  );
}
