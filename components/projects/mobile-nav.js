import { motion } from "framer-motion";

// router
import Link from "next/link";

const parent = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const parent2 = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.1,
    },
  },
};

const height = {
  hidden: {
    height: "0%",
  },
  show: {
    height: "100%",
    transition: {
      duration: 1,
      ease: [0.13, 0.7, 0.13, 1],
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
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

const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.13, 0.7, 0.13, 1],
    },
  },
};

export default function MobileNav({ activateMobileNav }) {
  return (
    <motion.nav
      variants={parent}
      initial="hidden"
      animate="show"
      className="mobile-nav"
    >
      <motion.div
        variants={height}
        exit={{
          height: 0,
          transition: {
            duration: 0.5,
            delay: 0.3,
          },
        }}
        key="1"
        className="mb-bg bg-1"
      ></motion.div>
      <motion.div
        variants={height}
        exit={{
          height: 0,
          transition: {
            duration: 0.5,
            delay: 0.2,
          },
        }}
        key="2"
        className="mb-bg bg-2"
      ></motion.div>

      <motion.div
        variants={height}
        exit={{
          height: 0,
          transition: {
            duration: 0.5,
          },
        }}
        key="3"
        className="main-nav"
      >
        <div className="container">
          <div className="wrapper">
            <div className="close-btn">
              <motion.svg
                width="15"
                height="15"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                variants={fade}
                whileTap={{ scale: 0.9 }}
                onClick={() => activateMobileNav()}
              >
                <line
                  x1="1.41421"
                  y1="1.58579"
                  x2="21.4142"
                  y2="21.5858"
                  stroke="#FAFAFA"
                  strokeWidth="4"
                />
                <line
                  x1="1.58579"
                  y1="21.5858"
                  x2="21.5858"
                  y2="1.58579"
                  stroke="#FAFAFA"
                  strokeWidth="4"
                />
              </motion.svg>
            </div>
            <motion.ul variants={parent2} initial="hidden" animate="show">
              <a>
                <motion.li variants={fadeUp} whileTap={{ scale: 0.9 }}>
                  <Link href="/">home</Link>
                </motion.li>
              </a>
              <a href="#information">
                <motion.li
                  variants={fadeUp}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => activateMobileNav()}
                >
                  information
                </motion.li>
              </a>
              <a href="#contact">
                <motion.li
                  variants={fadeUp}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => activateMobileNav()}
                >
                  contact
                </motion.li>
              </a>
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
