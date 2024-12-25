import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom"; 
import '../style/userDetail.css'
export default function UserDetail() { 
    const { id } = useParams(); 
    const [user, setUser] = useState(null); 
    useEffect(() => { 
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`) 
        .then((response) => response.json()) 
        .then((data) => setUser(data)); 
    }, [id]); 
    if (!user) return <p>Chargement...</p>; 
    return ( 
        <div className="user-detail-container">
        <h1>User Details</h1>
        <form className="user-detail-form">
          <label>
            Name
            <input type="text" value={user.name} readOnly />
          </label>
          <label>
            Email
            <input type="email" value={user.email} readOnly />
          </label>
          <button type="button">Back</button>
        </form>
      </div>
    ); 
}