import React from "react";
import "./experience.style.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Skill Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                <h4>SASS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                <h4>TAILWIND</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience-framework">
          <h3>Skill Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                <h4>REACT JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                <h4>NEXT JS</h4>
                <small className="text-light">Pre-Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                <h4>TYPESCRIPT</h4>
                <small className="text-light">Intermediate</small>
              </div>  
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                <h4>NODE JS</h4>
                <small className="text-light">Elementary</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
