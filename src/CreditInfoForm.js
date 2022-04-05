import React, { useState } from "react";

export function CreditInfoForm({ details }) {
  const [input, setInput] = useState({});

  function handleChange(e) {
    let key = e.target.id;
    if (e.target.name === "gender") {
      key = e.target.name;
    }
    setInput((prev) => ({ ...prev, [key]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    details(input);
  }

  return (
    <div>
      <form id="creditInfoForm" onSubmit={handleSubmit}>
        <label for="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          onChange={handleChange}
          value={input.firstName || ""}
        />
        <label for="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          onChange={handleChange}
          value={input.lastName || ""}
        />
        <legend>Gender</legend>
        <fieldset>
          <div>
            <label for="male">Male</label>
            <input
              name="gender"
              type="radio"
              value="male"
              onClick={handleChange}
            />
          </div>
          <div>
            <label for="female">Female</label>
            <input
              name="gender"
              type="radio"
              value="female"
              onClick={handleChange}
            />
          </div>
        </fieldset>
        <label for="typeOfCustomer">Type of Customer</label>
        <select
          id="typeOfCustomer"
          name="type"
          onChange={handleChange}
          value={input.typeOfCustomer || ""}
        >
          <option value="">Choose one</option>
          <option value="new">New</option>
          <option value="existing">Existing</option>
          <option value="other">Other products</option>
        </select>
        <button style={{ display: "block", margin: "auto" }}>
          Submit Form!
        </button>
      </form>
    </div>
  );
}
