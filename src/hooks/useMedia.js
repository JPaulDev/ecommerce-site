import { useState, useEffect } from 'react';

export function useMedia(query) {
  const [matches, setMatch] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleMatch = () => {
      setMatch(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleMatch);

    return () => mediaQuery.removeEventListener('change', handleMatch);
  }, [query]);

  return matches;
}
