import { useState, useEffect, useCallback } from 'react';

export default function useHover() {
  const [node, setNode] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const ref = useCallback((refNode) => {
    if (refNode !== null) {
      setNode(refNode);
    }
  }, []);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  useEffect(() => {
    if (node !== null) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }

    return undefined;
  }, [node]);

  return [isHovered, ref];
}
