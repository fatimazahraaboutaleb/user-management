import React from "react"; 
import { Link } from "react-router-dom"; 
export default function UserTable({ users }) { 
return ( 
    <table> 
        <thead> 
            <tr> 
                <th>ID</th> 
                <th>Nom</th> 
                <th>Email</th> 
                <th>Actions</th> 
            </tr> 
        </thead> 
        <tbody> 
        {users.map((user) => ( 
          <tr key={user.id}> 
            <td>{user.id}</td> 
            <td>{user.name}</td> 
            <td>{user.email}</td> 
            <td className="actions">
              <button className="user-button">
                <Link to={`/user/${user.id}`}>Voir</Link>
              </button>
              <button className="edit-button">
                <Link to={`/user/${user.id}/edit`}>Modifier</Link>
              </button>
            </td>

          </tr> 
        ))} 
        </tbody> 
    </table> 
  ); 
}