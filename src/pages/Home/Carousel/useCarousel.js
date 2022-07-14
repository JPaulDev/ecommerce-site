import { useReducer, useEffect } from 'react';

function changePrevious(current, length) {
  return (current - 1 + length) % length;
}

function changeNext(current, length) {
  return (current + 1) % length;
}

function reducer(state, action) {
  switch (action.type) {
    case 'prev':
      return {
        ...state,
        previous: state.current,
        current: changePrevious(state.current, state.length),
        moveLeft: false,
        transitioning: true,
      };
    case 'next':
      return {
        ...state,
        previous: state.current,
        current: changeNext(state.current, state.length),
        moveLeft: true,
        transitioning: true,
      };
    case 'jump':
      return {
        ...state,
        previous: state.current,
        current: action.payload.index,
        moveLeft: state.current < action.payload.index,
        transitioning: true,
      };
    case 'done':
      return {
        ...state,
        transitioning: false,
      };
    default:
      throw new Error();
  }
}

export function useCarousel(length, delay) {
  const [state, dispatch] = useReducer(reducer, {
    length: length,
    previous: null,
    current: 0,
    moveLeft: true,
    transitioning: false,
  });

  return [state.previous, state.current, state.moveLeft, dispatch];
}

// useEffect(() => {
//   const next = (state.active + 1) % length;
//   const timer = setTimeout(
//     () => dispatch({ type: ACTIONS.NEXT, nextSlide: next }),
//     interval
//   );

//   return () => clearTimeout(timer);
// }, [state.active]);

// useEffect(() => {
//   const timer = setTimeout(
//     () => dispatch({ type: ACTIONS.DONE }),
//     transitionTime
//   );
