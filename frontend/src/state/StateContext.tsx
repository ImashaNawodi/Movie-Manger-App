import React, { createContext } from "react";
import { ActionType, StateType } from "../type/state";

export default createContext<{
    state: StateType | undefined;
    dispatch: React.Dispatch<ActionType>;
}>({
    state: undefined,
    dispatch: () => undefined,
});


