import { useEffect, useState } from "react";
import Footer from "../HomePage/Footer";
const Update = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1);
    return () => clearTimeout(timeout);
  }, []);
  if (!isMounted) return null;

  return (
    <>
      <h1 className="text-3xl">News & Updates</h1>
      <Footer />
    </>
  );
};

export default Update;
