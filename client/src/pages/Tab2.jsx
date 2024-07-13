import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Tab2 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllusers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/users");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllusers();
  }, []);

  console.log(users);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/users/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <div className="py-14">
        {users.map((user) => (
          <div key={user.id} className="grid grid-cols-6 gap-5">
         
            <h2>{user.nom}</h2>
            <p>{user.date_naiss}</p>
            <p>{user.email}</p>
            <span>{user.age}</span>
            <button className="delete" onClick={() => handleDelete(user.id)}>Delete</button>
            <button className="update">
              <Link
                to={`/update/${user.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }} className="bg-purple-700 py-2 px-4">
          Ajouter un user
        </Link>
      </button>
    </div>
  );
};

export default Tab2;
