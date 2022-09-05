import React, {useState} from "react";
import "./main.css";
//react-router-dom
import { Link } from "react-router-dom";

//react-download-link
// import DownloadLink from "react-download-link";
import ReactPlayer from "react-player";

//import images
import Image from "../../images/image.png";
import Mute from "../../images/mute.png";
import Header from "../../images/1.png";
import Downloads from "../../images/download.png";
import Video from "../../images/Video.png";

const Main = () => {
  const downloadTxtFile = () => {
    const texts = ["line 1", "line 2", "line 3"]
    const file = new Blob(texts, {type: 'text/plain'});
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "100ideas-" + Date.now() + ".txt";
    document.body.appendChild(element); 
    element.click();

    
}
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
              <div className="download-catalog">
                <button className="download-btn download-btn2" id="downloadBtn" value="download" onClick={downloadTxtFile} >
               
                  <img src={Downloads} alt="" className="downloads downloads2" />
                   
       
                  <p className="download-text">Скачать каталог</p>
                </button>
                <button className="download-btn">
                  <img src={Video} alt="" className="downloads" />
                  <p className="download-text">Смотреть ролик</p>
                </button>
              </div>
            </div>
            <div className="header-image"></div>
            <ul className="languages-list">
              <li className="languages-item">
                <Link className="header-link" to="/">
                  UZB
                </Link>
              </li>
              <li className="languages-item">
                <Link className="header-link" to="/">
                  RU
                </Link>
              </li>
              <li className="languages-item">
                <Link className="header-link" to="/">
                  ENG
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
