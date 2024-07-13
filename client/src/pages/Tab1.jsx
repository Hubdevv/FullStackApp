import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Tab1 = () => {
  const [user, setUser] = useState({
    nom: "",
    date_naiss: "",
    email: "",
    age: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/users", user);
      navigate("/tab2");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="py-14">
      <h1 className="pb-5">Add New user</h1>
      <div className="grid grid-cols-5 gap-5">
      <input
        type="text"
        placeholder="user nom"
        name="nom"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="user date_naiss"
        name="date_naiss"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="user email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="User age"
        name="age"
        onChange={handleChange}
      />
      <button onClick={handleClick} className="bg-purple-700 py-2 px-4">Add</button>
      {error && "Something went wrong!"}
      </div>
    
    </div>
  );
};

export default Tab1;
