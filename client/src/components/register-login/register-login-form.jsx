import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function RegisterLoginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>

      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
}
