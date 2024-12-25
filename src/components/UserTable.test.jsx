import { render, screen } from "@testing-library/react"; 
import UserTable from "../components/UserTable"; 
test("affiche les utilisateurs dans le tableau", () => { 
    const users = [ 
    { id: 1, name: "Alice", email: "alice@example.com" }, 
    { id: 2, name: "Bob", email: "bob@example.com" }, 
    ]; 
    render(<UserTable users={users} />); 
    expect(screen.getByText(/Alice/i)).toBeInTheDocument(); 
    expect(screen.getByText(/Bob/i)).toBeInTheDocument(); 
});