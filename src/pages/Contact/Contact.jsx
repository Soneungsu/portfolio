import React, { useState } from "react";
import profile from "../../../public/public_assets/images/profile.jpeg";
import { Link } from "react-router-dom";

const Contact = () => {
  const [career, setCareer] = useState([
    "DK TechIn",
    "Localley PM",
    "프로비트 거래소 기획 및 운영",
  ]);
  const [usedTool, setUsedTool] = useState([
    "JIRA",
    "NOTION",
    "FIGMA",
    "SLACK",
    "GITHUB",
  ]);
  return (
    <>
      <section className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-title">
            <h2 className="contact">CONTACT</h2>
          </div>
          <div className="profile-main">
            <div className="profile-container">
              <div className="profile-wrapper">
                <section>
                  <img
                    src="/public_assets/images/profile.jpeg"
                    alt=""
                    width="500px"
                    height="500px"
                    style={{ borderRadius: "50%" }}
                  />
                </section>
                <section className="info-description">
                  <section className="usedtool-wrapper">
                    <h1 className="used-tool">USED TOOL</h1>
                    <div className="tool-list">
                      {usedTool.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    </div>
                  </section>
                  <section className="career-wrapper">
                    <h1 className="career">CAREER</h1>
                    <div className="career-list">
                      {career.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    </div>
                  </section>
                  <section className="info-wrapper">
                    <a href="mailto:eungsu1217@gmail.com">
                      📧:eungsu1217@gmail.com
                    </a>
                    <a href="tel:010-5839-9312">📞:010-5839-9312</a>
                  </section>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
