import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./action";

export interface State {
    count: number;
}
  
export const initialState: State = {
    count: 0
};

export const counterReducer = createReducer(
    initialState,
    on(increment, (state , action) => {
        return {
            count:state.count + 1
        }
    }),
    on(decrement, (state , action) => {
        return {
            count:state.count - 1
        }
    }),
    on(reset, (state , action) => {
        return {
            count:0
        }
    }),
  );

export const getCount =(state : State) => state.count;

  