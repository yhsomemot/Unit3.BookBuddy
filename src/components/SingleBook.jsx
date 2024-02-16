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
                    "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/:bookId"
                    const result = await response.json();
                    return result.book
                )
            } catch (error) {
                console.error(error);
            }
        }
    })

    return (
        <h1>Single book</h1>
    );
}

// //export async function getPlayer(playerId) {
//     try {
//         const response = await fetch(`${API_URL}/players/${playerId}`);
//         const result = await response.json();
//         return result.data.player;
//     } catch (error) {
//         console.error(error);
//     }
// }