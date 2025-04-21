import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Producto A", value: 400 },
  { name: "Producto B", value: 300 },
  { name: "Producto C", value: 300 },
  { name: "Producto D", value: 200 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

function AnalyticsChart({ type }) {
  return (
    <div className="w-full h-64 p-4 bg-white rounded-2xl shadow">
      <ResponsiveContainer width="100%" height="100%">
        {type ? (
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        ) : (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}

export default AnalyticsChart;
