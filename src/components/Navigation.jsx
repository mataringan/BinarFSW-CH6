import "../styles/App.css";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar key="lg" expand="lg" fixed="top" style={{ background: "#F1F3FF" }}>
      <Container>
        <Link to={"/"} className="navbar-brand"></Link>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          style={{ width: "50%" }}
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 ">
              <Nav.Link href="#our-services" className="bcr">
                BCR
              </Nav.Link>
              <Nav.Link href="#our-services">Our Services</Nav.Link>
              <Nav.Link href="#why-us">Why Us</Nav.Link>
              <Nav.Link href="#testimonial">Testimonial</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Nav.Link
                href="#register"
                style={{
                  color: "white",
                  width: "75px",
                  backgroundColor: "#5CB85F",
                  borderRadius: "5px",
                }}
                className="bcr--register"
              >
                Register
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
