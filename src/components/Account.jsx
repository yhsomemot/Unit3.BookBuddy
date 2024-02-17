/* TODO - add your code to create a functional React component that renders account details for a logged in user. 
Fetch the account data from the provided API. 
You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import { useState } from "react";

// GET users/me

export function Account({ token, setToken }) {
    const [successMessage, setSuccessMessage] = useState("")

    async function handleClick() {
        try {
            const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            const result = await response.json();
            console.log(result, "this is result.data")
            setSuccessMessage(result.message);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <div>My Token: {token} </div>
            <p>Will need a check out and check in. a list of books I have???
                or is this GET /reservations and DELETE /reservations/:reservatonsId
            </p>
        </>

    )
}

