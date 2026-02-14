import { useState, useRef } from 'react';
import ValentineCard from './ValentineCard';

interface ProposalCardProps {
  onYesClick: () => void;
}

export default function ProposalCard({ onYesClick }: ProposalCardProps) {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ left: '55%', top: '60px' });
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = () => {
    const x = Math.random() * 300;
    const y = Math.random() * 80;
    setNoPosition({ left: `${x}px`, top: `${y}px` });
  };

  const handleYesClick = () => {
    setAccepted(true);
    onYesClick();
  };

  return (
    <ValentineCard>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">Will You Be My Valentine? 💍</h2>
      <p className="text-base md:text-lg opacity-95">Bubu, you have no choice 😹❤️</p>

      {accepted ? (
        <div className="mt-6 p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
          <p className="text-2xl font-bold">YAYYYYY 😭❤️</p>
          <p className="text-xl mt-2">Bubu is my Valentine Forever 💍💖</p>
        </div>
      ) : (
        <div ref={containerRef} className="relative mt-5 h-[150px]">
          <button
            onClick={handleYesClick}
            className="valentine-btn absolute"
            style={{ left: '30%', top: '60px', transform: 'translateX(-50%)' }}
          >
            YES 😘
          </button>
          <button
            onMouseEnter={moveNoButton}
            className="valentine-btn absolute transition-all duration-300"
            style={noPosition}
          >
            NO 🙄
          </button>
        </div>
      )}
    </ValentineCard>
  );
}
