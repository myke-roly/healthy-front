import cardsDuck from ".";
import * as types from "./types";

export const requestGetCard = cardsDuck.createAction(types.GET_CARD_REQUEST);
export const successGetCard = cardsDuck.createAction(types.GET_CARD_SUCCESS);
export const failureGetCard = cardsDuck.createAction(types.GET_CARD_FAIULRE);

export const requestGetCards = cardsDuck.createAction(types.GET_CARDS_REQUEST);
export const successGetCards = cardsDuck.createAction(types.GET_CARDS_SUCCESS);
export const failureGetCards = cardsDuck.createAction(types.GET_CARDS_FAIULRE);

export const requestDeleteCard = cardsDuck.createAction(types.DELETE_CARD_REQUEST);
export const successDeleteCard = cardsDuck.createAction(types.DELETE_CARD_SUCCESS);
export const failureDeleteCard = cardsDuck.createAction(types.DELETE_CARD_FAIULRE);

export const requestEditCard = cardsDuck.createAction(types.EDIT_CARD_REQUEST);
export const successEditCard = cardsDuck.createAction(types.EDIT_CARD_SUCCESS);
export const failureEditCard = cardsDuck.createAction(types.EDIT_CARD_FAIULRE);

export const requestCreateCard = cardsDuck.createAction(types.CREATE_CARD_REQUEST);
export const successCreateCard = cardsDuck.createAction(types.CREATE_CARD_SUCCESS);
export const failureCreateCard = cardsDuck.createAction(types.CREATE_CARD_FAILURE);

export const requestSearchCards = cardsDuck.createAction(types.SEARCH_CARDS_REQUEST);
export const successSearchCards = cardsDuck.createAction(types.SEARCH_CARDS_SUCCESS);
export const failureSearchCards = cardsDuck.createAction(types.SEARCH_CARDS_FAILURE);


export const requestLikedCards = cardsDuck.createAction(types.LIKED_CARDS_REQUEST);
export const successLikedCards = cardsDuck.createAction(types.LIKED_CARDS_SUCCESS);
export const failureLikedCards = cardsDuck.createAction(types.LIKED_CARDS_FAILURE);
