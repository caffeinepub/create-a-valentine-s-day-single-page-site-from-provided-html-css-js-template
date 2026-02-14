import { ReactNode } from 'react';

interface ValentineCardProps {
  children: ReactNode;
  className?: string;
}

export default function ValentineCard({ children, className = '' }: ValentineCardProps) {
  return (
    <div className={`valentine-card ${className}`}>
      {children}
    </div>
  );
}
