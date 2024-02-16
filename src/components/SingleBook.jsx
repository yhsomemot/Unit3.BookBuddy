/* TODO - add your code to create a functional React component that renders details for a single book. 
Fetch the book data from the provided API. 
You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useEffect, useState } from "react"

export async function SingleBook() {
    const [book, setBook] = useState({});

    useEffect(() => {
        async function fetchSingleBook(bookId) {
            try {
                const response = await fetch(
                    `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`);
                const result = await response.json();
                setBook(result.book);
                console.log(result)
            } catch (error) {
                console.error(error);
            }
        }
        fetchSingleBook();
    })

    return (
        <>
            <h1>Single book</h1>
            {/* <h2>{book.title}</h2> */}
        </>
    );
}