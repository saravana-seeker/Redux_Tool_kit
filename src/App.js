import './App.css';
import {useSelector ,useDispatch} from "react-redux";
import {increment,decrement} from "./redux/counter";



function App() {
  const {count} = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App my-5" >
      <p className=''>Count value : <b>{count}</b></p><br />
      <button className='btn btn-primary m-2' onClick={() => dispatch(increment())}>+</button>
      <button className='btn btn-primary m-2' onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
