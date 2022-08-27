import Image from "next/image";
import PalleteImg from "../assets/Pallete-Hero.png";
import CompImg from "../assets/Computer-Hero.png";
import RocketImg from "../assets/Rocket-Hero.png";

// framer motion
import { motion, AnimatePresence } from "framer-motion";

// react
import { useEffect, useState } from "react";

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

const fade2 = {
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
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: [0.13, 0.7, 0.13, 1],
    },
  },
};

export default function Hero() {
  const [heroImgIndex, setHeroImgIndex] = useState(0);

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      if (heroImgIndex >= 2) {
        setHeroImgIndex(0);
        return;
      }

      setHeroImgIndex(heroImgIndex + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [heroImgIndex]);

  return (
    <section className="hero">
      <div className="container">
        <motion.div
          variants={parent}
          initial="hidden"
          animate="show"
          className="wrapper"
        >
          <div className="hero-info">
            <div className="punch-text">
              <h1>
                <motion.span
                  variants={fadeUp}
                  className={heroImgIndex === 0 ? "gradient-text-1" : ""}
                >
                  Design.
                </motion.span>{" "}
                <motion.span
                  variants={fadeUp}
                  className={heroImgIndex === 1 ? "gradient-text-2" : ""}
                >
                  Develop.
                </motion.span>{" "}
                <motion.span
                  variants={fadeUp}
                  className={heroImgIndex === 2 ? "gradient-text-3" : ""}
                >
                  Deploy.
                </motion.span>
              </h1>
            </div>
            <div className="information">
              <motion.span variants={fadeUp}>
                I create full-stack applications with design and performance in
                mind.
              </motion.span>
            </div>
            <div className="buttons">
              <Link href="https://github.com/charliecatxph">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  variants={fadeUp}
                  className="github-btn"
                >
                  <svg
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 0C5.8175 0 0 5.73524 0 12.8162C0 18.4873 3.72125 23.2774 8.88875 24.9755C9.53875 25.0877 9.7825 24.7032 9.7825 24.3667C9.7825 24.0624 9.76625 23.0531 9.76625 21.9797C6.5 22.5725 5.655 21.1947 5.395 20.4738C5.24875 20.1054 4.615 18.9679 4.0625 18.6636C3.6075 18.4232 2.9575 17.8305 4.04625 17.8145C5.07 17.7985 5.80125 18.7437 6.045 19.1281C7.215 21.0666 9.08375 20.5219 9.83125 20.1855C9.945 19.3524 10.2862 18.7917 10.66 18.4713C7.7675 18.1509 4.745 17.0455 4.745 12.1433C4.745 10.7496 5.24875 9.59611 6.0775 8.69898C5.9475 8.37857 5.4925 7.06492 6.2075 5.30269C6.2075 5.30269 7.29625 4.96627 9.7825 6.61635C10.8225 6.32799 11.9275 6.1838 13.0325 6.1838C14.1375 6.1838 15.2425 6.32799 16.2825 6.61635C18.7688 4.95025 19.8575 5.30269 19.8575 5.30269C20.5725 7.06492 20.1175 8.37857 19.9875 8.69898C20.8163 9.59611 21.32 10.7335 21.32 12.1433C21.32 17.0615 18.2813 18.1509 15.3888 18.4713C15.86 18.8718 16.2663 19.6408 16.2663 20.8423C16.2663 22.5565 16.25 23.9342 16.25 24.3667C16.25 24.7032 16.4938 25.1037 17.1438 24.9755C19.7246 24.1168 21.9673 22.4817 23.556 20.3004C25.1448 18.1191 25.9995 15.5015 26 12.8162C26 5.73524 20.1825 0 13 0Z"
                      fill="#10101A"
                    />
                  </svg>
                  GitHub
                </motion.button>
              </Link>
              <Link href="https://linkedin.com/in/charliecatxph/">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  variants={fadeUp}
                  className="linkedin-btn"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 2.838C1 2.35053 1.19365 1.88303 1.53834 1.53834C1.88303 1.19365 2.35053 1 2.838 1H21.16C21.4016 0.999608 21.6409 1.04687 21.8641 1.13907C22.0874 1.23127 22.2903 1.36661 22.4612 1.53734C22.6322 1.70807 22.7677 1.91083 22.8602 2.13401C22.9526 2.3572 23.0001 2.59643 23 2.838V21.16C23.0003 21.4016 22.9529 21.6409 22.8606 21.8642C22.7683 22.0875 22.6328 22.2904 22.462 22.4613C22.2912 22.6322 22.0884 22.7678 21.8651 22.8602C21.6419 22.9526 21.4026 23.0001 21.161 23H2.838C2.59655 23 2.35746 22.9524 2.1344 22.86C1.91134 22.7676 1.70867 22.6321 1.53798 22.4613C1.3673 22.2905 1.23193 22.0878 1.13962 21.8647C1.04731 21.6416 0.999869 21.4025 1 21.161V2.838ZM9.708 9.388H12.687V10.884C13.117 10.024 14.217 9.25 15.87 9.25C19.039 9.25 19.79 10.963 19.79 14.106V19.928H16.583V14.822C16.583 13.032 16.153 12.022 15.061 12.022C13.546 12.022 12.916 13.111 12.916 14.822V19.928H9.708V9.388ZM4.208 19.791H7.416V9.25H4.208V19.79V19.791ZM7.875 5.812C7.88105 6.08667 7.83217 6.35979 7.73124 6.61532C7.63031 6.87084 7.47935 7.10364 7.28723 7.30003C7.09511 7.49643 6.8657 7.65248 6.61246 7.75901C6.35921 7.86554 6.08724 7.92042 5.8125 7.92042C5.53776 7.92042 5.26579 7.86554 5.01255 7.75901C4.7593 7.65248 4.52989 7.49643 4.33777 7.30003C4.14565 7.10364 3.99469 6.87084 3.89376 6.61532C3.79283 6.35979 3.74395 6.08667 3.75 5.812C3.76187 5.27286 3.98439 4.75979 4.36989 4.38269C4.75539 4.00558 5.27322 3.79442 5.8125 3.79442C6.35178 3.79442 6.86961 4.00558 7.25512 4.38269C7.64062 4.75979 7.86313 5.27286 7.875 5.812V5.812Z"
                      fill="#FAFAFA"
                    />
                  </svg>
                  LinkedIn
                </motion.button>
              </Link>
            </div>
            <motion.div variants={fade} className="scroll-down">
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
            </motion.div>
          </div>
          <motion.div variants={fade} className="hero-img">
            <AnimatePresence mode="wait">
              {heroImgIndex === 0 ? (
                <motion.figure
                  variants={fade2}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  key="hero-images1"
                  className="hero-img-main"
                >
                  <Image src={PalleteImg} alt="A color pallete" />
                </motion.figure>
              ) : heroImgIndex === 1 ? (
                <motion.figure
                  variants={fade2}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  key="hero-images2"
                  className="hero-img-main"
                >
                  <Image src={CompImg} alt="A computer" />
                </motion.figure>
              ) : heroImgIndex === 2 ? (
                <motion.figure
                  variants={fade2}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  key="hero-images3"
                  className="hero-img-main"
                >
                  <Image src={RocketImg} alt="A rocket" />
                </motion.figure>
              ) : (
                ""
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
