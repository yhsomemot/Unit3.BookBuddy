

import { useEffect, useState } from "react";


export function Account({ token, email, username }) {
    const [successMessage, setSuccessMessage] = useState("")
    const [book, setBook] = useState([]);


    async function fetchUserData() {
        try {
            const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ email: username, password: password })
            });
            const result = await response.json();
            setSuccessMessage(result.message);
        } catch (error) {
            setError(error.message);
        }

    }

    useEffect(() => {

        async function fetchCheckIns(book) {
            try {
                const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(book),
                });
                const result = await response.json();

                setBook(result.reservation ?? []);
                return result.book;
            } catch (error) {
                console.error(error);
            }
        }
        fetchCheckIns();
    }, []);


    async function deleteCheckOuts(bookId) {
        try {
            console.log("book has been returned!")
            const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${bookId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            });
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
        <h1>Hello, {username} </h1>
            <h2 className="account"> My library</h2>
            <thead className="">
                <tr>
                    <th>name</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody className="">
                {book.map((book) => {
                    return (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>
                                <button onClick={async () => await deleteCheckOuts(book.id)}>
                                    Return </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>


        </>

    )
}

