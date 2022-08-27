import imageStyles from "../../../styles/projects_modules/ProjectImage.module.css";
import StevenPic from "../../../assets/projects/steven-the-seagull.jpg";

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
            src={StevenPic}
            className={imageStyles.image}
            layout="fill"
            objectFit="cover"
            alt="Steven The Seagull image"
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
              <motion.h1 variants={fadeUp}>Steven The Seagull</motion.h1>
            </div>
            <div className="information">
              <motion.span variants={fadeUp}>
                Got way too invested in watching Steven in TikTok, I wanted him
                to be with me all the time so I made him, but as a discord
                music-bot. Lol!
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
                  <span>Node.js</span>
                  <span>Discord.js</span>
                  <span>Distube Framework</span>
                </motion.div>
              </div>
              <div className="quick-info">
                <div className="title">
                  <motion.h4 variants={fadeUp}>Developers:</motion.h4>
                </div>
                <motion.div variants={fadeUp} className="row-2">
                  <span>Charl Concepcion (Lead Dev.)</span>
                  <span>_jellix (Bugs)</span>
                </motion.div>
              </div>
            </div>
            <div className="project-buttons">
              <Link href="https://discord.com/api/oauth2/authorize?client_id=942415674398113852&permissions=8&scope=bot">
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
                    <g clipPath="url(#clip0_84_144)">
                      <path
                        d="M20.317 4.49197C18.787 3.80197 17.147 3.29197 15.432 3.00197C15.4167 2.99904 15.4009 3.00093 15.3868 3.00738C15.3726 3.01383 15.3608 3.02452 15.353 3.03797C15.143 3.40697 14.909 3.88797 14.745 4.26797C12.9261 3.99621 11.0769 3.99621 9.25799 4.26797C9.07533 3.84683 8.86934 3.4362 8.64099 3.03797C8.63325 3.02436 8.62154 3.01342 8.60743 3.00663C8.59331 2.99984 8.57746 2.99752 8.56199 2.99997C6.84799 3.28997 5.20799 3.79997 3.67699 4.49097C3.66382 4.4965 3.65265 4.50592 3.64499 4.51797C0.532992 9.09297 -0.320008 13.555 0.0989923 17.961C0.100158 17.9718 0.103508 17.9822 0.108837 17.9917C0.114167 18.0011 0.121364 18.0094 0.129992 18.016C1.94638 19.3384 3.97233 20.3458 6.12299 20.996C6.13798 21.0006 6.15402 21.0006 6.16901 20.9959C6.18399 20.9913 6.19723 20.9823 6.20699 20.97C6.66979 20.351 7.07989 19.6944 7.43299 19.007C7.43789 18.9976 7.44072 18.9872 7.44127 18.9766C7.44183 18.9661 7.44011 18.9555 7.43622 18.9456C7.43233 18.9358 7.42637 18.9268 7.41874 18.9195C7.41111 18.9121 7.40199 18.9065 7.39199 18.903C6.746 18.6597 6.12008 18.3661 5.51999 18.025C5.50921 18.0188 5.50012 18.0101 5.49355 17.9995C5.48698 17.989 5.48312 17.977 5.48233 17.9646C5.48153 17.9522 5.48383 17.9398 5.48901 17.9286C5.49418 17.9173 5.50208 17.9075 5.51199 17.9C5.63799 17.807 5.76399 17.71 5.88399 17.613C5.89479 17.6043 5.9078 17.5987 5.92158 17.5969C5.93535 17.5952 5.94934 17.5973 5.96199 17.603C9.88899 19.367 14.142 19.367 18.023 17.603C18.0357 17.5969 18.0498 17.5946 18.0638 17.5961C18.0778 17.5977 18.091 17.6032 18.102 17.612C18.222 17.71 18.347 17.807 18.474 17.9C18.484 17.9073 18.492 17.917 18.4974 17.9282C18.5027 17.9394 18.5052 17.9517 18.5046 17.9641C18.504 17.9765 18.5004 17.9885 18.494 17.9991C18.4876 18.0098 18.4787 18.0186 18.468 18.025C17.87 18.369 17.248 18.66 16.595 18.902C16.585 18.9056 16.5758 18.9114 16.5682 18.9188C16.5606 18.9263 16.5546 18.9353 16.5507 18.9452C16.5468 18.9551 16.5451 18.9658 16.5457 18.9764C16.5463 18.9871 16.5491 18.9975 16.554 19.007C16.914 19.694 17.326 20.348 17.779 20.969C17.7884 20.9817 17.8015 20.9912 17.8166 20.9963C17.8316 21.0013 17.8478 21.0015 17.863 20.997C20.0173 20.3486 22.0466 19.3407 23.865 18.016C23.8739 18.0098 23.8813 18.0017 23.8868 17.9924C23.8923 17.9831 23.8958 17.9727 23.897 17.962C24.397 12.868 23.059 8.44197 20.348 4.51997C20.3413 4.50723 20.3303 4.49729 20.317 4.49197ZM8.01999 15.278C6.83799 15.278 5.86299 14.209 5.86299 12.898C5.86299 11.586 6.81899 10.518 8.01999 10.518C9.22999 10.518 10.196 11.595 10.177 12.898C10.177 14.21 9.22099 15.278 8.01999 15.278V15.278ZM15.995 15.278C14.812 15.278 13.838 14.209 13.838 12.898C13.838 11.586 14.793 10.518 15.995 10.518C17.205 10.518 18.171 11.595 18.152 12.898C18.152 14.21 17.206 15.278 15.995 15.278V15.278Z"
                        fill="#FAFAFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_84_144">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Add to server
                </motion.button>
              </Link>
              <Link href="https://github.com/charliecatxph/Steven-the-Seagull">
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
