import { Link } from "react-router-dom";

interface AssetCardProps {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  priceUsd: string;
  marketCapUsd: string;
  changePercent24Hr: string;
}

export function AssetCard({ id, rank, symbol, name, priceUsd, marketCapUsd, changePercent24Hr }: AssetCardProps) {
  const price = parseFloat(priceUsd).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
  const marketCap = parseFloat(marketCapUsd).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
  const change = parseFloat(changePercent24Hr).toFixed(2);
  const isPositive = parseFloat(change) > 0;

  return (
    <Link to={`/asset/${id}`}>
      <div className="brutal-border bg-white p-4 cursor-pointer">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold">{rank}</span>
            <div>
              <h3 className="font-bold">{name}</h3>
              <span className="text-sm opacity-75">{symbol}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold">{price}</div>
            <div className="text-sm opacity-75">MCap: {marketCap}</div>
            <div className={isPositive ? "text-green-600" : "text-red-600"}>
              {change}%
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}