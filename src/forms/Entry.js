import { useState } from "react";
import "./entry.css";
import FormInput from "./components/FormInput";
import fs from 'fs';

const Entry = () => {
  const [values, setValues] = useState({
    Name: "",
    email: "",
    quantity: "",
    price: "",
    phone: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "Enter the Name",
      errorMessage:
        "Username should be 3-20 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z]{3,20}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "quantity",
      type: "text",
      placeholder: "Quantity",
      label: "Quantity",
    },
    {
      id: 4,
      name: "price",
      type: "text",
      placeholder: "Price",
      label: "Price",
      required: true,
    },
    {
      id: 5,
      name: "Phone",
      type: "number",
      placeholder: "Phone Number",
      label: "Confirm Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const postData =()=>{
    console.log(values)
    fs.writeFile('../data/db.json', values, 'utf8');

  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Enter Details</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button onClick={postData}>Submit</button>
      </form>
    </div>
  );
};

export default Entry;