import React, { useCallback, useRef } from 'react';

/**
 * Lightweight 3D tilt-on-hover wrapper (mirrors the vanilla-tilt.js
 * `data-tilt` interaction used in the original design) implemented with
 * plain mouse events so no extra dependency is required.
 */
export default function TiltCard({
  as: Tag = 'div',
  children,
  className = '',
  maxTilt = 10,
  scale = 1.02,
  style,
  ...rest
}) {
  const ref = useRef(null);
  const frame = useRef(null);

  const applyTransform = useCallback((rotateX, rotateY, s) => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${s}, ${s}, ${s})`;
  }, []);

  const handleMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - py) * maxTilt * 2;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => applyTransform(rotateX, rotateY, scale));
  }, [maxTilt, scale, applyTransform]);

  const handleMouseLeave = useCallback(() => {
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => applyTransform(0, 0, 1));
  }, [applyTransform]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', willChange: 'transform', ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}
