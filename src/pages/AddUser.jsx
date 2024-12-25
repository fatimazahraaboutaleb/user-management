import React, { useState } from "react"; 
import UserForm from "../components/UserForm"; 
import "../style/AddUser.css";

export default function AddUser() { 
    const [users, setUsers] = useState([]); 
    const handleAddUser = (user) => { 
        const newUser = { id: users.length + 1, ...user }; 
        setUsers([...users, newUser]); 
    }; 
    return ( 
        <div className="add-user-container">
            <h1>Ajouter un utilisateur</h1>
            <UserForm onSubmit={handleAddUser} />
        </div>

    ); 
} 