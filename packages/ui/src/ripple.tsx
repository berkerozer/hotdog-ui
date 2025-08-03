"use client";
import React, { useState } from "react";

export type RippleProps = {
  className?: string;
};

interface RippleItem {
  id: number;
  x: number;
  y: number;
  size: number;
}

export const Ripple: React.FC<RippleProps> = ({ className }) => {
  const [ripples, setRipples] = useState<RippleItem[]>([]);

  const createRipple = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Element'in boyutlarını al
    const elementWidth = rect.width;
    const elementHeight = rect.height;

    // Ripple'ın tüm elementi kaplayacak boyutunu hesapla
    const size = Math.max(elementWidth, elementHeight) * 2;

    const newRipple: RippleItem = {
      id: Date.now(),
      x,
      y,
      size,
    };

    setRipples((prev) => [...prev, newRipple]);

    // Ripple'ı 800ms sonra kaldır
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 800);

    // Orijinal onClick fonksiyonunu çağır
    //onClick(event);
  };

  return (
    <>
      {/* Invisible overlay to capture clicks */}
      <div className="ripple-overlay" onClick={createRipple} />

      {/* Ripple animasyonları */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple-effect"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
          }}
        >
          <span className={`ripple-circle ${className}`} />
        </span>
      ))}
    </>
  );
};
