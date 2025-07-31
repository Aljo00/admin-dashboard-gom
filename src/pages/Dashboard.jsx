import sheetData from "../data/sheetData";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Dashboard = () => {
  const totalRevenue = sheetData.reduce((acc, entry) => acc + entry.revenue, 0);
  const uniqueClients = [...new Set(sheetData.map((item) => item.client))]
    .length;
  const totalServices = sheetData.length;

  const revenueByService = sheetData.reduce((acc, { service, revenue }) => {
    acc[service] = (acc[service] || 0) + revenue;
    return acc;
  }, {});

  const chartData = Object.entries(revenueByService).map(
    ([service, revenue]) => ({
      service,
      revenue,
    })
  );

  const COLORS = [
    "#a855f7",
    "#ec4899",
    "#6366f1",
    "#f59e0b",
    "#10b981",
    "#3b82f6",
    "#ef4444",
    "#8b5cf6",
    "#14b8a6",
    "#f43f5e",
  ];

  return (
    <div className="ml-64 min-h-screen bg-gradient-to-br from-[#f8f6ff] to-[#f2f2ff] p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Monthly Revenue Dashboard
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          {
            label: "Total Revenue",
            value: `₹${totalRevenue.toLocaleString()}`,
          },
          { label: "Unique Clients", value: uniqueClients },
          { label: "Total Services", value: totalServices },
        ].map((card, idx) => (
          <div
            key={idx}
            className="border border-purple-300 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
          >
            <h3 className="text-md font-medium text-gray-600">{card.label}</h3>
            <p className="text-3xl font-bold mt-2 text-gray-800">
              {card.value}
            </p>
          </div>
        ))}
      </div>

      {/* Client Table */}
      <div className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          Client Data
        </h3>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-purple-50 text-gray-600">
              <th className="p-3 text-left">Client Name</th>
              <th className="p-3 text-left">Service Provided</th>
              <th className="p-3 text-left">Revenue (INR)</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {sheetData.map((entry, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-200 hover:bg-purple-50 transition duration-150"
              >
                <td className="p-3 text-gray-800 font-medium">
                  {entry.client}
                </td>
                <td className="p-3 text-gray-700">{entry.service}</td>
                <td className="p-3 text-purple-600 font-semibold">
                  ₹{entry.revenue.toLocaleString()}
                </td>
                <td className="p-3 text-gray-500">{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
