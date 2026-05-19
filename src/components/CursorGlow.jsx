import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const smoothX = useSpring(x, { stiffness: 160, damping: 28 });
  const smoothY = useSpring(y, { stiffness: 160, damping: 28 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(finePointer);
    if (!finePointer) return undefined;

    const onMove = (event) => {
      x.set(event.clientX - 190);
      y.set(event.clientY - 190);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[80] h-[380px] w-[380px] rounded-full bg-cyan-beam/10 blur-3xl"
      style={{ x: smoothX, y: smoothY }}
      aria-hidden="true"
    />
  );
}
