const BASE_URL = "https://api.coincap.io/v2";

export async function getTopAssets() {
  const response = await fetch(`${BASE_URL}/assets?limit=50`);
  const data = await response.json();
  return data.data;
}

export async function getAssetHistory(id: string) {
  const response = await fetch(
    `${BASE_URL}/assets/${id}/history?interval=d1`
  );
  const data = await response.json();
  return data.data;
}

export async function getAssetDetails(id: string) {
  const response = await fetch(`${BASE_URL}/assets/${id}`);
  const data = await response.json();
  return data.data;
}