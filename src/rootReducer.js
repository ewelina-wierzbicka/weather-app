const initialState = {
    city: ""
};

function rootReducer(state = initialState, action) {
    console.log(action);
    if (action.type === "CITY_SUBMITTED") {
        return {
            ...state,
            city: action.payload
        }
    }
    return state;
}

export default rootReducer;