import { SiCoffeescript } from 'react-icons/si';

export default function ValentineFooter() {
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'valentine-app';

  return (
    <footer className="mt-10 py-6 px-5 bg-black/15 text-center relative z-10">
      <p className="text-base opacity-95">
        Made with endless love 💕 for Bhuvi Gupta (Bubu)
      </p>
      <p className="text-base opacity-95 mt-1">
        Happy Valentine's Day ❤️ Forever Yours.
      </p>
      <p className="text-sm opacity-90 mt-4">
        Built with <span className="text-red-400">❤️</span> using{' '}
        <a
          href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-pink-200 transition-colors"
        >
          caffeine.ai
        </a>
      </p>
      <p className="text-xs opacity-75 mt-2">
        © {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
}
