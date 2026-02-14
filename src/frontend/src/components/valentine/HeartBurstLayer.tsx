interface HeartBurst {
  id: number;
  left: number;
  top: number;
}

interface HeartBurstLayerProps {
  bursts: HeartBurst[];
}

export default function HeartBurstLayer({ bursts }: HeartBurstLayerProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1000]">
      {bursts.map((burst) => (
        <div
          key={burst.id}
          className="burst-heart"
          style={{
            left: `${burst.left}px`,
            top: `${burst.top}px`,
          }}
        >
          💖
        </div>
      ))}
    </div>
  );
}
