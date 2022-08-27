import Image from "next/image";
import P1 from "../assets/STS-Mockup.png";
import P2 from "../assets/DNA-Mockup.png";
import P3 from "../assets/Pomodoro-Mockup.png";
import P4 from "../assets/TBCH-Mockup.png";
import P5 from "../assets/Whisper-Mockup.png";

// framer motion
import { motion } from "framer-motion";

// router
import Link from "next/link";

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

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1>projects</h1>
          </div>
          <div className="projects">
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              viewport={{ once: true, margin: "-100px" }}
              className="project"
            >
              <div className="project-image">
                <Image src={P1} alt="Steven The Seagull image" />
              </div>
              <div className="project-info">
                <div className="project-title">
                  <h3>Steven The Seagull</h3>
                </div>
                <div className="project-information">
                  <span>
                    A Discord music-bot utilizing Discord.js and Distube.
                  </span>
                </div>
                <div className="project-technologies">
                  <div className="tech">Node.js</div>
                  <div className="tech">Discord.js</div>
                  <div className="tech">Distube Framework</div>
                  <div className="tech">FFMPEG</div>
                </div>
                <div className="project-buttons">
                  <Link href="https://discord.com/api/oauth2/authorize?client_id=942415674398113852&permissions=8&scope=bot">
                    <motion.button whileTap={{ scale: 0.9 }} className="cta">
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2381 1.11971C14.0906 0.602213 12.8606 0.219713 11.5744 0.00221262C11.5629 1.35614e-05 11.551 0.00143072 11.5404 0.00626812C11.5298 0.0111055 11.521 0.0191239 11.5151 0.0292126C11.3576 0.305963 11.1821 0.666713 11.0591 0.951713C9.69493 0.74789 8.30804 0.74789 6.94386 0.951713C6.80686 0.635858 6.65237 0.327881 6.48111 0.0292126C6.47531 0.0189997 6.46652 0.0107999 6.45594 0.00570772C6.44535 0.000615499 6.43346 -0.00112711 6.42186 0.000712555C5.13636 0.218213 3.90636 0.600713 2.75811 1.11896C2.74823 1.12311 2.73986 1.13017 2.73411 1.13921C0.40011 4.57046 -0.23964 7.91696 0.0746105 11.2215C0.0754849 11.2296 0.0779971 11.2374 0.0819942 11.2445C0.0859912 11.2516 0.0913895 11.2578 0.0978605 11.2627C1.46015 12.2545 2.97961 13.0101 4.59261 13.4977C4.60385 13.5012 4.61588 13.5012 4.62712 13.4977C4.63836 13.4942 4.64829 13.4874 4.65561 13.4782C5.00271 13.014 5.31028 12.5215 5.57511 12.006C5.57879 11.9989 5.5809 11.9912 5.58132 11.9832C5.58174 11.9753 5.58045 11.9673 5.57753 11.9599C5.57462 11.9526 5.57015 11.9459 5.56442 11.9403C5.5587 11.9348 5.55186 11.9306 5.54436 11.928C5.05986 11.7455 4.59042 11.5253 4.14036 11.2695C4.13227 11.2648 4.12546 11.2583 4.12053 11.2504C4.1156 11.2425 4.11271 11.2335 4.11211 11.2242C4.11152 11.2149 4.11324 11.2056 4.11712 11.1972C4.121 11.1887 4.12693 11.1813 4.13436 11.1757C4.22886 11.106 4.32336 11.0332 4.41336 10.9605C4.42146 10.9539 4.43122 10.9498 4.44155 10.9484C4.45188 10.9471 4.46237 10.9487 4.47186 10.953C7.41711 12.276 10.6069 12.276 13.5176 10.953C13.5271 10.9484 13.5377 10.9466 13.5482 10.9478C13.5587 10.949 13.5686 10.9531 13.5769 10.9597C13.6669 11.0332 13.7606 11.106 13.8559 11.1757C13.8634 11.1812 13.8694 11.1885 13.8734 11.1969C13.8774 11.2053 13.8793 11.2145 13.8788 11.2238C13.8784 11.2331 13.8756 11.2421 13.8708 11.2501C13.866 11.2581 13.8594 11.2647 13.8514 11.2695C13.4029 11.5275 12.9364 11.7457 12.4466 11.9272C12.4391 11.9299 12.4322 11.9342 12.4265 11.9398C12.4208 11.9454 12.4163 11.9522 12.4134 11.9596C12.4105 11.9671 12.4092 11.9751 12.4096 11.9831C12.4101 11.991 12.4122 11.9989 12.4159 12.006C12.6859 12.5212 12.9949 13.0117 13.3346 13.4775C13.3417 13.487 13.3515 13.4942 13.3628 13.4979C13.3741 13.5017 13.3862 13.5019 13.3976 13.4985C15.0134 13.0122 16.5353 12.2563 17.8991 11.2627C17.9058 11.2581 17.9113 11.252 17.9155 11.2451C17.9196 11.2381 17.9222 11.2303 17.9231 11.2222C18.2981 7.40171 17.2946 4.08221 15.2614 1.14071C15.2564 1.13115 15.2481 1.1237 15.2381 1.11971ZM6.01536 9.20921C5.12886 9.20921 4.39761 8.40746 4.39761 7.42421C4.39761 6.44021 5.11461 5.63921 6.01536 5.63921C6.92286 5.63921 7.64736 6.44696 7.63311 7.42421C7.63311 8.40821 6.91611 9.20921 6.01536 9.20921V9.20921ZM11.9966 9.20921C11.1094 9.20921 10.3789 8.40746 10.3789 7.42421C10.3789 6.44021 11.0951 5.63921 11.9966 5.63921C12.9041 5.63921 13.6286 6.44696 13.6144 7.42421C13.6144 8.40821 12.9049 9.20921 11.9966 9.20921V9.20921Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                      Add to server
                    </motion.button>
                  </Link>
                  <Link href="/projects/steven-the-seagull">
                    <motion.button whileTap={{ scale: 0.9 }}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 4.5L4.5 13.5M6 4.5H13.5V12"
                          stroke="#FAFAFA"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      More Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              viewport={{ once: true, margin: "-100px" }}
              className="project reverse"
            >
              <div className="project-image">
                <Image src={P2} alt="DNA Sequence Converter image" />
              </div>
              <div className="project-info">
                <div className="project-title">
                  <h3>DNA Sequence Converter</h3>
                </div>
                <div className="project-information">
                  <span>
                    A DNA Sequence Converter coded in Vanilla JS and HTML.
                  </span>
                </div>
                <div className="project-technologies">
                  <div className="tech">HTML5</div>
                  <div className="tech">CSS3</div>
                  <div className="tech">JS (Vanilla)</div>
                  <div className="tech">Express.js</div>
                </div>
                <div className="project-buttons">
                  <Link href="https://dna-ctx.vercel.app/">
                    <motion.button whileTap={{ scale: 0.9 }} className="cta">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM4 12C4 11.101 4.156 10.238 4.431 9.431L6 11L8 13V15L10 17L11 18V19.931C7.061 19.436 4 16.072 4 12ZM18.33 16.873C17.677 16.347 16.687 16 16 16V15C16 14.4696 15.7893 13.9609 15.4142 13.5858C15.0391 13.2107 14.5304 13 14 13H10V10C10.5304 10 11.0391 9.78929 11.4142 9.41421C11.7893 9.03914 12 8.53043 12 8V7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5V4.589C17.928 5.778 20 8.65 20 12C19.9998 13.7647 19.4123 15.4791 18.33 16.873V16.873Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                      Visit Site
                    </motion.button>
                  </Link>
                  <Link href="/projects/dna-sequence-converter">
                    <motion.button whileTap={{ scale: 0.9 }}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 4.5L4.5 13.5M6 4.5H13.5V12"
                          stroke="#FAFAFA"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      More Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              viewport={{ once: true, margin: "-100px" }}
              className="project"
            >
              <div className="project-image">
                <Image src={P3} alt="Pomodoro Cloco image" />
              </div>
              <div className="project-info">
                <div className="project-title">
                  <h3>Pomodoro Clock</h3>
                </div>
                <div className="project-information">
                  <span>
                    A pomodoro app, utilizes the pomodoro technique. Coded in
                    React.
                  </span>
                </div>
                <div className="project-technologies">
                  <div className="tech">React</div>
                  <div className="tech">SASS</div>
                  <div className="tech">Express.js</div>
                </div>
                <div className="project-buttons">
                  <Link href="https://pomodoro-ctx.vercel.app/">
                    <motion.button whileTap={{ scale: 0.9 }} className="cta">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM4 12C4 11.101 4.156 10.238 4.431 9.431L6 11L8 13V15L10 17L11 18V19.931C7.061 19.436 4 16.072 4 12ZM18.33 16.873C17.677 16.347 16.687 16 16 16V15C16 14.4696 15.7893 13.9609 15.4142 13.5858C15.0391 13.2107 14.5304 13 14 13H10V10C10.5304 10 11.0391 9.78929 11.4142 9.41421C11.7893 9.03914 12 8.53043 12 8V7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5V4.589C17.928 5.778 20 8.65 20 12C19.9998 13.7647 19.4123 15.4791 18.33 16.873V16.873Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                      Visit Site
                    </motion.button>
                  </Link>
                  <Link href="/projects/pomodoro-clock">
                    <motion.button whileTap={{ scale: 0.9 }}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 4.5L4.5 13.5M6 4.5H13.5V12"
                          stroke="#FAFAFA"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      More Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              viewport={{ once: true, margin: "-100px" }}
              className="project reverse"
            >
              <div className="project-image">
                <Image src={P4} alt="TBCH image" />
              </div>
              <div className="project-info">
                <div className="project-title">
                  <h3>TBCH</h3>
                </div>
                <div className="project-information">
                  <span>
                    A secret messaging app based on the MERN Stack. (Sayout
                    Inspired)
                  </span>
                </div>
                <div className="project-technologies">
                  <div className="tech">MERN Stack</div>
                  <div className="tech">SASS</div>
                  <div className="tech">JWT Secured</div>
                </div>
                <div className="project-buttons">
                  <Link href="https://tbch-official-ctx.vercel.app/">
                    <motion.button whileTap={{ scale: 0.9 }} className="cta">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM4 12C4 11.101 4.156 10.238 4.431 9.431L6 11L8 13V15L10 17L11 18V19.931C7.061 19.436 4 16.072 4 12ZM18.33 16.873C17.677 16.347 16.687 16 16 16V15C16 14.4696 15.7893 13.9609 15.4142 13.5858C15.0391 13.2107 14.5304 13 14 13H10V10C10.5304 10 11.0391 9.78929 11.4142 9.41421C11.7893 9.03914 12 8.53043 12 8V7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5V4.589C17.928 5.778 20 8.65 20 12C19.9998 13.7647 19.4123 15.4791 18.33 16.873V16.873Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                      Visit Site
                    </motion.button>
                  </Link>
                  <Link href="/projects/tbch">
                    <motion.button whileTap={{ scale: 0.9 }}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 4.5L4.5 13.5M6 4.5H13.5V12"
                          stroke="#FAFAFA"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      More Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              viewport={{ once: true, margin: "-100px" }}
              className="project"
            >
              <div className="project-image">
                <Image src={P5} alt="Whisper image" />
              </div>
              <div className="project-info">
                <div className="project-title">
                  <h3>Whisper</h3>
                </div>
                <div className="project-information">
                  <span>
                    A realtime chat-app based on the MERN stack. Secured with
                    JWT and saves messages.
                  </span>
                </div>
                <div className="project-technologies">
                  <div className="tech">MERN Stack</div>
                  <div className="tech">SASS</div>
                  <div className="tech">JWT Secured</div>
                  <div className="tech">WebSocket.IO</div>
                </div>
                <div className="project-buttons">
                  <Link href="https://whisper-ctx.herokuapp.com/">
                    <motion.button whileTap={{ scale: 0.9 }} className="cta">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM4 12C4 11.101 4.156 10.238 4.431 9.431L6 11L8 13V15L10 17L11 18V19.931C7.061 19.436 4 16.072 4 12ZM18.33 16.873C17.677 16.347 16.687 16 16 16V15C16 14.4696 15.7893 13.9609 15.4142 13.5858C15.0391 13.2107 14.5304 13 14 13H10V10C10.5304 10 11.0391 9.78929 11.4142 9.41421C11.7893 9.03914 12 8.53043 12 8V7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5V4.589C17.928 5.778 20 8.65 20 12C19.9998 13.7647 19.4123 15.4791 18.33 16.873V16.873Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                      Visit Site
                    </motion.button>
                  </Link>
                  <Link href="/projects/whisper">
                    <motion.button whileTap={{ scale: 0.9 }}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 4.5L4.5 13.5M6 4.5H13.5V12"
                          stroke="#FAFAFA"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      More Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
