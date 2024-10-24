import { createContext, useContext, useState, useEffect } from 'react';
import {update_book_service, get_books_service, create_book_service} from "../services/books";


const BookContext = createContext({});

const BookProvider = (props) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        try {
            const result = await get_books_service();
            if (result.status === 200) {
                setBooks(result.data);
            }
        } catch (error) {
            console.log("error--in get method--", error);
            return error
        }
    }

    const createBooks = async (data) => {
        try {
            const result = await create_book_service(data)
            console.log(result)
            if (result.status === 201) {
                await getBooks();
            }
        } catch (error) {
            console.log("error--in post method--", error);
            return error
        }
    }

    const updateBook = async (data) => {
        try {
            const result = await update_book_service(data);
            if (result.status === 200) {
                await getBooks()
            }
        } catch (error) {
            console.log("error--in update--", error);
            return error
        }
    }

    const values = { books, updateBook, createBooks };
    return (
        <BookContext.Provider value={values}>
            {props.children}
        </BookContext.Provider>
    )
}

const useBookContext = () => { return useContext(BookContext) }
export { BookProvider, useBookContext }