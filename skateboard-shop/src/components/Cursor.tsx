import { useEffect, useState } from 'react';

const Cursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const hide = () => setVisible(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', hide);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', hide);
    };
  }, [visible]);

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-opacity duration-300"
      style={{
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
        opacity: visible ? 1 : 0,
      }}
    >
      {/* Crosshair arms */}
      <div className="relative w-5 h-5">
        <div className="absolute top-1/2 left-0 w-full h-px bg-[#FCEE09] -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#FCEE09] -translate-x-1/2" />
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-[3px] h-[3px] bg-[#FCEE09] rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default Cursor;
