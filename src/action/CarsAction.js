import axios from "axios";

export const FILTERED_CARS = "FILTERED_CARS";

export const getFilteredCar = (values) => {
  return (dispatch) => {
    dispatch({
      type: FILTERED_CARS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json",
      timeout: 80000,
    })
      .then((response) => {
        const { driver, date, capacity } = values;

        const filter = response.data.filter(
          (car) =>
            car.available === driver &&
            car.capacity >= capacity &&
            new Date(car.availableAt) <= date
        );
        dispatch({
          type: FILTERED_CARS,
          payload: {
            loading: false,
            data: filter,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: FILTERED_CARS,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};
