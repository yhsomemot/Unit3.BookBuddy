/* TODO - add your code to create a functional React component that renders a login form */

import { useState } from "react";

export default function Login({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("")
    
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login",{
                method: "POST",
                body: JSON.stringify({ username: username, password: password })
            });
            const result = await response.json();
            // setToken(result.token)
            setSuccessMessage(result.message);
        } catch (error) { setError(error.message); }
    }

    return (
        <>
            <h2>Sign Up</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username: {""}
                    <input value={username} onChange={(e) => { setUsername(e.target.value) }} />
                </label>
                <br />
                <label>
                    Password:{""}
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </label>
                <br />
                <br />
                <button>Submit</button>
            </form>
        </>

    )
}