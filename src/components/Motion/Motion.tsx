import { useMediaQuery } from "react-responsive";
import { ReactNode } from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../../utils/fadeIn";

interface MotionProps {
  children: ReactNode;
  className: string;
  type: "div" | "header" | "section";
}

const Motion: React.FC<MotionProps> = ({
  children,
  className,
  type = "div",
}) => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const MotionTag = motion[type];

  return (
    <MotionTag
      className={className}
      variants={fadeIn(isMobile ? "up" : "right", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </MotionTag>
  );
};

export default Motion;
