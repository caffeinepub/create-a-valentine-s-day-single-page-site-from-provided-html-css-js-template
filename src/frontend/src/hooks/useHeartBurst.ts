import { useState, useCallback } from 'react';

interface HeartBurst {
  id: number;
  left: number;
  top: number;
}

export function useHeartBurst() {
  const [bursts, setBursts] = useState<HeartBurst[]>([]);

  const triggerBurst = useCallback(() => {
    const newBursts: HeartBurst[] = [];
    
    for (let i = 0; i < 15; i++) {
      newBursts.push({
        id: Date.now() + i,
        left: Math.random() * window.innerWidth,
        top: window.innerHeight - 100,
      });
    }

    setBursts((prev) => [...prev, ...newBursts]);

    // Remove bursts after animation completes
    setTimeout(() => {
      setBursts((prev) => prev.filter((burst) => !newBursts.find((nb) => nb.id === burst.id)));
    }, 1200);
  }, []);

  return { bursts, triggerBurst };
}
