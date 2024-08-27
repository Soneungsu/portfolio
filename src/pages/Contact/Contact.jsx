import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const userTool = ["JIRA", "FIGMA", "GIT", "GITHUB", "SLACK"];
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
                    alt="프로밀사진"
                    width="400px"
                    height="400px"
                    style={{ borderRadius: "50%" }}
                  />
                </section>
                <section className="info-description">
                  <section className="info-description-wrapper">
                    <section className="usedtool-wrapper">
                      <h1 className="used-tool">USED TOOL</h1>
                      <div className="tool-list">
                        {userTool.map((item, index) => {
                          return <p key={index}>{item}</p>;
                        })}
                      </div>
                    </section>
                    <section className="career-wrapper">
                      <h1 className="career">CAREER</h1>
                      <div className="career-list">
                        <p>{`DKtechin a kakao company(DKT)`} </p>
                        <p>Localley PM</p>
                        <p>프로비트 거래소 운영 및 기획</p>
                      </div>
                    </section>
                    <section className="info-wrapper">
                      <h1>CONTACT</h1>
                      <a href="mailto:eungsu1217@gmail.com">
                        📧:eungsu1217@gmail.com
                      </a>
                      <a href="tel:010-5839-9312">📞:010-5839-9312</a>
                    </section>
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
