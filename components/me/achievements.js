// react
import { useState } from "react";

// image
import Image from "next/image";

// router
import Link from "next/link";

// achievements
import Cert1 from "../../assets/me/1rwd.png";
import Cert2 from "../../assets/me/2js.png";
import Cert3 from "../../assets/me/3fdl.png";
import Cert4 from "../../assets/me/4dv.png";
import Cert5 from "../../assets/me/5bda.png";
import Cert6 from "../../assets/me/6qa.png";
import Cert7 from "../../assets/me/7infosec.png";
import Cert8 from "../../assets/me/8fs.png";
import Cert9 from "../../assets/me/TDhtmlcssjs.png";
import Cert10 from "../../assets/me/TDjs.png";
import Cert11 from "../../assets/me/TDhtmlcssjsreact.png";
import Cert12 from "../../assets/me/TDreact.png";
import Cert13 from "../../assets/me/TDnode.png";

// module
import imageModule from "../../styles/image_module/ImageModule.module.css";

const achievements = {
  "Responsive Web Design": {
    image: Cert1,
    verification_link:
      "https://www.freecodecamp.org/certification/charliecatxph/responsive-web-design",
  },
  "JavaScript Algorithms and Data Structures": {
    image: Cert2,
    verification_link:
      "https://www.freecodecamp.org/certification/charliecatxph/javascript-algorithms-and-data-structures",
  },
  "Front End Development Libraries": {
    image: Cert3,
    verification_link:
      "https://www.freecodecamp.org/certification/charliecatxph/front-end-development-libraries",
  },
  "Data Visualization": {
    image: Cert4,
    verification_link:
      "https://www.freecodecamp.org/certification/charliecatxph/data-visualization",
  },
  "Back End Development and APIs": {
    image: Cert5,
    verification_link:
      "https://www.freecodecamp.org/certification/charliecatxph/back-end-development-and-apis",
  },
  "Quality Assurance": {
    image: Cert6,
    verification_link:
      "https://www.freecodecamp.org/certification/charliecatxph/quality-assurance-v7",
  },
  "Legacy Information Security and Quality Assurance": {
    image: Cert7,
    verification_link:
      "https://www.freecodecamp.org/certification/charliecatxph/information-security-and-quality-assurance",
  },
  "Full Stack": {
    image: Cert8,
    verification_link:
      "https://www.freecodecamp.org/certification/charliecatxph/full-stack",
  },
  "HTML/CSS and JavaScript": {
    image: Cert9,
    verification_link:
      "https://www.testdome.com/certificates/b90815c1e5bd466f8d3e568d3aa50dad",
  },
  JavaScript: {
    image: Cert10,
    verification_link:
      "https://www.testdome.com/certificates/bc244b3f85a2475595944c133055702f",
  },
  "HTML/CSS, JavaScript, and React": {
    image: Cert11,
    verification_link:
      "https://www.testdome.com/certificates/6a125188471d4198a2c4c4a1c846606e",
  },
  React: {
    image: Cert12,
    verification_link:
      "https://www.testdome.com/certificates/8d7ab61eab4d4f8296a212a9e3f133a0",
  },
  "Node.js": {
    image: Cert13,
    verification_link:
      "https://www.testdome.com/certificates/a10c99b99ded4f13ac3510cda68da671",
  },
};

// framer motion
import { motion, AnimatePresence } from "framer-motion";

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
  exit: {
    y: -20,
    opacity: 0,
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
  exit: {
    filter: "saturate(0%)",
    scaleY: 0,
    transition: {
      duration: 0.5,
      ease: [0.13, 0.7, 0.13, 1],
    },
  },
};

export default function Achievements() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = (param) => {
    setShowMore(param);
  };

  const achivementsElements = Object.keys(achievements)
    .map((d1, i1) => {
      return (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          exit="exit"
          className="achievement"
          key={i1}
        >
          <div className="image">
            <Image
              priority
              className={imageModule.image}
              src={achievements[d1].image}
            />
          </div>
          <div className="title">
            <span>{d1}</span>
          </div>
          <div className="buttons">
            <Link href={achievements[d1].verification_link}>
              <motion.button
                whileTap={{
                  scale: 0.9,
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5L4.5 13.5M6 4.5H13.5V12"
                    stroke="#fafafa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                Verify Certificate
              </motion.button>
            </Link>
          </div>
        </motion.div>
      );
    })
    .slice(0, !showMore ? 3 : Object.keys(achievements).length);

  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1>achievements</h1>
          </div>
          <motion.div
            variants={parent}
            initial="hidden"
            animate="show"
            className="achievements-main"
          >
            <AnimatePresence>
              {achivementsElements.map((element, i) => {
                return element;
              })}
            </AnimatePresence>
          </motion.div>
          <div className="show-more">
            {!showMore ? (
              <h4 onClick={() => handleShowMore(true)}>show more</h4>
            ) : (
              <h4 onClick={() => handleShowMore(false)}>collapse</h4>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
