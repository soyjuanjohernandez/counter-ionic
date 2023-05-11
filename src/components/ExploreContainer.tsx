import { useCounter } from '../hooks/useCounter';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {

  const { counter, decrement, increment, reset } = useCounter(0)

  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={increment}>+1</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default ExploreContainer;
