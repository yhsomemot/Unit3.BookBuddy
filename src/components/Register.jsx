/* TODO - add your code to create a functional React component that renders a registration form */

import { useState } from "react";

export function Register({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        // if (
        //     username.length === "@"
        // ) {
        //     setError(
        //         "please enter an email address"
        //     )
        //     return
        // }
        try {
            const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register", {
                method: "POST",
                body: JSON.stringify({ username: username, password: password })
            });
            const result = await response.json();
            setSuccessMessage(result.message);
            setToken(result.token)
        } catch (error) { setError(error.message); }

    }

    return (
        <>
            <h1>
                Register
            </h1>
            <div>
                {successMessage && <p>{successMessage}</p>}
                {error && <p>{error}</p>}
            </div>


            <form className="registerForm" onSubmit={handleSubmit}>
                
                <label>
                    Username: {""}
                    <input value={username} onChange={(e) => { setUsername(e.target.value) }} />
                </label>
                <br />
                <label>
                    Password: {""}
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
        </>
    )
}