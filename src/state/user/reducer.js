import generalStatus from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("get_user"),
};

const reducer = generalStatus.createReducer(
	{
		[types.GET_USER_REQUEST]: (state) => ({
			...state,
			get_user: {
				loading: true,
				error: false,
			},
		}),
		[types.GET_USER_SUCCESS]: (state, { payload }) => ({
			...state,
			get_user: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.GET_USER_FAILURE]: (state) => ({
			...state,
			get_user: {
				loading: false,
				error: true,
				data: null,
			},
		}),
	},
	initialState,
);

export default reducer;
