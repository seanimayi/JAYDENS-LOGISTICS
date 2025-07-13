import { useState } from "react";
import { FiImage } from "react-icons/fi";
import { MdArrowBack, MdCancel } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

export default function AdminDashboardPostFill({ cancelPost, updatePost }) {
  const [post, setPostData] = useState({ title: "", description: "" });
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [success, setSuccess] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [image, setImage] = useState(null); // 👈 image state
  const [preview, setPreview] = useState(""); // 👈 optional preview
  const [showPost, setShowPost] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!post.title || !post.description) {
      setError("Please fill in all fields.");
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
      return;
    }

    const formData = new FormData();
    formData.append("title", post.title);
    formData.append("content", post.description);
    formData.append("author_id", "1"); // replace with dynamic author ID if needed

    if (image) {
      formData.append("image", image);
    }

    try {
      const res = await fetch("http://localhost:3000/api/create-post", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      console.log("Post result:", result);
      setSuccess("Post created successfully!");
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      setPostData({ title: "", description: "", image: "" });
      setPreview(""); // Reset preview after successful post
      updatePost(); // Call the updatePost function to refresh the post list
      setTimeout(() => cancelPost(), 2000); // Close the post form after submission
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  const removePic = () => {
    setImage("");
    setPreview("");
  };

  return (
    <>
      {showPost && (
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <div className="w-full h-[480px] bg-white px-4 rounded-2xl">
            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex justify-start items-start flex-col relative overflow-hidden overflow-y-auto"
              noValidate
            >
              <AnimatePresence mode="wait">
                {showError && (
                  <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 w-[30%] bg-red-500 text-white p-4 rounded-b-lg"
                  >
                    {error}
                  </motion.div>
                )}

                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 w-[30%] bg-green-500 text-white p-4 rounded-b-lg"
                  >
                    {success}
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={cancelPost}
                type="button"
                className="mt-3 h-[25px] w-[25px] bg-blue-600 rounded-full text-white flex justify-center items-center"
              >
                <MdArrowBack />
              </button>

              <input
                type="text"
                placeholder="Add Title Here..."
                name="title"
                onChange={(e) =>
                  setPostData({ ...post, title: e.target.value })
                }
                value={post.title}
                className="py-5 text-4xl bg-transparent border-none outline-none text-slate-500 w-full"
              />

              <textarea
                placeholder="Add Description Here..."
                name="description"
                onChange={(e) =>
                  setPostData({ ...post, description: e.target.value })
                }
                value={post.description}
                className="py-5 text-xl bg-transparent border-none outline-none text-slate-500 resize-none h-[300px]"
              ></textarea>

              {/*PREVIEW IMAGE */}
              {preview && (
                <div className="relative h-[150px]">
                  <span
                    onClick={removePic}
                    className="absolute top-4 right-2 cursor-pointer text-red-500 h-[30px] w-[30px] flex justify-center items-center bg-white rounded-full shadow-md"
                  >
                    <MdCancel />
                  </span>
                  <img
                    src={preview}
                    alt="preview"
                    className="w-[100%] h-52 rounded-lg border my-2"
                  />
                </div>
              )}

              <div className="sticky bottom-2 right-2 w-full flex justify-end items-center gap-2">
                <label className="flex items-center gap-2 w-fit cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md">
                  <FiImage /> Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setImage(file);
                        setPreview(URL.createObjectURL(file));
                      }
                    }}
                  />
                </label>

                <button
                  type="submit"
                  className="h-[38px] w-[13%] text-white rounded-full bg-blue-600"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
