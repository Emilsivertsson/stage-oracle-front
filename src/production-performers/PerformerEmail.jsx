import Modal from 'react-bootstrap/Modal';
import {Button, Form} from "react-bootstrap";
import {sendEmail} from "../api/Production-Email-Axios.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function PerformerEmail({ show, onHide, selectedPerformer }) {
    
    
    const navigate = useNavigate();
    const [email, setEmail] = useState({
        adress: '',
        subject: '',
        body: ''
    });

    const handleInputChange = (e) => {
        const target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setEmail({
            ...email,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        email.adress = selectedPerformer.email;
        
        const response = await sendEmail(email);
        if (response.success) {
            console.log(response.data);
            onHide();
        } else {
            console.error(response.message);
    }
}
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Send Email</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {selectedPerformer && (
                    <div>
                        <Form className="form" onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text"
                                              name="subject"
                                              value={email.subject}
                                              required={true}
                                              onChange={handleInputChange}
                                              placeholder="Enter subject" />
                            </Form.Group>

                            <Form.Group controlId="formBasicMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea"
                                              name="body"
                                              value={email.body}
                                              rows={3}
                                              required={true}
                                              onChange={handleInputChange}
                                              placeholder="Enter message" />
                            </Form.Group>

                            <Button type="submit" className="btn btn-primary">Send Email</Button>

                        </Form>
                    </div>
                )}
            </Modal.Body>
        </Modal>
    );
}