/** @format */

// Card whose glow follows the pointer via CSS custom properties
// (no React state, so hovering never re-renders).
const SpotlightCard = ({ children, className = "" }) => {
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onMouseMove={onMove}
      className={`card group relative overflow-hidden transition-colors duration-300 hover:border-fg/20 ${className}`}
    >
      <div className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
