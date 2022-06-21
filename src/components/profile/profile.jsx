import React from "react";
import "./profile.style.css";
import Typical from "react-typical";
import CV from "../../assets/images/jalol.pdf"

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="/facebook.com">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="/google.com">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="/instagram.com">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="/github.com">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="/linkedin.com">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Jaloliddin</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev",
                    2000,
                    "Front-end Dev",
                    2000,
                    "React JS Next JS Dev",
                    2000,
                    "Typescript Dev",
                    2000,
                    "Cross Platform Dev",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front-end and back-end
                operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a href={CV} download>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
