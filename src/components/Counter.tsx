import { useState } from 'react';

interface Props {
  initialValue: number;
}

export const Counter = ({ initialValue }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const changeCounter = (value: number) => {
    setCounter((c) => c + value);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>

      <div className="flex gap-2">
        <button
          onClick={() => changeCounter(+1)}
          className="bg-blue-500 p-2 rounded text-white"
        >
          Increment
        </button>
        <button
          onClick={() => changeCounter(-1)}
          className="bg-blue-500 p-2 rounded text-white"
        >
          Decrement
        </button>
      </div>
    </>
  );
};
