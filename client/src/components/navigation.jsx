import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import RegisterLogin from "./register-login/register-login";

export default function Navigation() {
  const [isShowingRegisterLogin, setIsShowingRegisterLogin] = useState(false);

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <h1 className="text-white">Search For 📚</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse className="justify-content-end" id="nav">
            <Navbar.Text>
              <Button onClick={() => setIsShowingRegisterLogin(true)}>
                Login/Register
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <RegisterLogin
        isShowing={isShowingRegisterLogin}
        hide={() => {
          setIsShowingRegisterLogin(false);
        }}
      />
    </>
  );
}
