import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

export default function SearchBar({ handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={3} className="mb-3 col-md-2 mx-auto">
        <Form.Group controlId="search">
          <Form.Label>Search for a book</Form.Label>
          <Form.Control type="text" placeholder="Enter a book title" />
        </Form.Group>
        <Button variant="info" type="submit">
          Search
        </Button>
      </Stack>
    </Form>
  );
}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
