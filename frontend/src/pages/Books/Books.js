import { useState } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import EditModal from "../../components/modals/category/EditModal";
import CreateBookModal from "../../components/modals/books/CreateBookModal";
import {useBookContext} from "../../context/BookContext";

const Books = () => {
    const { books, deleteBook } = useBookContext();
    console.log('books-->', books)
    const [openEdit, setOpenEdit] = useState(false);
    const [openCreate, setOpeCreate] = useState(false);
    const [book, setBook] = useState(useState({ id: 0, title: "", description: "" }));

    const handleShow = (data) => {
        setBook({ id: data.id, title: data.title, description: data.description })
        setOpenEdit(!openEdit);
    }

    const handleChage = (event) => {
        const { name, value } = event.target;
        setBook((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const closeEdit = () => setOpenEdit(!openEdit);
    const closeCreate = () => setOpeCreate(!openCreate);


    const handleDelete = async (id) => {
        await deleteBook(id);
    }

    const handleCreate = () => {
        setOpeCreate(!openCreate);
    }

    return (
        <>
            <Row>
                <Col md={12} className="mb-4">
                    <h4>Create a new Book <Button variant="primary" onClick={handleCreate}>Create</Button></h4>
                </Col>
                <Col md={12} className="mb-4">
                    <Table striped>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            books.map((book, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{book.id}</td>
                                        <td>{book.title}</td>
                                        <td>{book.description}</td>
                                        <td>${book?.price}</td>
                                        <td>
                                            <Button variant="primary" onClick={() => { handleShow(book) }}>Edit</Button>
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => { handleDelete(book.id) }}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            {
                openEdit && <EditModal open={openEdit} handleShow={handleShow} close={closeEdit} book={book} handleChage={handleChage} />
            }
            {
                openCreate && <CreateBookModal open={openCreate} close={closeCreate} />
            }
        </>
    )
}

export default Books;