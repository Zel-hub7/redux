import { useSelector, useDispatch } from "react-redux";


const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const incrementHandler = () => {
        dispatch({type: 'increment'});
    }
    const increaseHandler = () => {
        dispatch({type: 'increase', amount: 5})
    }
    const decrementHandler = () => {
        dispatch({type: 'decrement'});
    }
    const toggleCounterHandler = () => {};
    return(
        <main>
          <h1>
            Redux Counter
          </h1>
        <div>{counter}</div>
        <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={increaseHandler}>Increase by 5</button>
        </div>
        <button onClick = {toggleCounterHandler()}>Toggle Counter</button>
        </main>
    )
}
export default Counter;