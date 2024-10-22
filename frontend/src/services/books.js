import axios from "axios";

const url = "http://localhost:5000/api/book";

const create_book_service = async (data) => {
    const result = await axios.post(`${url}/create`, data);
    return result;
}

const get_books_service = async () => {
    const result = await axios.get(`${url}/all`);
    return result;
}

const update_book_service = async (data) => {
    const result = await axios.put(`${url}/update/${data.id}`,data);
    return result;
}

export { get_books_service, create_book_service, update_book_service }