'use client'
import React, { useState, useCallback, useRef } from 'react';

interface PerspectiveState {
  rotateX: number;
  rotateY: number;
}

interface SpotlightConfig {
  spotlightSize?: number;
  overlayOpacity?: number;
  className?: string;
  tilt?: boolean;
}

interface ImageSpotlightProps {
  src?: string;
  alt?: string;
  orientation?: 'landscape' | 'portrait';
  width?: number;
  height?: number;
  config?: SpotlightConfig;
  children?: React.ReactNode;
}

export default function ImageSpotlight({
  src,
  alt = '',
  orientation = 'landscape',
  width,
  height,
  config = {},
  children,
}: ImageSpotlightProps) {
  const defaultConfig: Required<SpotlightConfig> = {
    spotlightSize: 80,
    overlayOpacity: 0.6,
    className: '',
    tilt: true,
  };

  const finalConfig = { ...defaultConfig, ...config };

  const [perspective, setPerspective] = useState<PerspectiveState>({ rotateX: 0, rotateY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    containerRef.current.style.setProperty('--mouse-x', `${x}%`);
    containerRef.current.style.setProperty('--mouse-y', `${y}%`);

    if (finalConfig.tilt) {
      const rotateY = ((x - 50) / 50) * 8;
      const rotateX = ((50 - y) / 50) * 8;
      setPerspective({ rotateX, rotateY });
    }
  }, [finalConfig.tilt]);

  const handleMouseLeave = () => {
    setPerspective({ rotateX: 0, rotateY: 0 });
  };

  const getContainerDimensions = (): React.CSSProperties => {
    if (children) return {};
    if (width && height) {
      return { width: `${width}px`, height: `${height}px`, maxWidth: '100%' };
    }
    if (orientation === 'landscape') {
      return { width: '800px', height: '450px', maxWidth: '100%' };
    }
    return { width: '450px', height: '600px', maxWidth: '100%' };
  };

  const containerClasses = `relative overflow-hidden cursor-none ${finalConfig.className}`.trim();

  return (
    <div
      ref={containerRef}
      className={containerClasses}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role={src ? 'img' : undefined}
      aria-label={src ? alt : undefined}
      style={{
        ...getContainerDimensions(),
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        transform: `perspective(1000px) rotateX(${perspective.rotateX}deg) rotateY(${perspective.rotateY}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.2s ease-out',
      } as React.CSSProperties}
    >
      {children ? (
        children
      ) : src ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      ) : null}

      <div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{
          opacity: finalConfig.overlayOpacity,
          maskImage: `radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            transparent ${finalConfig.spotlightSize * 0.4}px,
            black ${finalConfig.spotlightSize * 1.6}px
          )`,
          WebkitMaskImage: `radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            transparent ${finalConfig.spotlightSize * 0.4}px,
            black ${finalConfig.spotlightSize * 1.6}px
          )`,
          zIndex: 20,
        }}
      />
    </div>
  );
}
