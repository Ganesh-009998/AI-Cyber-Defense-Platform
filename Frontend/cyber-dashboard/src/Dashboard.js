import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

function Dashboard() {

  const data = [
    { name: "Total Scans", value: 120 },
    { name: "Malware", value: 35 },
    { name: "Phishing", value: 20 }
  ];

  return (
    <div style={{padding:"40px"}}>

      <h1>AI Cyber Defense Dashboard</h1>

      <h2>Threat Analytics</h2>

      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" />
      </BarChart>

    </div>
  );
}

export default Dashboard;