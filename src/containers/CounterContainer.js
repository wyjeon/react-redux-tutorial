import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

function CounterContainer({ number, increase, decrease }) {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
}

// mapStateToProps: 리덕스 스토어 안의 상태(state) -> 컴포넌트의 props
// state를 파라미터로 받아온다. -> 이 값은 현재 스토어가 지니고 있는 상태
const mapStateToProps = state => ({
  number: state.counter.number,
});

// mapDispatchToProps: 액션 생성 함수 -> 컴포넌트의 props
// store의 내장 함수 dispatch를 파라미터로 받아온다.
const mapDispatchToProps = dispatch => ({
  // 임시 함수
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
