// framer motion
import { motion } from "framer-motion";

const parent = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5,
    },
  },
};

const scale = {
  hidden: {
    opacity: 0,
    scaleX: 0.8,
  },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.5,
      ease: [0.13, 0.7, 0.13, 1],
    },
  },
};

const skills = {
  programming: [
    "HTML",
    "CSS",
    "Javascript (ES6+)",
    "TypeScript",
    "TypeScript React",
    "VB.NET",
    "C",
    "C++",
    "C#",
    "Bash",
    "Java",
    "SCRATCH (Robotics)",
    "SCRATCH (Vanilla)",
  ],
  "libraries and frameworks": [
    "Bootstrap",
    "Tailwind CSS",
    "jQuery",
    "SASS",
    "React",
    "Redux",
    "D3.js",
    "Node.js",
    "Express.js",
    "Electron.js",
    "Helmet.js",
    "Passport.js",
    "Next.js",
    "Discord.js",
    "MongoDB",
    "Mongoose",
    "Chai",
    "GSAP",
    "Framer Motion",
  ],
  "tools and design": [
    "Git",
    "GitHub",
    "Webpack",
    "Netlify",
    "Heroku",
    "Filmora X",
    "blender",
    "Alight Motion",
    "FLStudio",
    "Adobe Photoshop",
    "Adobe Animate",
    "Canva",
    "Figma",
    "JustInMind",
    "Adobe XD",
  ],
};

export default function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1>skills</h1>
          </div>
          <div className="skill-wrap">
            {Object.keys(skills).map((data, index) => {
              return (
                <motion.div
                  variants={parent}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: "all" }}
                  className="skill-card"
                  key={index}
                >
                  <div className="skills-main">
                    {skills[data].map((sk, i) => {
                      return (
                        <motion.span variants={scale} className="skill" key={i}>
                          {sk}
                        </motion.span>
                      );
                    })}
                  </div>
                  <div className="skill-title">
                    <span>{data}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
