import React, {useReducer} from 'react';

const initialState = {
    firstCounter: 0};
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {firstCounter: state.firstCounter + action.value};
        case 'decrement':
            return {firstCounter: state.firstCounter - action.value};
        case 'Reset':
            return initialState
        default:
            return state
    }
}
function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count - {count.firstCounter}</div>
            <button onClick={() => dispatch({type: 'increment', value: 1 })}>Incement</button>
            <button onClick={() => dispatch({type: 'decrement',  value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5 })}>Incement 5</button>
            <button onClick={() => dispatch({type: 'decrement',  value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({type: 'Reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo;
