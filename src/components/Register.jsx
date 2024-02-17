/* TODO - add your code to create a functional React component that renders a registration form */

import { useState } from "react";

export function Register({ token, setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(evt) {
        evt.preventDefault();
        if (
            username.length === "@"
        ) {
            setError(
                "please enter an email address"
            )
            return
        }
        try {
            const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register", {
                method: "POST",
                body: JSON.stringify({ username: username, password: password })
            });
            const result = await response.json();
            setToken(result.token)
            setSuccessMessage(result.message);
            console.log(result)
        } catch (error) { setError(error.message); }

    }

    return (
        <>
            <h1>
                Register
            </h1>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <label>
                    Username: {""}
                    <input value={username} onChange={(evt) => { setUsername(evt.target.value) }} />
                </label>
                <br />
                <label>
                    Password: {""}
                    <input type="password" value={password} onChange={(evt) => { setPassword(evt.target.value) }} />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
        </>
    )
}