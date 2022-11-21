import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment, init } from '../redux/CounterSlice';

const Operations = () => {

    const dispatch = useDispatch();


    return (
        <div>
            <button onClick={() => dispatch(increment(6))}> + </button>
            <button onClick={() => dispatch(decrement(8))}> - </button>
            <button onClick={() => dispatch(init(120))}> RAZ </button>
        </div>
    );
}

export default Operations;
