import { useCategoryContext } from "../../../context/CategoryContext";
import CreateModal from '../Modal';

const CreateCategoryModal = ({ open, close }) => {
	const { createCategories } = useCategoryContext();

	const categoryField = [
		{ name: "name", label: "Name", placeholder: "Name" },
		{ name: "description", label: "Description", placeholder: "Description of category" },
	]

	return (
		<CreateModal
			open={open}
			close={close}
			title="Create Category"
			fields={categoryField}
			handleSubmit={createCategories}
		/>
	);
}

export default CreateCategoryModal;