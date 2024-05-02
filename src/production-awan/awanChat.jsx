import { Card, Spinner, Button, Form, InputGroup } from "react-bootstrap";
import {useEffect, useState} from "react";
import {getAllQuestions,askQuestion} from "../api/Production-Awan-Axios.jsx";
import {Link, useNavigate} from "react-router-dom";
import ButtonComponent from "../../components/ButtonComponent.jsx";

export default function AwanChat() {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState({
        question: ''
    });
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        getAllQuestions().then((response) => {
            setQuestions(response.data);
            setIsLoading(false);
            console.log(response.data);
        }).catch((error) => {
            console.error(error);
            setIsLoading(false);
        });
    }, []);


    if (isLoading) {
        return <Spinner animation="border" role="status">
            <span className="sr-only"></span>
        </Spinner>
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        const newQuestion = e.target.question.value;
        setIsLoading(true);
        const response = await askQuestion({ question: newQuestion });

        if (response.success) {
            console.log(response.data);
            getAllQuestions().then((response) => {
                setQuestions(response.data);
                setIsLoading(false);
            }).catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
            navigate("/awanChat");
        } else {
            console.error(response.message);
            setIsLoading(false);
        }
    }

    return (
        <div>
            <h1>Oracle Chat</h1>
            <p>Feel free to ask anything, but have patience, the oracle is old and takes time to answer.</p>

            <div>
                <Form className="form" onSubmit={HandleSubmit}>
                    <Form.Group controlId="formBasicQuestion">
                        <Button variant="primary" type="submit">Send</Button>

                        <ButtonComponent buttonText="Back to Home" linkPath="/" variant="primary"/>

                        <InputGroup>
                            <Form.Control type="text"
                                            name="question"
                                          required={true}
                                          placeholder="Enter question"/>
                        </InputGroup>
                    </Form.Group>
                </Form>
                <br/>

                {questions.slice().reverse().map((question) => (
                    <Card id="question-card" key={question.id} className="mb-3">
                        <Card.Header as="h5">{question.question}</Card.Header>
                        <Card.Body>
                            <Card.Text>{question.answer}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}


            </div>
        </div>
    );
}
