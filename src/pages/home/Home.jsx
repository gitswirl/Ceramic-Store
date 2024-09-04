// Component
import "./Home.css";
import "./Home.responsive.css";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SomeProducts from "../../components/someProduct/SomeProducts";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero section */}
      <div className="hero" id="HeroSect">
        <div className="dull-overlay">
          <div className="container">
            <div className="hero-content">
              <p>CERAMIC STUDIO</p>
              <p>Artisan Pottery</p>
              <a href="/Store" className="shopBtn">
                shop now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Collection section */}
      <div className="our-collection" data-aos="fade-in">
        <div className="container">
          <div className="our-collection-content">
            <h1>OUR COLLECTION</h1>
            <p>
              {"I'm"} a paragraph. Click here to add your own text and edit me.
              It’s easy. Just click “Edit Text” or double click me to add your
              own content and make changes to the font. I’m a great place for
              you to tell a story and let your users know a little more about
              you.
            </p>
          </div>
        </div>
      </div>

      <SomeProducts />
      <Footer />
    </>
  );
};

export default Home;
