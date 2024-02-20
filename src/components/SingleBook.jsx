/* TODO - add your code to create a functional React component that renders details for a single book. 
Fetch the book data from the provided API. 
You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export function SingleBook( token ) {
    const [book, setBook] = useState({});
    const { bookId } = useParams();
    useEffect(() => {
        async function fetchSingleBook() {
            try {
                const response = await fetch(
                    `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`);
                const result = await response.json();
                setBook(result.book);
                
            } catch (error) {
                console.error(error);
            }
        }
        fetchSingleBook();
    }, [])

    return (
        <>
            <img className="coverImage" src={book.coverimage} />
            <h2>{book.title}</h2>
            <h2>{book.author}</h2>
            <p>{book.description}</p>
            <button>Check Out</button>
            {/* have a message that tell them to log in?? */}
            {/* have an onclick to check out but attach it to a token?? */}
        </>
    );
}