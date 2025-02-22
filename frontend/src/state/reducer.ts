import { Actions, ActionType, StateType } from "../type/state";
import { initialState } from "./default";


// Reducer
export default (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case Actions.SetSelectedMovieId:
            return {
                ...state,
                selectedMovieId: action.payload,
            };
        default:
            return state;
    }
};
