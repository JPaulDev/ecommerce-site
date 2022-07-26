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
      node.addEventListener('mouseenter', handleMouseOver);
      node.addEventListener('mouseleave', handleMouseOut);

      return () => {
        node.removeEventListener('mouseenter', handleMouseOver);
        node.removeEventListener('mouseleave', handleMouseOut);
      };
    }

    return undefined;
  }, [node]);

  return [isHovered, ref];
}
