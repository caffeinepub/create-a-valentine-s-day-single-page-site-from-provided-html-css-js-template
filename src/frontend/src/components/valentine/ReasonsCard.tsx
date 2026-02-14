import { useState } from 'react';
import ValentineCard from './ValentineCard';

const reasons = [
  "Because you are my peace and my comfort ❤️",
  "Because your smile makes my whole day better 😘",
  "Because you are my favorite person in this world 🌍💖",
  "Because you make me feel loved and special 💕",
  "Because your voice is my favorite sound 🎶",
  "Because you are cute, beautiful and my Bubu 😭❤️",
  "Because you always stay in my heart no matter what 💘",
  "Because your love is my biggest blessing 🙈💖",
  "Because you are the best thing that happened to me 🌸",
  "Because I want forever with you, not temporary 🥺❤️"
];

export default function ReasonsCard() {
  const [currentReason, setCurrentReason] = useState("Click the button to see a reason 😘");

  const generateReason = () => {
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
    setCurrentReason(randomReason);
  };

  return (
    <ValentineCard>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">Reasons Why I Love You 💘</h2>
      <p className="mt-4 text-lg md:text-xl leading-relaxed min-h-[60px] flex items-center justify-center">
        {currentReason}
      </p>
      <button onClick={generateReason} className="valentine-btn mt-4">
        Show Reason ❤️
      </button>
    </ValentineCard>
  );
}
