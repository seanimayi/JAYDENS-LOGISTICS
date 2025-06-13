import React, { useState, useEffect } from "react";
import * as MdIcons from "react-icons/md";

export default function DashboardCards() {
  const [cards, setCards] = useState([
    { title: "Post", value: 0, icon: "MdPostAdd" },
    { title: "Employees", value: 0, icon: "MdSupervisedUserCircle" },
    { title: "Admins", value: 0, icon: "MdAdminPanelSettings" },
  ]);

  useEffect(() => {
    const getLength = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/admins_length",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          // Update only the Admins card value
          setCards((prev) =>
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
    <div className="grid grid-cols-1 md:[grid-template-columns:repeat(3,25%)] gap-4 py-[1rem]">
      {cards.map((card, index) => {
        const Icon = MdIcons[card.icon];
        return (
          <div
            key={index}
            className="bg-white ring-1 ring-slate-300 rounded-lg p-6 flex items-center justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                {card.title}
              </h3>
              <p className="text-2xl font-bold text-slate-800">{card.value}</p>
            </div>
            <Icon size={40} className="text-blue-600" />
          </div>
        );
      })}
    </div>
  );
}
