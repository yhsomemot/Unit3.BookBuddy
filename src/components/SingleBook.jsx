/* TODO - add your code to create a functional React component that renders details for a single book. 
Fetch the book data from the provided API. 
You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useEffect, useState } from "react"

export default function SingleBook() {
    const [book, setBooks] = useState(null);

    useEffect (() =>{
        async function fetchSingleBook() {
            try {
                const response = await fetch(
                    `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/${}`
                )
            } catch (error) {
                console.error(error);
            }
        }
    })
    return ();
}