import "./Footer.css";
import "./Footer.responsive.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="contact" id="contact">
          {/* <!-- maps google embed --> */}
          <div className="locate-map-google">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.58568553664037!2d74.34310544282201!3d31.5139696757012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904596d226695%3A0xf5fb6d9420427d18!2sAl%20Hafeez%20Shopping%20Mall!5e0!3m2!1sen!2s!4v1709289457344!5m2!1sen!2s"></iframe>
          </div>
          {/* <!-- contact  --> */}
          <div className="container">
            <div className="contact-form-heading">
              <p>CERAMIC-STUDIO</p>
            </div>
            <div className="contact-form-wrap">
              <div className="contact-form-col1">
                <div className="contact-location-text-box">
                  <p>
                    A: 500 Terry Francine St.
                    <br /> San Francisco, CA 94158
                  </p>
                  <p>T: 123-456-7890</p>
                  <p>E: info@my-domain.com</p>
                </div>
                <div className="contact-time-opening-box">
                  <p>MON - FRI: 7am - 10pm</p>
                  <p>SATURDAY: 8am - 10pm</p>
                  <p>SUNDAY: 8am - 11pm</p>
                </div>
                <div className="contact-faq-box">
                  <p>
                    <a href="#">FAQ /</a>
                    <a href="#">shipping returns /</a>
                  </p>
                  <p>
                    <a href="#">store policy /</a>
                  </p>
                  <p>
                    <a href="#">payment methods</a>
                  </p>
                </div>
              </div>

              <div className="contact-form-col2">
                <form action="index.html">
                  <div className="contact-form">
                    <input
                      className="contactForm-nameInput"
                      type="text"
                      name="name"
                      placeholder="name"
                      required
                    />
                    <input
                      className="contactForm-emailInput"
                      type="email"
                      name="email"
                      placeholder="email"
                      required
                    />
                    <input
                      className="contactForm-subjectInput"
                      type="text"
                      name="subject"
                      placeholder="subject"
                    />
                    <textarea
                      className="contactForm-messageInput"
                      name="message"
                      placeholder="message"
                      required
                    ></textarea>
                    <button className="contactForm-sendButton">send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- stamp --> */}
          <div className="stamp_footer_c">
            <p>
              © <span>2024</span> by Ceramic-Studio. Powered and secured by
              <span>Tx</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
