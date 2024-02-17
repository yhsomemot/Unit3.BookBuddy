/* TODO - add your code to create a functional React component that renders a login form */

import { useState } from "react";
import { Link } from "react-router-dom";

export function Login({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login", {
                method: "POST",
                body: JSON.stringify({ username: username, password: password })
            });
            const result = await response.json();
            // setToken(result.token)
            setSuccessMessage(result.message);
        } catch (error) { setError(error.message); }
    }

    return (
        <div>
            <h2>Log In</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}

            <form className="loginForm" onSubmit={handleSubmit}>
                <label id="username">
                    Username: {""}
                    <input value={username} onChange={(e) => { setUsername(e.target.value) }} />
                </label>
                <br />
                <label id="password">
                    Password: {""}
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </label>
                <br />
                <button type="submit">Submit</button>
                <br />
                 <div>
                <Link to="/register" className="nav">
                    Create account
                </Link>
            </div>
            </form>
            
           

        </div>

    )
}