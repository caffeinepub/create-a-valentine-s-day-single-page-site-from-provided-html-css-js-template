import { X } from 'lucide-react';

interface SecretMessageDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SecretMessageDialog({ open, onOpenChange }: SecretMessageDialogProps) {
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
          Secret Message Unlocked 🔓💖
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-pink-700">
          My Bubu 😭❤️,<br /><br />
          If you're reading this message...  
          it means you've cracked the password to my heart 😹💘  
          <br /><br />
          To be honest, you are the most precious gift of my life.  
          Without you, I am nothing.  
          <br /><br />
          I want you to always be with me,  
          in my good times and in my bad times too.  
          <br /><br />
          I promise I'll love you forever...  
          not for a moment, not for a year... but for life. 💍❤️  
          <br /><br />
          Happy Valentine's Day Bubu 💖
        </p>
        <button 
          onClick={() => onOpenChange(false)}
          className="mt-5 bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-all hover:scale-105"
        >
          Close 💘
        </button>
      </div>
    </div>
  );
}
