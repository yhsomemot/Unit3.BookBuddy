/* TODO - add your code to create a functional React component that renders a login form */

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Login({ setToken, username, setUsername }) {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login", {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({ email: username, password: password })
            });
            const result = await response.json();
            setToken(result.token)
            setSuccessMessage(result.message);
            if (
                response.status === 200
            ) {
                setLoggedIn(true)
            }
        } catch (error) { setError(error.message); }
    }

    useEffect(() => {
        if (
            loggedIn
        ) {
            navigate("/account")
        }
    }, [loggedIn])

    return (
        <div>
            <h1 className="logIn">Log In</h1>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}

            <form className="loginForm" onSubmit={handleSubmit}>
                <label >
                    First Name: {""}
                </label>
                <label id="username">
                    Username: {""}
                    <input type="email" value={username} onChange={(e) => { setUsername(e.target.value) }} />
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