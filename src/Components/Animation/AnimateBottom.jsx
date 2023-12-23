/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
const AnimateBottom = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} className="relative overflow-hidden w-fit">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -175 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.45 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimateBottom;
