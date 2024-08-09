import React from "react";
import profile from "../../../public/public_assets/images/profile.jpeg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="contact-container">
        <div className="contact-wrapper">
          <div>
            <h2 className="contact">CONTACT</h2>
          </div>
          <div>
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
                  <p>이거여</p>
                  <p>이거여</p>
                </section>
              </div>
            </div>
            <section className="info-wrapper">
              <a href="mailto:eungsu1217@gmail.com">📧:eungsu1217@gmail.com</a>
              <a href="tel:010-5839-9312">📞:010-5839-9312</a>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
