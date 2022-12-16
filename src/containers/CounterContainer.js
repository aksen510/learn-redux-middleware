import { connect } from "react-redux";
import { increseAsync, decreaseAsync } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = ({ number, increseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increseAsync,
    decreaseAsync,
  }
)(CounterContainer);
