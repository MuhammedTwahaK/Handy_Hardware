import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Images/Abnner.jpg";
import App from "../Components/Images/APP.png";

const Quotes = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="Drandtitlediv">
        <span className="BrandTitle">SHOP THE BRANDS</span>
      </div>
      <div className="AllBRAndITEms">
        <div className="Brands">
          <div className="IconONe">
            <img
              className="Goderaj"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/2560px-Godrej_Logo.svg.png"
              alt=""
            />
          </div>

          <div className="IconONe">
            <img
              className="Goderaj"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Havells_Logo.svg/2560px-Havells_Logo.svg.png"
              alt=""
            />
          </div>

          <div className="IconONe">
            <img
              className="Goderaj"
              src="https://logos-world.net/wp-content/uploads/2020/09/Philips-Logo-2013-present.jpg"
              alt=""
            />
          </div>

          <div className="IconONe">
            <img
              className="Goderaj"
              src="https://seeklogo.com/images/F/fevicol-logo-7BC591EE18-seeklogo.com.png"
              alt=""
            />
          </div>

          <div className="IconONe">
            <img
              className="Goderaj"
              src="https://companieslogo.com/img/orig/FINPIPE.NS_BIG-62b376df.png?t=1604067034"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="BAnner">
        <img className="bannerIMg" src={Banner} alt="" />
        <div>
          <img className="AppThree" src={App} alt="" />
        </div>
      </div>

      <div className="QuoteheadDiv">
        <span className="Quotehead">QUOTES</span>
      </div>

      <Carousel responsive={responsive}>
        <div>
          <div className="QuoteBackG">
            <span className="TextAlign">
              Software comes from heaven when you have good hardware.
            </span>
          </div>
          <div className="AuthorDIvBg">
            <span className="Author">Ken Olsen</span>
          </div>
        </div>
        <div>
          <div className="QuoteBackG">
            <span className="TextAlign">
              Hardware works best when it matters the least.
            </span>
          </div>
          <div className="AuthorDIvBg">
            <span className="Author">Norman Ralph Augustine</span>
          </div>
        </div>

        <div>
          <div className="QuoteBackG">
            <span className="TextAlign">
              People who are really serious about software should make their own
              hardware.
            </span>
          </div>
          <div className="AuthorDIvBg">
            <span className="Author">Alan Kay</span>
          </div>
        </div>

        <div>
          <div className="QuoteBackG">
            <span className="TextAlign">
              Rank does not intimidate hardware. Neither does the lack of rank.
            </span>
          </div>
          <div className="AuthorDIvBg">
            <span className="Author">Norman Ralph Augustine</span>
          </div>
        </div>

        <div>
          <div className="QuoteBackG">
            <span className="TextAlign">
              The fellow that owns his own home is always just coming out of a
              hardware store.
            </span>
          </div>
          <div className="AuthorDIvBg">
            <span className="Author">Kin Hubbard</span>
          </div>
        </div>
      </Carousel>
      <Footer />
    </div>
  );
};

export default Quotes;
