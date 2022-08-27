import imageStyles from "../../../styles/projects_modules/ProjectImage.module.css";
import WhisperPic from "../../../assets/projects/whisper.png";

// next-image
import Image from "next/image";

// framer motion
import { motion } from "framer-motion";

// router
import Link from "next/link";

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

const parent = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.5,
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

export default function Hero() {
  return (
    <section className="proj1-hero">
      <div className="background">
        <motion.figure variants={scaleRightDown} initial="start" animate="end">
          <motion.div
            variants={rtl}
            initial="start"
            animate="end"
            className="cover"
          ></motion.div>
          <Image
            src={WhisperPic}
            className={imageStyles.image}
            layout="fill"
            objectFit="cover"
            alt="Whisper image"
            priority
          />
        </motion.figure>
      </div>
      <div className="container">
        <div className="wrapper">
          <motion.div
            variants={parent}
            initial="hidden"
            animate="show"
            className="hero-text"
          >
            <div className="punch-text">
              <motion.h1 variants={fadeUp}>Whisper</motion.h1>
            </div>
            <div className="information">
              <motion.span variants={fadeUp}>
                Add friends, chat realtime with Whisper!
              </motion.span>
            </div>
            <div className="project-overview">
              <div className="quick-info">
                <div className="title">
                  <motion.h4 variants={fadeUp}>License:</motion.h4>
                </div>
                <div className="row-2">
                  <motion.span variants={fadeUp}>MIT</motion.span>
                </div>
              </div>
              <div className="quick-info">
                <div className="title">
                  <motion.h4 variants={fadeUp}>Technologies:</motion.h4>
                </div>
                <motion.div variants={fadeUp} className="row-2">
                  <span>MERN Stack</span>
                  <span>SASS</span>
                  <span>JWT</span>
                  <span>WebSocket.IO</span>
                </motion.div>
              </div>
              <div className="quick-info">
                <div className="title">
                  <motion.h4 variants={fadeUp}>Developers:</motion.h4>
                </div>
                <motion.div variants={fadeUp} className="row-2">
                  <span>Charl Concepcion (Lead Dev.)</span>
                </motion.div>
              </div>
            </div>
            <div className="project-buttons">
              <Link href="https://whisper-ctx.herokuapp.com/">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  variants={fadeUp}
                  className="cta"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM4 12C4 11.101 4.156 10.238 4.431 9.431L6 11L8 13V15L10 17L11 18V19.931C7.061 19.436 4 16.072 4 12ZM18.33 16.873C17.677 16.347 16.687 16 16 16V15C16 14.4696 15.7893 13.9609 15.4142 13.5858C15.0391 13.2107 14.5304 13 14 13H10V10C10.5304 10 11.0391 9.78929 11.4142 9.41421C11.7893 9.03914 12 8.53043 12 8V7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5V4.589C17.928 5.778 20 8.65 20 12C19.9998 13.7647 19.4123 15.4791 18.33 16.873Z"
                      fill="#FAFAFA"
                    />
                  </svg>
                  Visit Site
                </motion.button>
              </Link>
              <Link href="https://github.com/charliecatxph/whisper-ctx">
                <motion.button whileTap={{ scale: 0.9 }} variants={fadeUp}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M8 6H18V16"
                      stroke="#FAFAFA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Source Code
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <div className="scroll-down">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9805 7C10.1115 7 9.44473 7.12775 8.76048 7.49525C8.21098 7.78925 7.78923 8.211 7.49523 8.7605C7.12773 9.44475 6.99998 10.1115 6.99998 11.9805V19.5195C6.99998 21.3885 7.12773 22.0553 7.49523 22.7395C7.78923 23.289 8.21098 23.7108 8.76048 24.0048C9.44473 24.3723 10.1115 24.5 11.9805 24.5H16.0195C17.8885 24.5 18.5552 24.3723 19.2395 24.0048C19.789 23.7108 20.2107 23.289 20.5047 22.7395C20.8722 22.0553 21 21.3885 21 19.5195V11.9805C21 10.1115 20.8722 9.44475 20.5047 8.7605C20.2204 8.22064 19.7793 7.77953 19.2395 7.49525C18.5552 7.12775 17.8885 7 16.0195 7H11.9805ZM11.9805 5.25H16.0195C18.3592 5.25 19.208 5.495 20.0637 5.95C20.9212 6.4085 21.5915 7.0805 22.0482 7.93625C22.5067 8.792 22.75 9.64075 22.75 11.9787V19.5212C22.75 21.8592 22.505 22.708 22.05 23.5638C21.602 24.4095 20.9099 25.101 20.0637 25.5482C19.208 26.0067 18.3592 26.25 16.0212 26.25H11.9787C9.64073 26.25 8.79198 26.005 7.93623 25.55C7.08955 25.1018 6.39743 24.4091 5.94998 23.562C5.49148 22.7062 5.24823 21.8575 5.24823 19.5195V11.977C5.24823 9.639 5.49323 8.79025 5.94823 7.9345C6.39718 7.08822 7.09052 6.39671 7.93798 5.95C8.79198 5.49325 9.64073 5.25 11.9787 5.25H11.9805Z"
                fill="#FAFAFA"
              />
              <path
                d="M14 8.75C14.5833 8.75 14.875 9.04167 14.875 9.625V13.125C14.875 13.7083 14.5833 14 14 14C13.4167 14 13.125 13.7083 13.125 13.125V9.625C13.125 9.04167 13.4167 8.75 14 8.75ZM14.875 6.125C14.875 6.35706 14.7828 6.57962 14.6187 6.74372C14.4546 6.90781 14.2321 7 14 7C13.7679 7 13.5454 6.90781 13.3813 6.74372C13.2172 6.57962 13.125 6.35706 13.125 6.125V4.375C13.125 4.14294 13.0328 3.92038 12.8687 3.75628C12.7046 3.59219 12.4821 3.5 12.25 3.5H9.625C9.39294 3.5 9.17038 3.40781 9.00628 3.24372C8.84219 3.07962 8.75 2.85706 8.75 2.625C8.75 2.39294 8.84219 2.17038 9.00628 2.00628C9.17038 1.84219 9.39294 1.75 9.625 1.75H12.25C12.9462 1.75 13.6139 2.02656 14.1062 2.51884C14.5984 3.01113 14.875 3.67881 14.875 4.375V6.125Z"
                fill="#FAFAFA"
              />
            </svg>
            <span>scroll down</span>
          </div>
        </div>
      </div>
    </section>
  );
}
