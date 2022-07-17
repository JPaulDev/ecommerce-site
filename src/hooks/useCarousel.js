import { useReducer, useEffect } from 'react';

const initialState = {
  previous: null,
  current: 0,
  moveLeft: true,
  transitioning: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'prev':
      return {
        ...state,
        previous: state.current,
        current:
          (state.current - 1 + action.payload.length) % action.payload.length,
        moveLeft: false,
        transitioning: true,
      };
    case 'next':
      return {
        ...state,
        previous: state.current,
        current: (state.current + 1) % action.payload.length,
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

export default function useCarousel({ length, interval, transitionTime }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const timeout = setTimeout(
      () => dispatch({ type: 'next', payload: { length } }),
      interval
    );

    return () => clearTimeout(timeout);
  });

  useEffect(() => {
    let timeout;

    if (state.transitioning) {
      timeout = setTimeout(
        () => dispatch({ type: 'done' }),
        transitionTime + 100
      );
    }

    return () => clearTimeout(timeout);
  });

  const handleChange = (action, index) => {
    dispatch({ type: action, payload: { index, length } });
    // if (!state.transitioning) {
    // }
  };

  return [state.previous, state.current, state.moveLeft, handleChange];
}
