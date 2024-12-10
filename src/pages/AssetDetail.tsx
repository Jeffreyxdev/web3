import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAssetDetails, getAssetHistory } from "@/lib/api";
import { PriceChart } from "@/components/PriceChart";
import { Link } from "react-router-dom";

export default function AssetDetail() {
  const { id } = useParams();

  const { data: asset, isLoading: loadingAsset } = useQuery({
    queryKey: ["asset", id],
    queryFn: () => getAssetDetails(id!),
  });

  const { data: history, isLoading: loadingHistory } = useQuery({
    queryKey: ["history", id],
    queryFn: () => getAssetHistory(id!),
  });

  if (loadingAsset || loadingHistory) {
    return <div className="text-center p-8">Loading asset details...</div>;
  }

  if (!asset) {
    return <div className="text-center p-8">Asset not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <Link to="/" className="brutal-border inline-block px-4 py-2 mb-8">
        ← Back to Assets
      </Link>
      
      <div className="brutal-border bg-primary p-8 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">{asset.name}</h1>
            <p className="text-xl opacity-75">{asset.symbol}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">
              ${parseFloat(asset.priceUsd).toLocaleString()}
            </div>
            <div className={parseFloat(asset.changePercent24Hr) > 0 ? "text-green-600" : "text-red-600"}>
              {parseFloat(asset.changePercent24Hr).toFixed(2)}%
            </div>
          </div>
        </div>
      </div>

      {history && <PriceChart data={history} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="brutal-border bg-white p-4">
          <h3 className="font-bold mb-2">Market Cap</h3>
          <p>${parseFloat(asset.marketCapUsd).toLocaleString()}</p>
        </div>
        <div className="brutal-border bg-white p-4">
          <h3 className="font-bold mb-2">24h Volume</h3>
          <p>${parseFloat(asset.volumeUsd24Hr).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}