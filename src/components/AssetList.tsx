import { useQuery } from "@tanstack/react-query";
import { getTopAssets } from "@/lib/api";
import { AssetCard } from "./AssetCard";
import { Input } from "./ui/input";
import { useState } from "react";

export function AssetList() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const { data: assets, isLoading, error } = useQuery({
    queryKey: ["assets"],
    queryFn: getTopAssets,
  });

  if (isLoading) {
    return <div className="text-center p-8">Loading assets...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-600">Error loading assets</div>;
  }

  const filteredAssets = assets.filter((asset: any) => 
    asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="brutal-border bg-white p-4">
        <Input 
          type="text"
          placeholder="Search by name or symbol..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>
      {filteredAssets.map((asset: any) => (
        <AssetCard key={asset.id} {...asset} />
      ))}
    </div>
  );
}