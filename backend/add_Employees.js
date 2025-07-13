import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

export const addEmployees = app.post("/add_employees", async (req, res) => {
  const { first_name, last_name, email, role, phone_nmuber } = req.body;

  try {
    const employees = await prisma.Employees.create({
      data: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        role: role,
        phone_nmuber: phone_nmuber,
        date_of_birth: date_of_birth
      },
    });

    return new Response(
      JSON.stringify({ message: "Employess created Successfully", employees }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error creating employees", error }),
      {
        status: 501,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
});
