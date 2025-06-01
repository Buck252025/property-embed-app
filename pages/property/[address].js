
import { useRouter } from 'next/router';

export default function PropertyPage() {
  const router = useRouter();
  const { address } = router.query;
  const encodedAddress = encodeURIComponent(address || "");

  const zillowURL = `https://www.zillow.com/homes/${encodedAddress}`;
  const propstreamURL = `https://login.propstream.com/search?address=${encodedAddress}`;
  const rentcastURL = `https://rentcast.io/search?q=${encodedAddress}`;
  const spotcrimeURL = `https://spotcrime.com/search?q=${encodedAddress}`;
  const hudURL = `https://www.huduser.gov/portal/datasets/fmr.html`;
  const compsURL = `https://app.propstream.com/propertydetails?address=${encodedAddress}`;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-2">Results for: {decodeURIComponent(address)}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <iframe src={zillowURL} className="w-full h-80 border rounded" title="Zillow"></iframe>
        <iframe src={rentcastURL} className="w-full h-80 border rounded" title="RentCast"></iframe>
        <iframe src={spotcrimeURL} className="w-full h-80 border rounded" title="SpotCrime"></iframe>

        <div className="p-4 bg-white border rounded shadow">
          <h3 className="text-lg font-bold mb-2">HUD Section 8 Rent</h3>
          <a href={hudURL} target="_blank" className="text-blue-600 underline" rel="noreferrer">View HUD Rent Data</a>
        </div>

        <div className="p-4 bg-white border rounded shadow">
          <h3 className="text-lg font-bold mb-2">PropStream</h3>
          <a href={propstreamURL} target="_blank" className="text-blue-600 underline" rel="noreferrer">Open in PropStream</a>
        </div>

        <div className="p-4 bg-white border rounded shadow">
          <h3 className="text-lg font-bold mb-2">Comps (PropStream)</h3>
          <a href={compsURL} target="_blank" className="text-blue-600 underline" rel="noreferrer">View Nearby Comps</a>
        </div>
      </div>
    </div>
  );
}
