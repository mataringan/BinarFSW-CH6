import axios from "axios";

export const GET_LIST_CARS = "GET_LIST_CARS";
export const FILTERED_CARS = "FILTERED_CARS";
export const GET_DETAIL_CAR = "GET_DETAIL_CAR";

export const getListCars = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_CARS,
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
        console.log(response);
        dispatch({
          type: GET_LIST_CARS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_LIST_CARS,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const getFilteredCar = (params) => {
  const { reset } = params;

  if (reset) {
    return (dispatch) => {
      dispatch({
        type: FILTERED_CARS,
        payload: {
          loading: false,
          data: false,
          errorMessage: false,
        },
      });
    };
  }

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
        const { driver, date, capacity } = params;

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

export const getDetailCar = (params) => {
  return (dispatch) => {
    dispatch({
      type: GET_DETAIL_CAR,
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
        const { carId } = params;
        const detail = response.data.filter((car) => car.id === carId);

        dispatch({
          type: GET_DETAIL_CAR,
          payload: {
            loading: false,
            data: detail,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_DETAIL_CAR,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};
