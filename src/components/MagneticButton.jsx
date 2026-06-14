import { useRef } from "react";

function MagneticButton({ as: Component = "a", className = "", children, ...props }) {
  const ref = useRef(null);

  const handleMouseMove = (event) => {
    const element = ref.current;
    if (!element || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <Component
      ref={ref}
      className={`magnetic inline-flex items-center justify-center rounded-lg px-5 py-3 font-bold transition ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Component>
  );
}

export default MagneticButton;
