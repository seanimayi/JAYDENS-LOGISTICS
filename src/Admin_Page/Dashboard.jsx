import React, { useEffect, useState } from "react";
import * as MdIcons from "react-icons/md";

export default function Dashboard() {
  const [cards, setCards] = useState([
    { title: "Post", value: 0, icon: "MdPostAdd" },
    { title: "Employees", value: 0, icon: "MdSupervisedUserCircle" },
    { title: "Admins", value: 0, icon: "MdAdminPanelSettings" },
  ]);

  useEffect(() => {
    const getLength = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/admins_length", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (response.ok) {
          // Update only the Admins card value
          setCards(prev =>
            prev.map((card) =>
              card.title === "Admins" ? { ...card, value: data.length } : card
            )
          );
        } else {
          console.error("Failed to fetch admin count:", data);
        }
      } catch (error) {
        console.error("Error fetching admin count:", error);
      }
    };

    getLength();
  }, []);

  return (
    <div className="w-full">
      <div>
        <h1>Overview</h1>
      </div>
      <div className="grid [grid-template-columns:repeat(3,25%)] gap-3 my-4">
        {cards.map((card, index) => {
          const Icon = MdIcons[card.icon];

          return (
            <div
              key={index}
              className="bg-white rounded-2xl ring-1 ring-slate-300 p-[1.3rem] flex flex-col gap-2"
            >
              <span className="p-1 h-[40px] w-[40px] text-2xl rounded-full bg-slate-200 flex items-center justify-center text-[1.5rem] text-slate-800">
                <Icon />
              </span>
              <div>
                <span className="text-[1.2rem] font-semibold text-slate-700">
                  {card.value}
                </span>
                <p className="text-sm text-slate-500">Total number of {card.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
