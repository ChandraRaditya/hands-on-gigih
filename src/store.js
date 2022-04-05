import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./pages/search/reducer";
// import AccountReducer from "./account-slice";
// import accountReducer from "./account-reducer";

export default configureStore({
    reducer: {
        search: searchReducer
        // account: accountReducer
    }
    // devTools: true
});
