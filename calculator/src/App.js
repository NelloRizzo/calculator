import './App.css'
import { Provider } from 'react-redux'
import store  from './StateManagement/Store.js'
import { Calculator } from './Calculator/Calculator.js';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Calculator></Calculator>
      </div>
    </Provider>
  )
}

export default App;
