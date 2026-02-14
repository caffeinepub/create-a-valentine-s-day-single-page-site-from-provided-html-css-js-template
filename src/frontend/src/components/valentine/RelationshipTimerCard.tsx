import ValentineCard from './ValentineCard';
import { useRelationshipTimer } from '../../hooks/useRelationshipTimer';

export default function RelationshipTimerCard() {
  const { days, hours, minutes, seconds } = useRelationshipTimer();

  return (
    <ValentineCard>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">Relationship Timer ⏳</h2>
      <p className="text-base md:text-lg opacity-95">Our love has been growing for:</p>
      <h2 className="mt-3 text-xl md:text-2xl font-bold">
        {days} Days 💖 {hours} Hours ⏳ {minutes} Minutes 🌸 {seconds} Seconds ❤️
      </h2>
    </ValentineCard>
  );
}
