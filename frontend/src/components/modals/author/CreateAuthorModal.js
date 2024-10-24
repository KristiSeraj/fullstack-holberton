
import { useAuthorContext } from "../../../context/AuthorContext";
import CreateModal from "../Modal";

const CreateAuthorModal = ({ open, close }) => {
	const { createAuthor } = useAuthorContext();

	const authorFields = [
		{ name: "name", label: "Name", placeholder: "Enter author's name" },
		{ name: "lastname", label: "Lastname", placeholder: "Enter author's lastname" },
	]

	return (
		<CreateModal
			open={open}
			close={close}
			title="Create Author"
			fields={authorFields}
			handleSubmit={createAuthor}
		/>
	);
}

export default CreateAuthorModal;