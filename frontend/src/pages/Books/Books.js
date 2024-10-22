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
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Books;
