import React, { useLayoutEffect, useRef } from 'react';

export const ToggleSound = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const draw = (div: HTMLDivElement, ctx: CanvasRenderingContext2D) => {
    const width = div.clientWidth;
    const height = div.clientHeight;

    ctx.beginPath();
    // ctx.lineWidth = 5;
    // ctx.strokeStyle = 'blue';

    // for (let i = 0; i < width; i++) {
    //   ctx.lineTo(width, height / 2);
    // }

    // ctx.moveTo(0, height / 2);
    // ctx.lineTo(width, height / 2);
    ctx.rect(20, 20, 30, 20);
    ctx.stroke();
  };

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    console.log(divRef.current.offsetWidth, divRef.current.offsetHeight);

    draw(divRef.current, context);
  }, []);

  return (
    <div className='w-12 h-10' ref={divRef}>
      <canvas ref={canvasRef} className='w-12 h-10 bg-green-600' />
    </div>
  );
};
