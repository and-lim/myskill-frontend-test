import React from "react";

function PictureForm({ name, type, value, handleChange }) {
  return (
    <div>
      <input
        className="hidden"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default PictureForm;
