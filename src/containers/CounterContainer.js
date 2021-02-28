import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrement, increment } from '../modules/counter';
function CounterContainer() {
  const number = useSelector(({ counter }) => counter.number); // connect -> useSelector
  const dispatch = useDispatch(); // 컴포넌트 내부에서 스토어의 내장 함수 dispatch를 사용할 수 있게 해준다.
  const onIncrease = useCallback(() => dispatch(increment()), [dispatch]); // 숫자가 바뀌어서 리렌더링될 때마다 onIncrease, onDecrease 함수가 새롭게 만들어지는데
  const onDecrease = useCallback(() => dispatch(decrement()), [dispatch]); // useCallback으로 컴포넌트 성능을 최적화한다.
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
