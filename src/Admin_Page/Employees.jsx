import { MdAdd, MdList } from "react-icons/md";
import EmployeeForm from "./EmployeeForm";

export default function Employees() {
  return (
    <>
      <div className="min-h-full w-full grid md:grid-cols-[68%_30%] gap-[1%] ">
        <div className="h-full w-full bg-white  py-7 px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Employee</h1>
            <div className="flex items-center gap-1">
              <button className="h-[40px] w-[40px] bg-green-500 text-white flex justify-center items-center rounded-full drop-shadow-xl">
                <MdAdd />
              </button>
              <button className="flex items-center bg-slate-800 text-white px-3  gap-1 h-[40px] rounded-lg">
                <MdList /> Employees
              </button>
            </div>
          </div>
          <div className="">
            <EmployeeForm />
          </div>
        </div>
        <div className="bg-white h-full">wd</div>
      </div>
    </>
  );
}
