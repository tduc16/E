"use client";

import { useEffect, useRef, useState } from "react";

interface CaptchaProps {
  onChange: (value: string) => void;
}

export default function Captcha({ onChange }: CaptchaProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [captcha, setCaptcha] = useState("");

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let text = "";
    for (let i = 0; i < 5; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(text);
    onChange(text);
    drawCaptcha(text);
  };

  const drawCaptcha = (text: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f9fafb";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = "#d1d5db";
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    ctx.font = "24px Arial";
    ctx.textBaseline = "middle";

    [...text].forEach((char, i) => {
      const x = 20 + i * 24;
      const y = canvas.height / 2;
      const angle = (Math.random() - 0.5) * 0.4;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillStyle = "#374151";
      ctx.fillText(char, 0, 0);
      ctx.restore();
    });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="flex items-center gap-4">
      <canvas
        ref={canvasRef}
        width={140}
        height={44}
        className="border border-gray-300 rounded-lg"
      />
      <button
        type="button"
        onClick={generateCaptcha}
        className="text-sm text-blue-500 hover:underline"
      >
        Đổi mã
      </button>
    </div>
  );
}
