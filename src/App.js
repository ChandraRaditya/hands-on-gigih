import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import AppRouter from "./router";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <AppRouter />
    </Provider>
  );
}

export default App;
