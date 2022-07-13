import { useReducer, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'next':
      return {
        ...state,
        previous: state.active,
        active: action.payload.next,
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

export function useCarousel(length) {
  const [state, dispatch] = useReducer(reducer, {
    previous: '',
    active: 0,
    transitioning: false,
  });

  const handleChange = () => {
    const nextSlide = (state.active + 1) % length;

    dispatch({ type: 'next', payload: { next: nextSlide } });
  };

  return [state.previous, state.active, handleChange];
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
