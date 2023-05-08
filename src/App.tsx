import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import { decrement, increment, incrementBy } from './store/slices/counter';

function App() {

  const { value } = useSelector<{counter: {value: number}}, {value: number}>((state) => {
    return state.counter 
  });
  const dispatch = useDispatch();
  
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {value}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementBy(2))}>
          IncrementBy 2
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
