import { useEffect, useRef } from "react";
import bernieMeme from "../../images/bernie_meme.png";

const SPEED = 2;

const getSize = () =>
  Math.max(60, Math.min(Math.round(window.innerWidth * 0.13), 300));

export function BernieBounce() {
  const imgRef = useRef<HTMLImageElement>(null);
  const posRef = useRef({ x: 80, y: 80, dx: SPEED, dy: SPEED });
  const sizeRef = useRef(getSize());
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const applySize = (size: number) => {
      img.style.width = `${size}px`;
      img.style.height = `${size}px`;
    };

    applySize(sizeRef.current);

    const animate = () => {
      const pos = posRef.current;
      const size = sizeRef.current;
      const maxX = window.innerWidth - size;
      const maxY = window.innerHeight - size;

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

    const handleResize = () => {
      sizeRef.current = getSize();
      applySize(sizeRef.current);
    };

    window.addEventListener("resize", handleResize);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={bernieMeme}
      alt="Bernie"
      className="fixed top-0 left-0 pointer-events-none select-none"
      style={{
        objectFit: "contain",
        zIndex: 40,
        opacity: 0.85,
      }}
    />
  );
}
