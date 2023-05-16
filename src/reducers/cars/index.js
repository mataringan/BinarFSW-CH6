import { FILTERED_CARS } from "../../action/CarsAction";

export const initialState = {
  filteredCarsResult: false,
  filteredCarsLoading: false,
  filteredCarsError: false,
};

const cars = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED_CARS:
      return {
        ...state,
        filteredCarsResult: action.payload.data,
        filteredCarsLoading: action.payload.loading,
        filteredCarsError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default cars;
