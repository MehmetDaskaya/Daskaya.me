import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="content">
      <section className="introduction">
        <section className="profile-picture">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQE8UQrPjBFK5w/profile-displayphoto-shrink_400_400/0/1631719240518?e=1713398400&v=beta&t=8vWvalv9cyM4ihsmAQGT7rjs53VZRgRvL-pCbNObeCg"
            alt="Mehmet Daskaya"
          />
        </section>
        <p>
          Mehmet Daskaya, born in Burdur/Turkey and currently 22 years old.
          <br />
          <br />
          Creating projects using React.Js, Next.js and React Native
          <br />
          <br />
          Currently working part-time as a Front-end Developer at GTECH
        </p>
      </section>
      <div className="text-boxes">
        <section className="text">
          <h2>Working Experience</h2>
          <ul>
            <li>
              GTECH
              <span className="description">
                <span className="emoji">💻</span> Front-end Developer
              </span>
              <span className="description">November 2023 - Current</span>
            </li>
            <li>
              Krembi
              <span className="description">
                <span className="emoji">📱</span> React Native Intern
              </span>
              <span className="description">July 2022 - October 2023</span>
            </li>
            <li>
              Meal4U (Denmark)
              <span className="description">
                <span className="emoji">📱</span> Jr. React Native Developer
              </span>
              <span className="description">March 2023 - May 2023</span>
            </li>
          </ul>
        </section>
        <section className="text">
          <h2>Education</h2>
          <ul>
            <li>
              Bahcesehir University
              <span className="description">
                <span className="emoji">🧑🏻‍🏫</span> Computer Education and
                Instructional Technologies
              </span>
              <span className="description">2020 - Current</span>
            </li>
            <li>
              Roskilde University (Erasmus Exchange)
              <span className="description">
                <span className="emoji">💻</span> Computer Science
              </span>
              <span className="description">March 2023 - July 2023</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
