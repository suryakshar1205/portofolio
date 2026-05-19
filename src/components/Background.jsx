import { useEffect, useRef } from "react";

export function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameId;
    let particles = [];
    const mouse = { x: null, y: null };

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = window.innerWidth < 768 ? 38 : 72;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.38,
        vy: (Math.random() - 0.5) * 0.38,
        radius: Math.random() * 1.8 + 0.7
      }));
    };

    const onMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(34, 211, 238, 0.55)";
        context.fill();

        for (let next = index + 1; next < particles.length; next += 1) {
          const other = particles[next];
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (distance < 150) {
            context.strokeStyle = `rgba(96, 165, 250, ${0.16 * (1 - distance / 150)})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }

        if (mouse.x !== null) {
          const pointerDistance = Math.hypot(particle.x - mouse.x, particle.y - mouse.y);
          if (pointerDistance < 190) {
            context.strokeStyle = `rgba(139, 92, 246, ${0.18 * (1 - pointerDistance / 190)})`;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(mouse.x, mouse.y);
            context.stroke();
          }
        }
      });

      frameId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 -z-30 opacity-60" aria-hidden="true" />
      <div className="fixed inset-0 -z-40 bg-void bg-radial-field" aria-hidden="true" />
      <div className="fixed inset-0 -z-20 bg-grid-lines bg-[size:52px_52px] opacity-[0.22] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div className="noise-layer" aria-hidden="true" />
    </>
  );
}
