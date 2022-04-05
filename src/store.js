import { configureStore } from "@reduxjs/toolkit";
// we no longer use reducer instead we use slice directly 
// import searchReducer from "./pages/search/reducer";
import searchReducerss from "./pages/search/slice";

export default configureStore({
    reducer: {
        search: searchReducerss
        // account: accountReducer
    }
    // devTools: true
});
