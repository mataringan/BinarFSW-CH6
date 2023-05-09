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
