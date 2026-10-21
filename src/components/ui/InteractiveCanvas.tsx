"use client";

import { useEffect, useRef } from "react";
import { useThemeAnimation } from "@/context/ThemeAnimationContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isDark, isAnimationActive } = useThemeAnimation();

  // Keep latest state in refs so the animation loop doesn't restart on state changes
  const activeRef = useRef(isAnimationActive);
  const darkRef = useRef(isDark);
  const mouseRef = useRef({ x: -1000, y: -1000, isHovering: false });

  useEffect(() => {
    activeRef.current = isAnimationActive;
  }, [isAnimationActive]);

  useEffect(() => {
    darkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handlePointerMove = (e: PointerEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        isHovering: true,
      };
    };

    const handlePointerLeave = () => {
      mouseRef.current.isHovering = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("mouseleave", handlePointerLeave);

    // Generate responsive particles
    const count = Math.min(Math.floor((width * height) / 16000), 75);
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const darkMode = darkRef.current;
      const isPaused = !activeRef.current;
      const mouse = mouseRef.current;

      // Color scheme adapted for Dark vs Light mode
      const particleColor = darkMode ? "rgba(56, 189, 248, 0.75)" : "rgba(14, 116, 144, 0.65)";
      const particleGlow = darkMode ? "#38bdf8" : "#0284c7";
      const lineBase = darkMode ? "56, 189, 248" : "14, 116, 144";
      const mouseLineBase = darkMode ? "96, 165, 250" : "37, 99, 235";

      // 1. Connect nearby particles to each other
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 135) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${lineBase}, ${0.16 * (1 - dist / 135)})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // 2. Connect particles to interactive mouse cursor
      if (mouse.isHovering) {
        for (let i = 0; i < particles.length; i++) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 170) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${mouseLineBase}, ${0.35 * (1 - dist / 170)})`;
            ctx.lineWidth = 1.3;
            ctx.stroke();
          }
        }
      }

      // 3. Draw & update each particle
      particles.forEach((p) => {
        if (!isPaused) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.shadowBlur = darkMode ? 10 : 4;
        ctx.shadowColor = particleGlow;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}