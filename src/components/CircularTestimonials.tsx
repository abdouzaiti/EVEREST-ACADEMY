"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}
interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}
interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}
interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  // Color & font config
  const colorName = colors.name ?? "#000";
  const colorDesignation = colors.designation ?? "#6b7280";
  const colorTestimony = colors.testimony ?? "#4b5563";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [activeIndex, testimonialsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  // Swipe & Drag handlers for touch & mouse
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const dragThreshold = 40;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diffX = touchStartX.current - touchEndX.current;
    if (Math.abs(diffX) > dragThreshold) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
    touchEndX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diffX = touchStartX.current - touchEndX.current;
    if (Math.abs(diffX) > dragThreshold) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      handleMouseUp();
    }
  };

  // Compute transforms for each image (always show 3: left, center, right)
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const offset = (index - activeIndex + testimonialsLength) % testimonialsLength;
    // const zIndex = testimonialsLength - Math.abs(offset);
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants for quote
  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-grid">
        {/* Images */}
        <div 
          className="image-container select-none cursor-grab active:cursor-grabbing" 
          ref={imageContainerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.src}
              src={testimonial.src}
              alt={testimonial.name}
              className="testimonial-image select-none pointer-events-none"
              data-index={index}
              style={getImageStyle(index)}
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
            />
          ))}
        </div>
        {/* Content */}
        <div className="testimonial-content">
          <AnimatePresence mode="wait">
            {(() => {
              const isRtl = activeTestimonial ? /[\u0600-\u06FF]/.test(activeTestimonial.quote || "") : false;
              return (
                <motion.div
                  key={activeIndex}
                  variants={quoteVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  dir={isRtl ? "rtl" : "ltr"}
                  style={{ textAlign: isRtl ? "right" : "left" }}
                >
                  <h3
                    className="name"
                    style={{ 
                      color: colorName, 
                      fontSize: fontSizeName,
                      textAlign: isRtl ? "right" : "left"
                    }}
                  >
                    {activeTestimonial.name}
                  </h3>
                  {activeTestimonial.designation && (
                    <p
                      className="designation"
                      style={{ 
                        color: colorDesignation, 
                        fontSize: fontSizeDesignation,
                        textAlign: isRtl ? "right" : "left"
                      }}
                    >
                      {activeTestimonial.designation}
                    </p>
                  )}
                  <motion.p
                    className="quote"
                    style={{ 
                      color: isRtl ? "#1e293b" : colorTestimony, 
                      fontSize: fontSizeQuote,
                      textAlign: isRtl ? "right" : "left",
                      lineHeight: isRtl ? "1.9" : "1.75",
                      fontWeight: isRtl ? "500" : "inherit"
                    }}
                  >
                    {activeTestimonial.quote.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{
                          filter: "blur(4px)",
                          opacity: 0,
                          y: 5,
                        }}
                        animate={{
                          filter: "none",
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.22,
                          ease: "easeInOut",
                          delay: 0.025 * i,
                        }}
                        style={{ display: "inline-block" }}
                      >
                        {word}&nbsp;
                      </motion.span>
                    ))}
                  </motion.p>
                </motion.div>
              );
            })()}
          </AnimatePresence>
          {(() => {
            const isRtl = activeTestimonial ? /[\u0600-\u06FF]/.test(activeTestimonial.quote || "") : false;
            return (
              <div 
                className="arrow-buttons"
                style={{ justifyContent: isRtl ? "flex-end" : "flex-start" }}
              >
            <button
              className="arrow-button prev-button"
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
                color: hoverPrev ? "#fff" : colorArrowFg,
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous testimonial"
            >
              <span className="rtl:rotate-180 transition-transform flex items-center justify-center">
                <FaArrowLeft size={16} color={hoverPrev ? "#fff" : colorArrowFg} />
              </span>
            </button>
            <button
              className="arrow-button next-button"
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
                color: hoverNext ? "#fff" : colorArrowFg,
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next testimonial"
            >
              <span className="rtl:rotate-180 transition-transform flex items-center justify-center">
                <FaArrowRight size={16} color={hoverNext ? "#fff" : colorArrowFg} />
              </span>
            </button>
              </div>
            );
          })()}
        </div>
      </div>
      <style>{`
        .testimonial-container {
          width: 100%;
          max-width: 56rem;
        }
        .testimonial-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 16rem;
          perspective: 1000px;
        }
        @media (min-width: 768px) {
          .image-container {
            height: 24rem;
          }
        }
        .testimonial-image {
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
          max-width: 100%;
          height: 100%;
          width: auto;
          object-fit: contain;
          border-radius: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: center;
        }
        .name {
          font-weight: bold;
          margin-bottom: 0.25rem;
        }
        .designation {
          margin-bottom: 2rem;
        }
        .quote {
          line-height: 1.75;
        }
        .arrow-buttons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          padding-top: 1rem;
        }
        .arrow-button {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.02);
        }
        .arrow-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(245, 130, 32, 0.2);
          border-color: transparent;
        }
        .arrow-button:active {
          transform: translateY(0px) scale(0.95);
        }
        .word {
          display: inline-block;
        }
        @media (min-width: 768px) {
          .testimonial-content {
            text-align: start;
          }
          .arrow-buttons {
             justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default CircularTestimonials;
