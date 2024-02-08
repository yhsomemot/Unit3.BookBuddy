/* TODO - add your code to create a functional React component that displays 
all of the available books in the library's catalog. 
Fetch the book data from the provided API. 
Users should be able to click on an individual book to navigate 
to the SingleBook component and view its details. */

import { useEffect, useState } from "react";

export default function Books({ setToken }) {

    const [books, setBooks] = useState("");

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await fetch(
                    "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"
                );
                const result = await response.json();
                setBooks(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchBooks();
    }, []);

    return (
        <>
            <h1>Books</h1>
            {/* <ul>
                {books.map((book) => {
                    return <li key={book.id} book={book} setToken = {setToken}>
                        {book.title}
                        </li>;
                })}
            </ul> */}
        </>
    )
}

