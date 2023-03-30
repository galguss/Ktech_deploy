import React from "react";

function Input({ label, type, list = "", handleValue }) {
  return (
    <>
      <label className="text">
        <b>{label}</b>
      </label>
      <input
        className="inputRes text"
        list={list}
        type={type}
        autoComplete="off"
        onChange={(e) =>
          handleValue(type === "file" ? e.target.files[0] : e.target.value)
        }
      />
    </>
  );
}

export default Input;
