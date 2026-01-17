import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type CounterProps = {
  from?: number;
  to: number;
  isFetched?: boolean;
};

const Counter = ({ from, to, isFetched }: CounterProps) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || !isInView) return;

    const controls = animate(from || 0, to, {
      duration: isFetched ? 0.5 : 0.9,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = Math.floor(value).toLocaleString();
      },
    });

    return () => controls.stop();
  }, [from, to, isInView]);

  return (
    <span className="" ref={nodeRef}>
      {from?.toLocaleString() || "0"}
    </span>
  );
};

export default Counter;