export default function FloatingHeartsBackground() {
  const hearts = ['❤️', '💖', '💕', '❤️', '💘', '💕'];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart, index) => (
        <span
          key={index}
          className="floating-heart"
          style={{
            left: `${10 + index * 15}%`,
            animationDuration: `${5 + (index % 3)}s`,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {heart}
        </span>
      ))}
    </div>
  );
}
