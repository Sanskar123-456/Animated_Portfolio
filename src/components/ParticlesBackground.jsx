import { useEffect, useRef } from "react";

// useRef → lets us directly access the <canvas> element.
// useEffect → runs animation code after the component mounts.

export default function ParticlesBackground() {
  const canvasRef = useRef(null); //Creates a reference to store the canvas DOM element.

  useEffect(() => {
    const canvas = canvasRef.current; //Gives you the real HTML element (DOM node)
    const ctx = canvas.getContext("2d"); //It gives the drawing area 2-D Context

    let particles = []; //Empty Array contains particles
    const particlesCount = 100;
    const colors = ["rgba(255,255,255,0.7"]; //Color of Particle with opacity

    class Particles {
      constructor() {
        //Defining the position,movement and speed of particle and giving each particle unique motion
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = (Math.random() - 0.8) * 0.8;
        this.speedY = (Math.random() - 0.8) * 0.8;
      }

      draw() {
        //Draw the Particles on Canvas
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Moves particle every frame.
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas.width; //Wrap Around Effect and Makes particles wrap around screen edges instead of disappearing.
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        this.draw(); //Redraws the particle after moving.
      }
    }

    function createParticles() {
      //Fills array with new randomly placed particles.
      particles = [];
      for (let i = 0; i < particlesCount; i++) {
        particles.push(new Particles());
      }
    }

    function handleResize() {
      //Makes canvas fill the whole screen and rebuilds particles on window resize.
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    let animationId;
    function animate() {
      //Clears the screen → updates each particle → calls itself again for the next frame.Necessary To Escape from Memory Leak.
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      animationId = requestAnimationFrame(animate); //requestAnimationFrame keeps animation smooth (≈60 FPS).
    }
    animate();
  }, []);

  return (
    //ref is a bridge between React and the actual DOM element.
    <canvas
      ref={canvasRef} //connects your React variable (canvasRef) to a real HTML element
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    ></canvas>
  );
}
