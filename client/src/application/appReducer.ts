import { usersApi } from "@/entities/user";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    [usersApi.reducerPath]: usersApi.reducer
})