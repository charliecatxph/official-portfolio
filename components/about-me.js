import Image from "next/image";
import handsome from "../assets/handsome2.png";

// framer motion
import { motion } from "framer-motion";

// router
import Link from "next/link";

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

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1>about me</h1>
          </div>
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="main"
          >
            <motion.div
              variants={fade}
              initial="hidden"
              animate="show"
              className="my-image"
            >
              <figure>
                <Image src={handsome} alt="A photo of Charl Concepcion" />
              </figure>
            </motion.div>
            <div className="my-about-me">
              <div className="text">
                <motion.span variants={fadeUp}>
                  Hello! I&apos;m Charl Concepcion. A full-stack web developer
                  based in the Philippines. I&apos;m currently certified on
                  freeCodeCamp as a full-stack software engineer and I create
                  web applications with design and performance in mind.
                </motion.span>
                <motion.span variants={fadeUp}>
                  I currently do this as a hobby but I&apos;m now looking
                  forward to other opportunities. I&apos;ve been looking forward
                  to freelancing and working part-time but I&apos;ll
                  unfortunately have to put in on hold because I&apos;m now
                  going to Senior High School.
                </motion.span>
              </div>
              <div className="more-about-me">
                <Link href="/me">
                  <motion.button variants={fade} whileTap={{ scale: 0.9 }}>
                    VIEW MY FULL PROFILE HERE
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
