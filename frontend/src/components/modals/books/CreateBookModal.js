import {useBookContext} from "../../../context/BookContext";
import CreateModal from "../Modal";

const CreateBookModal = ({ open, close }) => {
    const { createBooks } = useBookContext();

    const bookFields = [
        { name: "Title", label: "Title", placeholder: "Title of the book" },
        { name: "Description", label: "Description", placeholder: "Description of the book" },
        { name: "Price", label: "Price", placeholder: "Price of the book" },
    ]

    return (
        <CreateModal
            open={open}
            close={close}
            title="Create Book"
            fields={bookFields}
            handleSubmit={createBooks}
        />
    )
}

export default CreateBookModal;