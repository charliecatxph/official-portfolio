// framer motion
import { motion } from "framer-motion";

const parent = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.13, 0.7, 0.13, 1],
    },
  },
};

export default function Hello() {
  return (
    <section className="hello-me" id="hello">
      <div className="container">
        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="wrapper"
        >
          <div className="title">
            <motion.h1 variants={fadeUp}>hello</motion.h1>
          </div>
          <div className="hello-text">
            <motion.span variants={fadeUp}>
              Hello! I&apos;m Charl Concepcion. A full-stack web developer based
              in the Philippines. I&apos;m currently certified on freeCodeCamp
              as a full-stack software engineer and I create web applications
              with design and performance in mind.
            </motion.span>
            <motion.span variants={fadeUp}>
              I currently do this as a hobby but I&apos;m now looking forward to
              other opportunities. I&apos;ve been looking forward to freelancing
              and working part-time but I&apos;ll unfotunately have to put in on
              hold because I&apos;m now going to Senior High School.
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
