import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import { motion, useMotionValue, useTransform } from "framer-motion";
import * as THREE from "three";
import { useRef, useMemo } from "react";

function GlowPoints() {
  const pointsRef = useRef();
  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 3000; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  }, []);

  // Floating movement + hue shift
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const hue = 0.55 + 0.1 * Math.sin(t * 1.5); // blue to cyan
    const light = 0.5 + 0.2 * Math.sin(t * 2);
    pointsRef.current.material.color = new THREE.Color().setHSL(hue, 1, light);
  });

  return (
    <Points ref={pointsRef} positions={particles}>
      <PointMaterial
        transparent
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color="#00ffff"
      />
    </Points>
  );
}

export default function CyberAIFutureBackground() {
  // For interactive glow movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowShiftX = useTransform(mouseX, [-1, 1], ["0%", "100%"]);
  const glowShiftY = useTransform(mouseY, [-1, 1], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-0 bg-black overflow-hidden"
    >
      {/* 🔹 Glowing animated grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0,255,255,0.12) 1px, transparent 1px),
            linear-gradient(rgba(0,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          backgroundPositionX: glowShiftX,
          backgroundPositionY: glowShiftY,
          boxShadow: "0 0 40px 10px rgba(0,255,255,0.15) inset",
        }}
        animate={{
          filter: [
            "drop-shadow(0 0 2px #00FFFF)",
            "drop-shadow(0 0 6px #00E0FF)",
            "drop-shadow(0 0 10px #FF0055)",
            "drop-shadow(0 0 6px #00E0FF)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🔸 3D Neural Particles */}
      <Canvas camera={{ position: [0, 0, 6] }}>
        <GlowPoints />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>

      {/* 🔸 Pulsing energy beam */}
      <motion.div
        className="absolute w-[200%] h-[2px] top-1/2 left-[-50%] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 blur-sm"
        animate={{ y: ["0%", "100%", "0%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔸 Faint red pulse aura */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,0,100,0.15),transparent_70%)] mix-blend-screen"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
