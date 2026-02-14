import { useState } from 'react';
import FloatingHeartsBackground from '../components/valentine/FloatingHeartsBackground';
import ValentineHeader from '../components/valentine/ValentineHeader';
import ValentineCard from '../components/valentine/ValentineCard';
import LoveLetterDialog from '../components/valentine/LoveLetterDialog';
import ReasonsCard from '../components/valentine/ReasonsCard';
import RelationshipTimerCard from '../components/valentine/RelationshipTimerCard';
import ProposalCard from '../components/valentine/ProposalCard';
import SecretUnlockCard from '../components/valentine/SecretUnlockCard';
import QuoteBlock from '../components/valentine/QuoteBlock';
import ValentineFooter from '../components/valentine/ValentineFooter';
import HeartBurstLayer from '../components/valentine/HeartBurstLayer';
import { useHeartBurst } from '../hooks/useHeartBurst';

export default function ValentinePage() {
  const [loveLetterOpen, setLoveLetterOpen] = useState(false);
  const { bursts, triggerBurst } = useHeartBurst();

  return (
    <div className="min-h-screen valentine-gradient text-white overflow-x-hidden">
      <FloatingHeartsBackground />
      <HeartBurstLayer bursts={bursts} />
      
      <ValentineHeader onHeartClick={triggerBurst} />
      
      <div className="container max-w-4xl mx-auto px-5 py-5 relative z-10">
        {/* Love Letter Card */}
        <ValentineCard>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">My Love, My Bubu 💕</h2>
          <p className="text-base md:text-lg leading-relaxed opacity-95">
            Dear <b>Bhuvi Gupta</b> also known as <b>Bubu</b>,  
            you are not just a part of my life...  
            you are my whole heart, my happiness, and my peace.
            <br /><br />
            Since you came into my life, everything feels brighter, softer, and more meaningful.
            I don't know how to explain it, but you are my favorite feeling.
          </p>
          <button 
            onClick={() => setLoveLetterOpen(true)}
            className="valentine-btn mt-4"
          >
            Open Love Letter 💌
          </button>
        </ValentineCard>

        {/* About Card */}
        <ValentineCard>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About My Beautiful Girl 🌸</h2>
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <div className="detail-box">👑 Name: Bhuvi Gupta (Bubu)</div>
            <div className="detail-box">🎂 Age: 20 Years Old</div>
            <div className="detail-box">🏡 Lives In: Dehradun</div>
            <div className="detail-box">💑 Relationship: 1.5 Years Strong</div>
          </div>
        </ValentineCard>

        {/* Relationship Timer */}
        <RelationshipTimerCard />

        {/* Reasons Card */}
        <ReasonsCard />

        {/* Proposal Card */}
        <ProposalCard onYesClick={triggerBurst} />

        {/* Secret Unlock Card */}
        <SecretUnlockCard onUnlock={triggerBurst} />

        {/* Quote Block */}
        <QuoteBlock />
      </div>

      <ValentineFooter />

      {/* Love Letter Dialog */}
      <LoveLetterDialog open={loveLetterOpen} onOpenChange={setLoveLetterOpen} />
    </div>
  );
}
