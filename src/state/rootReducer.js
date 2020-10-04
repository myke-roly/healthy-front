import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// aca tienen que importar sus reducers y agregarlos
// en "combineReducers" para tener un reducer unico para todo el store
import CreateCard from "state/createCard/reducer";
import Search from "state/search/reducer";
import User from "state/user/reducer";
import Cards from "state/cards/reducer";
import Auth from "state/auth/reducer";

const createRootReducer = (history) =>
	combineReducers({
		Auth,
		CreateCard,
		Search,
		User,
		Cards,
		router: connectRouter(history),
	});

export default createRootReducer;
