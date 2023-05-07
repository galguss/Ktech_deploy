import React from "react";

function Input({ label, type, list = "", handleValue , value}) {
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
        value={value}
        onChange={(e) =>
          handleValue(type === "file" ? e.target.files[0] : e.target.value)
        }
      />
    </>
  );
}

export default Input;
