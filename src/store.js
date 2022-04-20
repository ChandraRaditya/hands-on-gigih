import { configureStore } from "@reduxjs/toolkit";
// we no longer use reducer instead we use slice directly 
// import searchReducer from "./pages/search/reducer";
import searchReducer from "./pages/search/slice";

export default configureStore({
    reducer: {
        search: searchReducer
    }
});
