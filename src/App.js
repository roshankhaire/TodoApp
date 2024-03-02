import logo from './logo.svg';
import './App.css';
import AddTodos from './components/AddTodos';
import Todos from './components/Todos';
import { Provider } from 'react-redux';
import store from "./components/store/store"

function App() {
  return (
    <Provider store={store}>
       <AddTodos/>
       <Todos/>
    </Provider>
 
  );
}

export default App;
