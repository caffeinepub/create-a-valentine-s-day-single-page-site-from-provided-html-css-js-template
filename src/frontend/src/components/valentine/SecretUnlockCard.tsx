import { useState } from 'react';
import ValentineCard from './ValentineCard';
import SecretMessageDialog from './SecretMessageDialog';

interface SecretUnlockCardProps {
  onUnlock: () => void;
}

export default function SecretUnlockCard({ onUnlock }: SecretUnlockCardProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [secretOpen, setSecretOpen] = useState(false);

  const handleUnlock = () => {
    if (password.toLowerCase() === 'bubu') {
      setError('');
      setSecretOpen(true);
      onUnlock();
      setPassword('');
    } else {
      setError('Wrong Password 😹❤️ Try again Bubu!');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleUnlock();
    }
  };

  return (
    <>
      <ValentineCard>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Secret Surprise For Bubu 🔒💖</h2>
        <p className="text-base md:text-lg opacity-95">Enter the password to unlock a hidden message 🥺❤️</p>

        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError('');
          }}
          onKeyPress={handleKeyPress}
          placeholder="Enter Password..."
          className="secret-input mt-3"
        />

        {error && (
          <p className="mt-2 text-yellow-300 font-semibold">{error}</p>
        )}

        <div className="hint mt-2">
          Hint: Password can be <b>bubu</b> 😹💘
        </div>

        <button onClick={handleUnlock} className="valentine-btn mt-4">
          Unlock Surprise 🎁
        </button>
      </ValentineCard>

      <SecretMessageDialog open={secretOpen} onOpenChange={setSecretOpen} />
    </>
  );
}
