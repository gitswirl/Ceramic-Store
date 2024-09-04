// Component
import "./About.css";
import "./About.responsive.css";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      {/* About section  */}
      <div className="about">
        <div className="container">
          <div className="about-content">
            <h1>OUR STORY & PHILOSOPHY</h1>
            <p className="about-para-01">
              {"I'm"} a paragraph. Click here to add your own text and edit me.
              It’s easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font. Feel free to drag and
              drop me anywhere you like on your page. I’m a great place for you
              to tell a story and let your users know a little more about you.
            </p>
            <p className="about-para-02">
              This is a great space to write long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
            <div className="about-img-bx"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
