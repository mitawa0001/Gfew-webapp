import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import applogo from "../image/applogo.png";
import notification from "../image/notification.svg";
import userimg from "../image/userimg.png";
import "../css/header.css";

function Header() {
  return (
    <Navbar expand="lg" className="for-shadow">
      <Container>
        <Navbar.Brand href="#">
          <img className="appLogo" src={applogo} alt="applogo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <div className="d-flex flex-wrap align-center">
            <img src={notification} alt="notifications"></img>
            <div className="profile-name px-2">
              <div className="mb-0 text-end user-name">Ananya</div>
              <p className="my-0 available text-end">Available</p>
            </div>
            <img className="smallProfilePic" src={userimg} alt="user img"></img>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );    
}

export default Header;
