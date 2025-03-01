import {
	CLEAR_CART,
	REMOVE_CART,
	INCREASE,
	DECREASE,
	LOADING,
	DISPLAY_ITEMS,
} from "./actions";

const reducer = (state, action) => {
	if (action.type === CLEAR_CART) {
		return { ...state, cart: new Map() };
	}
	throw new Error(`no matching action type : ${action.type}`);
};

export default reducer;
