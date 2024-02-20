"use client";
import React, { useEffect, useRef } from "react";

interface Position {
  x: number;
  y: number;
}

interface SpriteAnimationProps {
  spriteWidth: number;
  spriteHeight: number;
  borderWidth?: number;
  spacingWidth?: number;
  animationCycle: Position[];
  animationSpeed: number;
  imageSrc: string;
}

const SpriteAnimator: React.FC<SpriteAnimationProps> = ({
  spriteWidth,
  spriteHeight,
  borderWidth = 0,
  spacingWidth = 0,
  animationCycle,
  animationSpeed,
  imageSrc,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    contextRef.current = context;

    const image = new Image();
    imageRef.current = image;
    image.src = imageSrc;
    image.crossOrigin = "anonymous";

    image.onload = () => {
      setInterval(animate, animationSpeed);
    };

    let frameIndex = 0;
    let frame: Position;

    function animate() {
      if (frameIndex === animationCycle.length) {
        frameIndex = 0;
      }
      frame = animationCycle[frameIndex];
      if (canvas) {
        contextRef.current?.clearRect(0, 0, canvas.width, canvas.height);
      }
      contextRef.current?.drawImage(
        imageRef.current!,
        frame.x,
        frame.y,
        spriteWidth,
        spriteHeight,
        0,
        0,
        spriteWidth,
        spriteHeight
      );
      frameIndex += 1;
    }

    return () => clearInterval(undefined);
  }, []);

  return <canvas ref={canvasRef} width={spriteWidth} height={spriteHeight} />;
};

export default SpriteAnimator;
