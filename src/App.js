import './App.css';
import { Provider } from 'react-redux';
import Store from './redux/store';
import Component from './components/Component';

function App() {
  return (
    <Provider store={Store}>
      <Component />
    </Provider>
  );
}

export default App;
