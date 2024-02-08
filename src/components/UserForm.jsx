import React from "react";

function UserForm({ name, type, value, handleChange, labelText }) {
  return (
    <div className="my-2 ">
      <label htmlFor={name}>{labelText || name}</label>
      <input
        className="block shadow border w-full py-1 focus:outline-none px-3 rounded-sm"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default UserForm;
