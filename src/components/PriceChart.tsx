import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface PriceChartProps {
  data: Array<{
    time: number;
    priceUsd: string;
  }>;
}

export function PriceChart({ data }: PriceChartProps) {
  const chartData = data.map((item) => ({
    date: new Date(item.time).toLocaleDateString(),
    price: parseFloat(item.priceUsd),
  }));

  return (
    <div className="h-[400px] brutal-border bg-white p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <XAxis dataKey="date" />
          <YAxis 
            domain={['auto', 'auto']}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip 
            formatter={(value: number) => [`$${value.toLocaleString()}`, 'Price']}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#000"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}