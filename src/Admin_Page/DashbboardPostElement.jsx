import { MdAdd } from "react-icons/md";
export default function DashboardPost({ handlePost }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4 justify-center items-center">
        <div
          className="post rounded-2xl  border-dotted border-slate-400 border-2 relative my-5 cursor-pointer overflow-hidden flex justify-center items-center"
          onClick={handlePost}
        >
          <div className="flex justify-center items-center flex-col h-[45vh]">
            <div className="h-[50px] w-[50px] shadow-md text-xl font-bold bg-blue-500 flex justify-center items-center rounded-full text-white">
              <MdAdd />
            </div>
            <div className="py-[0.5rem] my-5 w-[60%] text-center">
              Tap Here To Make Post.
            </div>
          </div>
        </div>
        <div className="post shadow-sm">
          <img src="//" alt="post_pics"/>
        </div>
      </div>
    </>
  );
}
