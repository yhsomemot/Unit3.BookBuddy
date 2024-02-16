/* TODO - add your code to create a functional React component that renders a registration form */

import { useState } from "react";

export function Register() {
    const [username.setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [token, setToken] = useState(null)

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

            <form onSubmit={handleSubmit}>
                {/* have a error mesasge where it needs to be an email */}
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" />

                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" />

                <label htmlFor="username">Username</label>
                <input type="text" name="username" />

                <label htmlFor="password">Password</label>
                <input type="text" name="password" />

                <button type="submit">Register</button>
            </form>
        </>
    )
}