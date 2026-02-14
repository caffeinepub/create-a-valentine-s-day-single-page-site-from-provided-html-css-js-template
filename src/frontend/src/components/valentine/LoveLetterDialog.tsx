import { X } from 'lucide-react';

interface LoveLetterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LoveLetterDialog({ open, onOpenChange }: LoveLetterDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-5 bg-black/70 popup-fade-in">
      <div className="popup-content">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 text-pink-600 hover:text-pink-700 transition-colors"
        >
          <X size={24} />
        </button>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-pink-600">
          My Love Letter For You 💌
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-pink-700">
          Bubu ❤️,<br /><br />
          You are the most precious part of my life.  
          Without you, everything feels incomplete.  
          Your smile is my whole world, and even your anger is adorable 😭💖  
          <br /><br />
          Even though you're in Dehradun, you're always in my heart.  
          These 1.5 years have become even more beautiful with you.  
          <br /><br />
          I love you more than words can ever explain 💕
        </p>
        <button 
          onClick={() => onOpenChange(false)}
          className="mt-5 bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-all hover:scale-105"
        >
          Close 💖
        </button>
      </div>
    </div>
  );
}
