import { useEffect, useState } from "react";
import UserTable from "../components/UserTable"; 
import "../style/Home.css";
export default function Home() { 
    const [users, setUsers] = useState([]); 
    useEffect(() => { 
        fetch("https://jsonplaceholder.typicode.com/users") 
        .then((response) => response.json()) 
        .then((data) => setUsers(data)); 
    }, []);
    return ( 
        <div className="home-container">
            <h1>Liste des utilisateurs</h1>
            <div className="user-table-container">
                <UserTable users={users} />
            </div>
        </div>
    ); 
} 