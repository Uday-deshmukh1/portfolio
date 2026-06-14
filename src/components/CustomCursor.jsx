import { useEffect, useRef } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let frame = 0;

    const move = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const animate = () => {
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move, { passive: true });
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}

export default CustomCursor;
