const initialState = { value: '' };

function searchReducer(state = initialState, action) {
    // return { ...state, value: action.search }
    switch (action.type) {
        case "querySearch":
            return { ...state, value: action.search }
        default:
            return state
    }
}

export default searchReducer;