interface ValentineHeaderProps {
  onHeartClick: () => void;
}

export default function ValentineHeader({ onHeartClick }: ValentineHeaderProps) {
  return (
    <header className="pt-12 pb-5 px-5 text-center relative z-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
        Happy Valentine's Day Bubu ❤️
      </h1>
      <p className="mt-3 text-lg md:text-xl opacity-95">
        This webpage is specially made for my one and only love...
      </p>
      <div 
        className="text-6xl md:text-7xl mt-4 cursor-pointer inline-block heartbeat-animation"
        onClick={onHeartClick}
      >
        💖
      </div>
      <p className="mt-3 text-base opacity-90">(Click the heart 😘)</p>
    </header>
  );
}
