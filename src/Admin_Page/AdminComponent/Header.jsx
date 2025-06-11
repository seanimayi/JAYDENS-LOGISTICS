import { MdAccountCircle, MdAdd, MdNotifications, MdSearch } from "react-icons/md";

export default function Header() {
  return (
    <>
      <div className="p-[1rem] sticky top-0 left-0 w-full bg-white rounded-tr-[30px] shadow-sm flex items-center justify-between">
        <div className="flex gap-2 shadow-sm w-[300px] py-1 px-1 rounded-full ring-1 ring-slate-200">
            <div className="flex justify-center items-center flex-col h-[35px] w-[35px] text-white rounded-full bg-blue-600"><MdSearch size={20}/></div>
            <input type="search" placeholder="Type something here..." className="text-[0.8rem] border-none outline-none w-[80%]"/>
        </div>
        <div className="flex items-center justify-between gap-5">
            <button className="btn bg-blue-600 text-white"><MdAdd size={20}/></button>
            <button className="btn bg-slate-100 text-slate-400"><MdNotifications size={15}/></button>
            <button className="btn bg-slate-200"></button>
        </div>
      </div>
    </>
  );
}
