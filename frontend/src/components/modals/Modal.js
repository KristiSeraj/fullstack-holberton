import { useState } from "react";
import { Button, Form, Modal } from 'react-bootstrap';
import AlertMessage from "./alert/AlertMessage";

const CreateModal = ({ open, close, title, fields, handleSubmit }) => {
    const [formData, setFormData] = useState({});
    const [show, setShow] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        await handleSubmit(formData);
        setShow(!show);
    }

    return (
        <>
            <Modal
                show={open}
                onHide={close}
                backdrop="static"
                keyboard={false}
            >
                <Form onSubmit={onSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {fields.map((field, index) => (
                            <Form.Group key={index} className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{field.label}</Form.Label>
                                <Form.Control
                                    type={field.type || 'text'}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    onChange={handleChange}
                                    value={formData[field.name] || ''}
                                />
                            </Form.Group>
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={close}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">Create</Button>
                    </Modal.Footer>
                </Form>
                {show && <AlertMessage message={`${title.split(' ')[1]} has been created successfully`} close={setShow} />}
            </Modal >
        </>
    );
}

export default CreateModal;