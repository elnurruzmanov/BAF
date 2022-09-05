import React from "react";
import "./main.css";
//react-router-dom
import { Link } from "react-router-dom";

//import images
import Image from "../../images/image.png";
import Mute from "../../images/mute.png";
import Header from "../../images/1.png";
import Downloads from "../../images/download.png";
import Video from "../../images/Video.png";

const Main = () => {
  return (
    <>
      <main className="main">
        <div className="container">
          <nav className="navbar">
            <div className="img">
              <img src={Image} alt="" />
            </div>
            <ul className="nav-list">
              <li className="nav_item">
                <Link className="nav-link" to="/">
                  Продукты
                </Link>
              </li>
              <li className="nav_item">
                <Link className="nav-link" to="/">
                  О нас
                </Link>
              </li>
              <li className="nav_item">
                <Link className="nav-link" to="/">
                  Наши фабрики
                </Link>
              </li>
              <li className="nav_item">
                <Link className="nav-link" to="/">
                  Связь
                </Link>
              </li>
            </ul>
            <div className="volume">
              <img src={Mute} alt="" className="mute" />
              <input
                type="range"
                className="nav-range"
                name="range"
                orient="vertical"
              />
            </div>
          </nav>
          <div className="header">
            <div className="header-info">
              <h1 className="header-title">Произ -водство тканей –</h1>
              <h3 className="header-text">
                востребованное направление бизнеса
              </h3>
              <div className="">
                <button className="download-btn">
                  <img src={Downloads} alt="" className="downloads" />
                  <p className="download-text">Скачать каталог</p>
                </button>
                <button className="download-btn">
                  <img src={Video} alt="" className="downloads" />
                  <p className="download-text">Скачать каталог</p>
                </button>
              </div>
            </div>
            <div className="header-image"></div>
            <ul className="languages-list">
              <li className="languages-item">
                <Link className="header-link" to="/">
                  Eng
                </Link>
              </li>
            </ul>
          </div>
          <img src={Header} alt="" className="header-img" />
        </div>
      </main>
    </>
  );
};

export default Main;
