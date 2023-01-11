import { useSelector } from "react-redux";
import { clearError } from "../redux/action";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

function ErrorModal() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const handleClose = () => {
    dispatch(clearError());
  };

  return (
    <Modal show={error !== null} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>{error && error.message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;
