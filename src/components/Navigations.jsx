/* TODO - add your code to create a functional React component that renders a navigation bar for 
the different views in your single page application. You may consider conditionally rendering some options - 
for example 'Login' should be available if someone has not logged in yet. */
import { Link } from "react-router-dom";



//  include the username somewhere here. display username at top.

export function Navigations({username}) {

    return (
        <div id="navbar">
            <Link to="/books" className="books">
                Books
            </Link>
            <Link to="/login" className="login">
                Login
            </Link>
            <Link to="/account" className="account">
                Account
            </Link>
            <span className="hello">Hello, {username} </span>
        </div>
    );
}