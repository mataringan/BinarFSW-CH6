import { useSelector } from "react-redux";
import { Container, Row, Col, Card } from "react-bootstrap";
import LoadingSpinner from "./LoadingSpinner";

export default function ResultFilter() {
  const { filteredCarsResult, filteredCarsLoading, filteredCarsError } =
    useSelector((state) => state.CarsReducer);

  return (
    <div>
      <Container className="my-5">
        {filteredCarsResult ? (
          <>
            <p>Hasil ditemukan : {filteredCarsResult.length} mobil</p>
            <Row>
              {filteredCarsResult.map((car) => {
                return (
                  <Col
                    key={car.id}
                    md="4"
                    sm="6"
                    className="d-flex align-items-stretch"
                  >
                    <Card className="w-100 mb-4">
                      <Card.Img
                        variant="top"
                        src={
                          "https://github.com/fnurhidayat/probable-garbanzo/blob/main/public" +
                          car.image.slice(1) +
                          "?raw=true"
                        }
                        style={{
                          height: "250px",
                          objectFit: "cover",
                          padding: "20px",
                        }}
                      />
                      <Card.Body className="d-flex flex-column">
                        {/* <Card.Title>{`${car.manufacture} ${car.model}`}</Card.Title> */}
                        <p
                          style={{ fontSize: "20px", fontWeight: "bold" }}
                        >{`${car.manufacture} ${car.model}`}</p>
                        <div className="mb-2"></div>
                        <h4 style={{ fontSize: "18px", marginTop: "-10px" }}>
                          Rp {car.rentPerDay} / hari
                        </h4>
                        <p>{car.description}</p>
                        <span className="d-inline-block ">
                          <div className="badge" style={{ color: "#555555" }}>
                            <i className="bi bi-people-fill me-3"></i>
                            {car.capacity}
                          </div>
                        </span>
                        <span className="d-inline-block ">
                          <div className="badge" style={{ color: "#555555" }}>
                            <i className="bi bi-gear-fill me-3"></i>
                            {car.transmission}
                          </div>
                        </span>
                        <span className="d-inline-block mb-3">
                          <div className="badge" style={{ color: "#555555" }}>
                            <i className="bi bi-calendar-event-fill me-3"></i>
                            Tahun {car.year}
                          </div>
                        </span>
                        <div className="d-flex mt-auto mb-2">
                          <button
                            className="btn btn-success"
                            style={{ width: "100%" }}
                          >
                            Pilih Mobil
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </>
        ) : filteredCarsLoading ? (
          <div className="text-center">
            <LoadingSpinner />
          </div>
        ) : (
          <h2 className="text-center text-muted">
            {filteredCarsError ? filteredCarsError : ""}
          </h2>
        )}
      </Container>
    </div>
  );
}
