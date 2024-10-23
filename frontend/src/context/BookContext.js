import { createContext, useContext, useState, useEffect } from 'react';
<<<<<<< HEAD
import { update_book_service, get_books_service} from "../services/books";
=======
import { update_book_service, get_books_service } from "../services/books";
>>>>>>> upstream/main

const BookContext = createContext({});

const BookProvider = (props) => {
<<<<<<< HEAD
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

    const values = { books, updateBook };
    return (
        <BookContext.Provider value={values}>
            {props.children}
        </BookContext.Provider>
    )
=======
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

	const values = { books, updateBook };
	return (
		<BookContext.Provider value={values}>
			{props.children}
		</BookContext.Provider>
	)
>>>>>>> upstream/main
}

const useBookContext = () => { return useContext(BookContext) }
export { BookProvider, useBookContext }