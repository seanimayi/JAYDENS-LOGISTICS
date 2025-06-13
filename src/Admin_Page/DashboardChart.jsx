import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function DashboardChart() {
  const employeesGrowth = [
    { month: "Jan", growth: 5 },
    { month: "Feb", growth: 10 },
    { month: "Mar", growth: 15 },
    { month: "Apr", growth: 20 },
    { month: "May", growth: 25 },
    { month: "Jun", growth: 30 },
  ];

  const postOverTime = [
    { month: "Jan", posts: 20 },
    { month: "Feb", posts: 30 },
    { month: "Mar", posts: 25 },
    { month: "Apr", posts: 40 },
    { month: "May", posts: 50 },
    { month: "Jun", posts: 60 },
  ];

  return (
    <>
      <div className=" md:grid grid-cols-2 w-[100%] gap-3">
        <div className=" my-2 h-[280px] bg-white ring-1 ring-slate-300 rounded-xl w-full flex flex-start items-start justify-start flex-col ">
          <h2 className="text-[0.9rem] px-4 py-2">Employees Growth</h2>
          <div className="w-full h-[100%] flex flex-start items-center justify-center flex-col overflow-hidden">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={employeesGrowth}
                margin={{ top: 5, right: 20, bottom: 5, left: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={true} />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis width={0} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="growth"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="my-2 h-[280px] bg-white ring-1 ring-slate-300 rounded-xl w-full flex flex-start items-start justify-start flex-col">
          <h2 className="text-[0.9rem] px-4 py-2">Posts Over Time</h2>
          <div className="w-full h-[100%] flex flex-start items-center justify-center flex-col">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={postOverTime}
                margin={{ top: 5, right: 20, bottom: 5, left: 21 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line
                  type='monotone'
                  dataKey="posts"
                  stroke="#82ca9d"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
