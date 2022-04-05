import './App.css';
import Home from './pages/home/index';
import Search from './pages/search/index';
import { Provider } from "react-redux";
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
}

export default App;