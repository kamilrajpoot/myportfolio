import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const ScrollIndicator = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrame;

    const updateRotation = () => {
      const scrollY = window.scrollY;

      // 0.6 ko increase/decrease karke rotation speed adjust kar sakte hain.
      setRotation(scrollY * 0.6);

      animationFrame = null;
    };

    const handleScroll = () => {
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(updateRotation);
      }
    };

    updateRotation();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative w-28 h-28 flex items-center justify-center" aria-hidden="true">
      <svg
        viewBox="0 0 144 144"
        className="absolute inset-0 w-full h-full"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <defs>
          <path
            id="circlePath"
            d="M72,72 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"
          />
        </defs>

        <text className="font-mono-label text-[10px] fill-ink">
          <textPath href="#circlePath">
            SCROLL TO EXPLORE • SCROLL TO EXPLORE •
          </textPath>
        </text>
      </svg>

      {/* Arrow ko static rakha gaya hai; sirf circular text rotate hoga. */}
      <ArrowDown size={24} strokeWidth={2.5} />
    </div>
  );
};

export default ScrollIndicator;
