import { useMediaQuery } from "react-responsive";
import { ReactNode } from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../../utils/fadeIn";
import { Divider } from "@chakra-ui/react";

interface MotionProps {
  children: ReactNode;
  className: string;
  type?: "div" | "header" | "section";
  viewport?: number;
}

const Motion: React.FC<MotionProps> = ({
  children,
  className,
  type = "div",
  viewport = 0.3,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const MotionTag = motion[type];

  return (
    <>
      <MotionTag
        className={className}
        variants={fadeIn(isMobile ? "up" : "right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: viewport }}
      >
        {children}
      </MotionTag>
      <Divider />
    </>
  );
};

export default Motion;
