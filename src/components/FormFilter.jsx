import "../styles/App.css";
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getFilteredCar } from "../action/CarsAction";

export default function FormFilter() {
  const [driver, setDriver] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [capacity, setCapacity] = useState("");

  const dispatch = useDispatch();

  const handleFilter = (e) => {
    e.preventDefault();

    let capacityValue = 0;

    if (capacity !== "") {
      capacityValue = parseInt(capacity);
    }

    const dateValue = new Date(`${date} ${time}`);

    const driverValue = driver === "true";

    dispatch(
      getFilteredCar({
        driver: driverValue,
        date: dateValue,
        capacity: capacityValue,
      })
    );
  };

  return (
    <div>
      <Container
        className="p-3 shadow rounded bg-white form-filter"
        style={{ position: "relative", zIndex: 10, marginTop: "-60px" }}
      >
        <Form onSubmit={(e) => handleFilter(e)}>
          <Row className="d-flex align-items-center">
            <Col>
              <p>Tipe Driver</p>
              <select
                defaultValue={driver}
                onChange={(e) => setDriver(e.target.value)}
                style={{ width: "100%", height: "40px" }}
                required
              >
                <option value="" disabled hidden>
                  Pilih Driver
                </option>
                <option value="true">Dengan Driver</option>
                <option value="false">Lepas Kunci (Lepas Kunci)</option>
              </select>
            </Col>
            <Col md="2">
              <p>Tanggal</p>
              <input
                type="date"
                value={date}
                placeholder="masukan nama mobil"
                onChange={(e) => setDate(e.target.value)}
                style={{ width: "100%", height: "40px" }}
              />
            </Col>
            <Col md="2">
              <p>Waktu Jemput/Ambil</p>
              <select
                defaultValue={time}
                onChange={(e) => setTime(e.target.value)}
                style={{ width: "100%", height: "40px" }}
                required
              >
                <option value="" disabled hidden>
                  Pilih Waktu
                </option>
                <option value="08:00:00">08.00 WIB</option>
                <option value="09:00:00">09.00 WIB</option>
                <option value="10:00:00">10.00 WIB</option>
                <option value="11:00:00">11.00 WIB</option>
                <option value="12:00:00">12.00 WIB</option>
              </select>
            </Col>
            <Col>
              <p>Jumlah Penumpang (opsional)</p>
              <input
                type="text"
                value={capacity}
                placeholder="Jumlah Penumpang"
                onChange={(e) => setCapacity(e.target.value)}
                style={{ width: "100%", height: "40px" }}
              />
            </Col>
            <Col>
              <button
                type="submit"
                className="btn btn-success w-100 cari--mobil"
              >
                Cari Mobil
              </button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
