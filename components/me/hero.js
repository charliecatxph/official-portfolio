import Image from "next/image";

// module
import imageModule from "../../styles/image_module/ImageModule.module.css";

// heroimg
import HeroIMG from "../../assets/me/programming-img.png";

// handsome
import Handsome from "../../assets/handsome2.png";

// featured
import feat1 from "../../assets/me/feat-1.png";
import feat2 from "../../assets/me/feat-2.png";

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

const rtl = {
  start: {
    width: "100%",
  },
  end: {
    width: "0%",
    right: 0,
    transition: {
      duration: 1,
      ease: [0.2, 0.52, 0.22, 1],
      delay: 0.5,
    },
  },
};

const opacity = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 0.7,
    transition: {
      duration: 0.2,
      ease: [0.2, 0.52, 0.22, 1],
      delay: 1.5,
    },
  },
};

const scaleRightDown = {
  start: {
    x: -100,
    scale: 1.1,
  },
  end: {
    x: [null, 0, 0],
    scale: [null, 1.1, 1],
    transition: {
      duration: 0.5,
      ease: [0.13, 0.7, 0.13, 1],
      delay: 1,
    },
  },
};

export default function Hero() {
  return (
    <section className="about-me-hero">
      <div className="background">
        <motion.figure variants={scaleRightDown} initial="start" animate="end">
          <motion.div
            variants={rtl}
            initial="start"
            animate="end"
            className="cover"
          ></motion.div>
          <motion.div
            variants={opacity}
            initial="start"
            animate="end"
            className="darken"
          ></motion.div>
          <Image src={HeroIMG} layout="fill" objectFit="cover" />
        </motion.figure>
      </div>
      <motion.div
        variants={parent}
        initial="hidden"
        animate="show"
        className="container"
      >
        <div className="wrapper">
          <motion.figure variants={fade} className="handsome">
            <Image src={Handsome} className={imageModule.image} />
          </motion.figure>
          <div className="hero-short-bio">
            <motion.h1 variants={fadeUp} className="my-name">
              Charl Concepcion
            </motion.h1>
            <motion.span variants={fadeUp} className="large-text-am">
              A full-stack software engineer.
            </motion.span>
            <motion.span variants={fadeUp} className="graduate">
              A 2022 freeCodeCamp graduate.
            </motion.span>
            <div className="featured-achievements">
              <div className="row-1">
                <div className="title">
                  <motion.h5 variants={fadeUp}>
                    Featured achievements:
                  </motion.h5>
                </div>
                <div className="featured-row">
                  <motion.figure variants={fadeUp}>
                    <Image src={feat1} className={imageModule.image} />
                  </motion.figure>
                  <motion.figure variants={fadeUp}>
                    <Image src={feat2} className={imageModule.image} />
                  </motion.figure>
                </div>
              </div>
              <motion.div variants={fadeUp} className="row-2">
                <motion.button whileTap={{ scale: 0.9 }}>
                  <a href="#achievements">JUMP TO ACHIEVEMENTS</a>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
