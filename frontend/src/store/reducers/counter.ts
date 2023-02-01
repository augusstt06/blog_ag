import { ActionProps, CounterState } from "@/type/type";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const countUp = () => {
  return {
    type: INCREASE,
  };
};
export const countDown = () => {
  return {
    type: DECREASE,
  };
};

const initialState: CounterState = { value: 0 };

export const counterReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, value: state.value + 1 };
    case DECREASE:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};
