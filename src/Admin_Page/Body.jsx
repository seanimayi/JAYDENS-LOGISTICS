import Header from "./AdminComponent/Header";
const Body = ({ children }) => {
  return (
    <>
      <div className="fixed top-0 right-0 h-full w-[80%] p-2 flex justify-center items-center flex-col overflow-y-auto overflow-x-hidden">
        <div className="overflow-x-hidden overflow-y-auto bg-slate-200 h-[100%] w-[100%] rounded-tr-[30px] rounded-br-[30px] scroll">
          <Header />
          <div className="p-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Body;
