import { useState } from "react";
import { Button, Form, Modal } from 'react-bootstrap';
import { useAuthorContext } from "../../../context/AuthorContext";
import AlertMessage from "../alert/AlertMessage";
const CreateModal = ({ open, close }) => {
	const { createAuthor } = useAuthorContext();
	
	const authorFields = [
		{ name: "name", label: "Author's name", placeholder: "Enter author's name" },
		{ name: "lastname", label: "Author's lastname", placeholder: "Enter author's lastname" },
	]

	return (
		<>
			<Modal
				show={open}
				onHide={close}
				backdrop="static"
				keyboard={false}
			>
				<Form onSubmit={handleSubmit}>
					<Modal.Header closeButton>
						<Modal.Title>Create Author</Modal.Title>
					</Modal.Header>
					<Modal.Body>

						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Author name</Form.Label>
							<Form.Control
								type="text"
								name="name"
								placeholder="insert name...."
								onChange={handleChage}
								value={author.name}
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1"
						>
							<Form.Label>Author Description</Form.Label>
							<Form.Control
								type="text"
								name="lastname"
								placeholder="insert name...."
								onChange={handleChage}
								value={author.lastname}
							/>
						</Form.Group>

					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={close}>
							Close
						</Button>
						<Button variant="primary" type="submit">Create</Button>
					</Modal.Footer>
				</Form>
				{show && <AlertMessage message="author has been created successfully" close={setShow} />}
			</Modal >
		</>
	);
}

export default CreateModal;