import { fakeHttpModule, TYPES } from "common/http";

export const getCards = () => fakeHttpModule.get("v1/cards", undefined, undefined, TYPES.json);

export const editCard = ({ payload: { cardId, token, payload } }) =>
	fakeHttpModule.put(`v1/cards/${cardId}`, token, payload, TYPES.json);

export const deleteCard = ({ payload: { cardId, token } }) =>
	fakeHttpModule.delete(`v1/cards/${cardId}`, token);

