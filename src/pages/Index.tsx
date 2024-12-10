import { AssetList } from "@/components/AssetList";

export default function Index() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="brutal-border bg-primary p-8 mb-8">
        <h1 className="text-4xl font-bold">Crypto Assets</h1>
        <p className="opacity-75">Top 50 by Market Cap</p>
      </div>
      <AssetList />
    </div>
  );
}