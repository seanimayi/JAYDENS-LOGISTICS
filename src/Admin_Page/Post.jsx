import { MdSearch } from "react-icons/md";
import DashboardPost from "./DashbboardPostElement";
import AdminDashboardPostFill from "./AdminDashboardPostFill";
import { useEffect, useState } from "react";
import { lazy } from "react";

export default function Post() {
  const [showPost, setShowPost] = useState(true);
  const [showPostFill, setShowPostFill] = useState(false);
  const [length, setLength] = useState(0);

  const handlePost = () => {
    setShowPost(false);
    setShowPostFill(true);
  };

  const cancelPost = () => {
    setShowPostFill(false);
    setShowPost(true);
  };

  const updatePost = () => {
    setLength(length + 1);
  };

  useEffect(() => {
    const fetchPostCount = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/fetch-post-count");
        const data = await response.json();
        console.log("Post count:", data.length);
        setLength(data.length);
      } catch (error) {
        console.error("Error fetching post count:", error);
      }
    };

    fetchPostCount();
  }, []);
  return (
    <>
      {showPost && (
        <div>
          <div className="border-b border-slate-300 py-1 flex justify-between items-center w-full">
            <div>
              <h1 className="text-xl">Post</h1>
              <h1 className="text-2xl text-slate-500">
                {length < 0 ? 0 : length} Post
              </h1>
            </div>

            <div className="flex items-center justify-end gap-3 w-[60%]">
              <button className="bg-blue-500 text-white px-[2rem] py-[0.5rem] rounded-full flex gap-1 items-center duration-300 hover:text-slate-600 hover:bg-white">
                Filter
              </button>

              <div className="relative">
                <div className="absolute top-[20%] left-2 h-[25px] w-[25px] bg-blue-500 flex justify-center items-center text-white font-bold rounded-full">
                  <MdSearch />
                </div>
                <input
                  type="search"
                  placeholder="Search for post"
                  className="rounded-full h-[40px] w-[262px] px-[2.5rem] outline-none text-[0.8rem]"
                />
              </div>
            </div>
          </div>

          <DashboardPost handlePost={handlePost} />
        </div>
      )}

      {showPostFill && (
        <AdminDashboardPostFill
          cancelPost={cancelPost}
          updatePost={updatePost}
        />
      )}
    </>
  );
}
