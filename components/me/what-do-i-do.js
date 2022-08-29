import Image from "next/image";

// module
import imageModule from "../../styles/image_module/ImageModule.module.css";

// what do i do images
import What1 from "../../assets/me/prototyping-img.png";
import What2 from "../../assets/me/programming-img.png";
import What3 from "../../assets/me/graphics-img.png";

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

export default function WhatDoIDo() {
  return (
    <section className="what-do-i-do">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <motion.h1
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              what do i do
            </motion.h1>
          </div>
          <div className="what-do-i-do-main">
            <motion.div
              variants={parent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: "full" }}
              className="row"
            >
              <motion.div variants={fade} className="image">
                <Image
                  src={What1}
                  className={imageModule.image}
                  alt="Prototyping"
                />
              </motion.div>
              <div className="info">
                <motion.div variants={fadeUp} className="title">
                  <h2>Prototyping</h2>
                </motion.div>
                <motion.div variants={fadeUp} className="description">
                  <span>
                    I do prototyping and design work in Figma, JustInMind, and
                    AdobeXD. Sometimes, I use Photoshop if it’s really needed.
                  </span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={parent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: "full" }}
              className="row reverse"
            >
              <motion.div variants={fade} className="image">
                <Image
                  src={What2}
                  className={imageModule.image}
                  alt="Web Programming"
                />
              </motion.div>
              <div className="info">
                <motion.div variants={fadeUp} className="title">
                  <h2>Web Programming</h2>
                </motion.div>
                <motion.div variants={fadeUp} className="description">
                  <span>
                    For my full-stack projects, I use the most latest
                    technologies as possible. My favorite stack is definetely
                    the MERN stack since I was familiarized by it while learning
                    it in freeCodeCamp.
                  </span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={parent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: "full" }}
              className="row"
            >
              <motion.div variants={fade} className="image">
                <Image
                  src={What3}
                  className={imageModule.image}
                  alt="Graphics Work"
                />
              </motion.div>
              <div className="info">
                <motion.div variants={fadeUp} className="title">
                  <h2>Graphics Work</h2>
                </motion.div>
                <motion.div variants={fadeUp} className="description">
                  <span>
                    Besides programming, I use various kinds of software for
                    graphics. I use Adobe Photoshop for photos, Filmora for
                    videos, and Adobe Animate for animation. Yes, animation, I
                    used to animate 2D videos back in my Junior High School
                    days.
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
