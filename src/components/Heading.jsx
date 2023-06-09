import carImage from "../assets/cars.png";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Heading() {
  return (
    <div className="main-section pt-5 pt-sm-5 pt-md-0">
      <div className="bg-car"></div>
      <Container className="h-100 d-flex pt-md-5">
        <Row className=" d-flex justify-content-center align-items-center">
          <Col md="6" className="tagline">
            <h2 style={{ fontWeight: "bold" }}>
              sewa &amp; rental mobil terbaik dikawasan Purwokerto
            </h2>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <Link to={"/sewa"} className="btn btn-success">
              Mulai Sewa Mobil
            </Link>
          </Col>
          <Col md="6" style={{ zIndex: 1 }}>
            <img src={carImage} alt="car img" className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Heading;
