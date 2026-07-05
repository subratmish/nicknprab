"use client";

import {
  Children,
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type MotionFadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  scale?: number;
};

export function MotionFadeUp({
  children,
  className,
  delay = 0,
  duration = 0.6,
  x,
  y = 24,
  scale,
}: MotionFadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transform = visible
    ? undefined
    : [
        x !== undefined ? `translateX(${x}px)` : undefined,
        y !== undefined ? `translateY(${y}px)` : undefined,
        scale !== undefined ? `scale(${scale})` : undefined,
      ]
        .filter(Boolean)
        .join(" ");

  return (
    <div
      ref={ref}
      className={`transition-all ${
        visible ? "opacity-100" : "opacity-0"
      } ${className ?? ""}`}
      style={{
        transform,
        transitionDuration: `${duration}s`,
        transitionTimingFunction: "ease-out",
        transitionDelay: `${delay}s`,
        willChange: visible ? undefined : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

const StaggerContext = createContext(false);

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const clones = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child;
    const itemProps = (child as ReactElement<{ delay?: number }>).props;
    return cloneElement(child as ReactElement<any>, {
      delay: (itemProps?.delay ?? 0) + index * stagger,
    });
  });

  return (
    <StaggerContext.Provider value={visible}>
      <div ref={ref} className={className}>
        {clones}
      </div>
    </StaggerContext.Provider>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function StaggerItem({
  children,
  className,
  delay = 0,
}: StaggerItemProps) {
  const visible = useContext(StaggerContext);

  return (
    <div
      className={`transition-all ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${className ?? ""}`}
      style={{
        transitionDuration: "0.6s",
        transitionTimingFunction: "ease-out",
        transitionDelay: `${delay}s`,
        willChange: visible ? undefined : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
