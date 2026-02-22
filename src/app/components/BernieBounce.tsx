import { useEffect, useRef } from "react";
import bernieMeme from "../../images/bernie_meme.png";

const IMG_SIZE = 300;
const SPEED = 2;

export function BernieBounce() {
  const imgRef = useRef<HTMLImageElement>(null);
  const posRef = useRef({ x: 80, y: 80, dx: SPEED, dy: SPEED });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const animate = () => {
      const pos = posRef.current;
      const maxX = window.innerWidth - IMG_SIZE;
      const maxY = window.innerHeight - IMG_SIZE;

      pos.x += pos.dx;
      pos.y += pos.dy;

      if (pos.x <= 0 || pos.x >= maxX) {
        pos.dx = -pos.dx;
        pos.x = Math.max(0, Math.min(pos.x, maxX));
      }
      if (pos.y <= 0 || pos.y >= maxY) {
        pos.dy = -pos.dy;
        pos.y = Math.max(0, Math.min(pos.y, maxY));
      }

      img.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <img
      ref={imgRef}
      src={bernieMeme}
      alt="Bernie"
      className="fixed top-0 left-0 pointer-events-none select-none"
      style={{
        width: IMG_SIZE,
        height: IMG_SIZE,
        objectFit: "contain",
        zIndex: 40,
        opacity: 0.85,
      }}
    />
  );
}
