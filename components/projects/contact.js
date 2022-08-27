import Image from "next/image";

import peace from "../../assets/hand-peace.png";

// router
import Link from "next/link";

export default function Contact() {
  return (
    <section className="contacts" id="contact">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1>contact</h1>
          </div>
          <div className="contact-text-headline">
            <h1>
              Wanna talk about something?{" "}
              <span className="connect">Let’s connect!</span>
            </h1>
          </div>
          <div className="socials">
            <Link href="https://github.com/charliecatxph">
              <h4>👾 GitHub</h4>
            </Link>
            <Link href="https://instagram.com/charliecatxph">
              <h4>📷 Instagram</h4>
            </Link>
            <Link href="https://twitter.com/charliecatxph">
              <h4>🐦 Twitter</h4>
            </Link>
            <Link href="https://linkedin.com/in/charliecatxph/">
              <h4>💼 LinkedIn</h4>
            </Link>
          </div>
        </div>
      </div>

      <div className="peace-sign">
        <Image src={peace} alt="Peace sign image" />
      </div>
      <footer>
        <div className="container">
          <div className="wrapper">
            <h6>© 2022 Charl Concepcion. All Rights Reserved.</h6>
          </div>
        </div>
      </footer>
    </section>
  );
}
