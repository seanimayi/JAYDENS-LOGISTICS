import DashboardChart from "./DashboardChart";
import DashboardCards from "./DashboardCards";
import AdminDashboardHeader from "./AdminDashboardHeader";
import { useState } from "react";
export default function DashboardLay() {
  const [title, setTitle] = useState("Overview");
  return (
    <>
      <div className="flex items-center justify-start">
        <h1 className="text-[1rem]">Dashboard</h1>
        <AdminDashboardHeader title={<span className="text-[0.9rem] text-slate-500">/{title}</span>} />
      </div>
      <DashboardCards />
      <DashboardChart />
    </>
  );
}
