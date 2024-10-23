<<<<<<< HEAD
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import {useBookContext} from "../../context/BookContext";
import './books.css';

const Books = () => {
	const { books } = useBookContext();
	console.log(books)

	return (
		<div>
			<Container className="my-5">
				<h2 className="mb-4 text-center" style={{ color: '#333' }}>Books Collection</h2>
				<Row className="justify-content-center">
					{books.map((book) => (
						<Col key={book.id} md={4} className="mb-4 d-flex justify-content-center">
							<Card style={{ width: '320px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#F0F0F0' }}>
								<div style={{ position: 'relative' }}>
									<Card.Img variant="top" src='https://upload.wikimedia.org/wikipedia/en/6/6f/Time_machine.jpg' alt={book.title} style={{ height: '300px', objectFit: 'cover' }} />
									<span className='price'>${book.price}</span>
								</div>
								<Card.Body style={{ padding: '20px' }}>
									<Card.Title style={{ fontSize: '1.5rem', color: '#333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
										{book.title}
										<FaInfoCircle style={{ marginLeft: '8px', color: '#007BFF' }} />
									</Card.Title>
									<Card.Subtitle className="mt-1 text-muted" style={{ color: '#555' }}>{book.description}</Card.Subtitle>
								</Card.Body>
							</Card>
=======
import { useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import { useBookContext } from "../../context/BookContext";
import BookDetailsModal from '../../components/modals/books/BookDetailsModal';
import "./Books.css";

const Books = () => {
	const { books } = useBookContext();
	console.log("books---", books);
	const [show, setShow] = useState(false);

	const viewDetail = () => setShow(!show);

	return (
		<>
			<Container className="my-5">
				<h2 className="mb-4 text-center" style={{ color: '#444', fontWeight: 'bold' }}>Books Collection</h2>
				<Row className="justify-content-center">
					{books.map((book) => (
						<Col key={book.id} md={4} className="mb-4 d-flex justify-content-center">
							<Card className="card">
								<div style={{ position: 'relative' }}>
									<Card.Img variant="top" src="https://m.media-amazon.com/images/I/71GvZSXhm4L._AC_UY218_.jpg" alt={book.title} style={{ height: '350px', objectFit: 'cover' }} />
									<span className='stock'> {book.is_active ? "stock" : "out of stock"} </span>
									<span className='price'>${book.price}</span>
								</div>
								<Card.Body style={{ padding: '15px' }}>
									<Card.Title style={{ fontSize: '1.5rem', color: '#333', fontWeight: '600' }}>
										{book.title}
										<FaInfoCircle style={{ marginLeft: '8px', color: '#007BFF', cursor: 'pointer' }} />
									</Card.Title>
									<Card.Subtitle className="mt-1 text-muted" style={{ color: '#555', fontStyle: 'italic' }}>{book.description}</Card.Subtitle>
									<div className="d-flex justify-content-between align-items-center mt-2">
										<Button variant="primary" className="detail-btn" onClick={viewDetail}>View Details</Button>
										<Button variant="outline-primary" className="cart-btn" disabled={book.is_active ? false : true} >Add to Cart</Button>
									</div>
								</Card.Body>
							</Card>

							<BookDetailsModal book={book} show={show} viewDetail={viewDetail} />
>>>>>>> upstream/main
						</Col>
					))}
				</Row>
			</Container>
<<<<<<< HEAD
		</div>
=======
		</>
>>>>>>> upstream/main
	);
};

export default Books;
