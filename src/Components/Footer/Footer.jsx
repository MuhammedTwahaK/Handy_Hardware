import React from "react";
import Twitter from "../Images/twitter.png";
// import FooterEnd from "./FooterEnd";

const Footer = () => {
  return (
    <div>
      <div className="IMageAndFooterText">
        <img
          className="FooterImg"
          src="https://as2.ftcdn.net/v2/jpg/03/00/98/07/1000_F_300980743_5YrcmC0fWo7Ts2I2Sh2YjvybCcPAp0ak.jpg"
          alt=""
        />
      </div>

      <div className="ForTotalFotterFlex">
        <div className="FooterTextAb">
          <div className="FirsttileofFooter">
            <span className="PhotoText">Photo </span>
            <span className="GalleryText">Gallery</span>
          </div>

          <div className="ThreeImgAlign">
            <div className="FirstImgBrd">
              <img
                className="FirstFooterIMg"
                src="https://img.freepik.com/free-photo/low-angle-shot-modern-building-interior-with-white-walls-touching-sky_181624-6738.jpg?w=740&t=st=1689757282~exp=1689757882~hmac=d8a1ac283875016d02a2267c52d84e9d06f94b6fc8772e90131deab4f9c3853e"
                alt=""
              />
            </div>
            <div className="FirstImgBrd">
              <img
                className="FirstFooterIMg"
                src="https://img.freepik.com/free-photo/artist-using-pink-paint-from-can_23-2148591282.jpg?t=st=1689749993~exp=1689750593~hmac=b8d6772594f8b430db004555361b14223930cec9f936a2fdb87dda22ce2c2285"
                alt=""
              />
            </div>
            <div className="FirstImgBrd">
              <img
                className="FirstFooterIMg"
                src="https://img.freepik.com/free-photo/tools-table_144627-8722.jpg?w=740&t=st=1689757492~exp=1689758092~hmac=254a8dcce00c7afdb9f0b141e5a3be533f8c8909aa66d954db695389f7f3007e"
                alt=""
              />
            </div>
          </div>
          <div className="ALignmentofDivView">
            <div className="ViewMoreDiv">
              <span className="ViewMore">View More</span>
            </div>
          </div>
        </div>

        <div className="Socialmedia">
          <div className="FbTWIn">
            <span className="Sovial">Social</span>
            <span className="Meiai">Media</span>
          </div>

          <div className="sociamediaFacbook">
            <div className="facebook">
              <img
                className="Facebookicon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                alt=""
              />
              <span className="FOntOfsocialmedia">Handy Hardware</span>
            </div>

            <div className="facebook">
              <img
                className="Facebookicon"
                src="https://freelogopng.com/images/all_img/1658587303instagram-png.png"
                alt=""
              />
              <span className="FOntOfsocialmedia">handy_hardware</span>
            </div>

            <div className="facebook">
              <img className="Facebookicon" src={Twitter} alt="" />
              <span className="FOntOfsocialmedia">Handy-Hardware</span>
            </div>
          </div>
        </div>

        <div className="AdressFooter">
          <div className="Adre">
            <span className="HANdy">Handy</span>
            <span className="HARware">Hardware Stores</span>
          </div>

          <div className="DEtailsdiv">
            <span className="TextT">B.NO 84</span>
            <span className="TextT">ROAD KONDOTTY</span>
            <span className="TextT">MALAPPURAM,KERALA - 673633</span>
            <span className="TextT">PH. NO. 95442 34425</span>
            <span className="TextT">muhammedtwaha7090@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
