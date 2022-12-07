import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../css/onboarding.css";
import Select from "react-select";


function Onboarding() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>On Boarding</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Let me know how we can help you?</Form.Label>
              <Form.Control type="text" placeholder="Select..." autoFocus />
            </Form.Group>
            <Select
              defaultValue={[options [2], options [3]]}
              isMulti
              name="colors"
              options={options }
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Onboarding;
