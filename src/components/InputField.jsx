import React from "react";
import "../css/InputField.css"; // Import the CSS file for styling

const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue = "",
  error,
  inputProps,
}) => {
  return (
    <div className="input-field">
      <label className="input-label">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="input-element"
        defaultValue={defaultValue}
        {...inputProps}
      />
      {error?.message && (
        <p className="input-error">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
