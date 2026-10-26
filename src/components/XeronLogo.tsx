import React from 'react';

interface XeronLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const XeronLogo: React.FC<XeronLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  let heightClass = 'h-8';
  if (size === 'sm') heightClass = 'h-6';
  if (size === 'lg') heightClass = 'h-12';

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="/xeron-logo-cropped.png"
        alt="Xeron Logo"
        className={`${heightClass} w-auto object-contain mix-blend-multiply dark:mix-blend-screen dark:invert dark:brightness-200 transition-all`}
        loading="eager"
      />
    </div>
  );
};

// Backwards compatibility alias
export const XeroxicLogo = XeronLogo;
