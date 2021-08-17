import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css'
const Counter = (props) => {
    const counter = useSelector((state) => state.counter.counter)
    return <div>
        <h1 className={classes.counter} >Counter: {counter}</h1>
    </div>



};

export default Counter;