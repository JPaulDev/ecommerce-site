import { useState, useEffect, useCallback } from 'react';

export default function useHover() {
  const [node, setNode] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  const ref = useCallback((refNode) => {
    setNode(refNode);
  }, []);

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
