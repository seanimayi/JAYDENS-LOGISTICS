import { useState } from "react";

export default function EmployeeForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    role: "",
    date_of_birth: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formComponent = [
    {
      label: "First Name",
      type: "text",
      onChange: handleChange,
      name: "first_name",
      value: formData.first_name,
    },
    {
      label: "Last Name",
      type: "text",
      onChange: handleChange,
      name: "last_name",
      value: formData.last_name,
    },
    {
      label: "Email",
      type: "email",
      onChange: handleChange,
      name: "email",
      value: formData.email,
    },
    {
      label: "Role",
      type: "text",
      onChange: handleChange,
      name: "role",
      value: formData.role,
    },
    {
      label: "Phone Number",
      type: "number",
      onChange: handleChange,
      name: "number",
      value: formData.phone_number,
    },
    {
      label: "Date Of Birth",
      type: "date",
      onChange: handleChange,
      name: "date",
      value: formData.date_of_birth,
    },
  ];
  return (
    <>
      <div className="w-full mt-8">
        <h2 className="font-semibold my-3">Employee Form</h2>
        <form method="POST">
          <div className="grid grid-cols-2 gap-3">
            {formComponent.map((input, i) => (
              <div className="flex items-start gap-2 flex-col" key={i}>
                <label className="text-[0.9rem]">{input.label}</label>
                <input
                  type={input.type}
                  value={input.value}
                  name={input.name}
                  onChange={input.onChange}
                  className="h-[45px] w-full border outline-none px-5"
                />
              </div>
            ))}
          </div>
          <input type="submit" value="submit form" className="bg-slate-800 px-8 h-[39px] text-white mt-6" />
        </form>
      </div>
    </>
  );
}
