import { useEffect, useState } from "react";

export default function Admin() {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    async function fetchAdmins() {
      try {
        const res = await fetch("http://localhost:3000/api/fetch_admins", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message)
        } else {
          setAdmins(data.data);
          console.log(data.data)
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchAdmins();
  }, []);
  return (
    <>
      <div>
        <h1>Admin</h1>
        {admins.map((u) => (
          <div key={u.id}>{u.full_name}</div>
        ))}
      </div>
    </>
  );
}
