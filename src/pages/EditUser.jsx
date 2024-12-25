import React, { useEffect, useState } from "react"; 
import { useParams, useNavigate } from "react-router-dom"; 
import UserForm from "../components/UserForm"; 
import "../style/EditUser.css";
export default function EditUser() { 
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    const [user, setUser] = useState(null); 
    useEffect(() => { 
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`) 
        .then((response) => response.json()) 
        .then((data) => setUser(data)); 
    }, [id]); 
    const handleUpdateUser = (updatedUser) => { 
        console.log("Utilisateur mis à jour :", updatedUser); 
        navigate("/"); 
    }; 
    if (!user) return <p>Chargement...</p>; 
    return ( 
        <div className="edit-user-container">
            <h1>Modifier un utilisateur</h1>
            <UserForm initialData={user} onSubmit={handleUpdateUser} />
        </div>
    ); 
} 
