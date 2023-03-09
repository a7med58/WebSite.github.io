import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEarth, faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "../../Component/Banner/Banner";
import FormContact from "../../Component/FormContact/FormContact";
import "./Contact.css";
const { Fragment } = require("react");

const Contact = () => {
  return (
    <>
      <Banner title="Contact" smtitle="contact" />
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <FormContact />
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="side">
                <div className="overlay">
                  <h3>Contact Us For Any Information</h3>
                  <li>
                    <FontAwesomeIcon icon={faMap} /> Location
                  </li>
                  <hr />
                  <p> 2 street Sobhy Haredy ,Omranaia Garbia , Haram</p>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} /> Email & Phone
                  </li>
                  <hr />
                  <p> A7med_58@hotmail.com</p>
                  <p> 01123919198</p>

                  <li>
                    <FontAwesomeIcon icon={faEarth} /> Follow Us
                  </li>
                  <hr />
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faFacebook} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faTwitter} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faInstagram} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faGithub} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
