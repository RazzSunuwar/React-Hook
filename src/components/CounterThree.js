import React, {useReducer} from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'Reset':
            return initialState
        default:
            return state
    }
}
function CounterThree() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo]= useReducer(reducer, initialState)

    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Incement</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('Reset')}>Reset</button>

            <div>Count - {countTwo}</div>
            <button onClick={() => dispatchTwo('increment')}>Incement</button>
            <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            <button onClick={() => dispatchTwo('Reset')}>Reset</button>
        </div>
    )
}

export default CounterThree;
