import Modal from 'react-bootstrap/Modal';

export default function PerformerModal({ show, onHide, selectedPerformer }) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Performer Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {selectedPerformer && (
                    <div>
                        <p>Performer id: {selectedPerformer.id}</p>
                        <p>Performer Firstname: {selectedPerformer.firstName}</p>
                        <p>Performer Lastname: {selectedPerformer.lastName}</p>
                        <p>Performer Email: {selectedPerformer.email}</p>
                        <p>Performer PhoneNr: {selectedPerformer.phoneNr}</p>
                        <p>Performer Department: {selectedPerformer.department}</p>
                        <p>Performer Height: {selectedPerformer.measurements.height}</p>
                        <p>Performer ShoeSize: {selectedPerformer.measurements.shoeSize}</p>
                        <p>Performer JacketSize: {selectedPerformer.measurements.jacketSize}</p>
                        <p>Performer PantSize: {selectedPerformer.measurements.pantSize}</p>
                        <p>Performer Head: {selectedPerformer.measurements.head}</p>
                    </div>
                )}
            </Modal.Body>
        </Modal>
    );
}