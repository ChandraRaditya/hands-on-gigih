import './App.css';
import Trending from './pages/trending/index';
import { Provider } from "react-redux";
import store from './store';
import AppRouter from './router';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;