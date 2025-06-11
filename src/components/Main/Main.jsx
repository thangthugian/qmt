import {
  FaGithub,
  FaSpotify,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { useState } from "react";
import BioGitHub from "../Bio/Github";
import BioSpotify from "../Bio/Spotify";
import BioYoutube from "../Bio/Youtube";
import BioInstagram from "../Bio/Instagram";
import BioLinkedIn from "../Bio/LinkedIn";
import BioFacebook from "../Bio/Facebook";

function Main() {
  const [useText, setUseText] = useState("me -h");
  const [useImg, setUseImg] = useState("/image/new3.png");
  function handleText(value) {
    setUseText(value);
  }

  function handleImg(value) {
    setUseImg(value);
  }

  const [isAlertGitHub, setIsAlertGithub] = useState(false);
  const [isAlertSpotify, setIsAlertSpotify] = useState(false);
  const [isAlertYoutube, setIsAlertYoutube] = useState(false);
  const [isAlertInstagram, setIsAlertInstagram] = useState(false);
  const [isAlertLinkedIn, setIsAlertLinkedIn] = useState(false);
  const [isAlertFacebook, setIsAlertFacebook] = useState(false);

  function handleVisitGitHub() {
    setIsAlertGithub(true);
  }
  function handleVisitSpotify() {
    setIsAlertSpotify(true);
  }
  function handleVisitYoutube() {
    setIsAlertYoutube(true);
  }
  function handleVisitInstagram() {
    setIsAlertInstagram(true);
  }
  function handleVisitLinkedIn() {
    setIsAlertLinkedIn(true);
  }
  function handleVisitFacebook() {
    setIsAlertFacebook(true);
  }

  return (
    <>
      {isAlertGitHub && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center">
          <BioGitHub onClose={() => setIsAlertGithub(false)} />
        </div>
      )}
      {isAlertSpotify && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center">
          <BioSpotify onClose={() => setIsAlertSpotify(false)} />
        </div>
      )}
      {isAlertYoutube && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center">
          <BioYoutube onClose={() => setIsAlertYoutube(false)} />
        </div>
      )}
      {isAlertInstagram && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center">
          <BioInstagram onClose={() => setIsAlertInstagram(false)} />
        </div>
      )}
      {isAlertLinkedIn && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center">
          <BioLinkedIn onClose={() => setIsAlertLinkedIn(false)} />
        </div>
      )}
      {isAlertFacebook && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center">
          <BioFacebook onClose={() => setIsAlertFacebook(false)} />
        </div>
      )}

      <h1 className="text-2xl items-center mt-8">
        <span className="italic md:not-italic text-sky-500 ml-8 glow-text">
          thangthugian
        </span>
        <img
          className="inline-block ml-1 size-12 relative z-10  object-cover rounded-full border-2 border-emerald-400 "
          src={useImg}
          alt="avatar"
        />
        <span className="text-orange-200 mr-3">:~$</span>
        <span className="text-slate-700 glow-text">{useText}</span>
      </h1>
      <main className="flex m-8">
        <a className="transform transition duration-300 hover:scale-110 cursor-pointer">
          <FaGithub
            onClick={handleVisitGitHub}
            onMouseOver={() => {
              handleText("qmthang22");
              handleImg("/image/avatar6.png");
            }}
            onMouseOut={() => {
              handleText("me -h");
              handleImg("/image/new3.png");
            }}
            className="gap-4 mr-10 text-4xl hover:text-slate-700"
          />
        </a>

        <a className="transform transition duration-300 hover:scale-110 cursor-pointer">
          <FaSpotify
            onClick={handleVisitSpotify}
            onMouseOver={() => {
              handleText("chubedan");
              handleImg("/image/new4.png");
            }}
            onMouseOut={() => {
              handleText("me -h");
              handleImg("/image/new3.png");
            }}
            className="gap-4 mr-10 text-4xl hover:text-green-500"
          />
        </a>
        <a className="transform transition duration-300 hover:scale-110 cursor-pointer">
          <FaYoutube
            onClick={handleVisitYoutube}
            onMouseOver={() => {
              handleText("chillife");
              handleImg("/image/new2.png");
            }}
            onMouseOut={() => {
              handleText("me -h");
              handleImg("/image/new3.png");
            }}
            className="gap-4 mr-10 text-4xl hover:text-red-500"
          />
        </a>
        <a className="transform transition duration-300 hover:scale-110 cursor-pointer">
          <FaInstagram
            onClick={handleVisitInstagram}
            onMouseOver={() => {
              handleText("thangthugian");
              handleImg("/image/avatar3.png");
            }}
            onMouseOut={() => {
              handleText("me -h");
              handleImg("/image/new3.png");
            }}
            className="gap-4 mr-10 text-4xl hover:text-pink-500"
          />
        </a>
        <a className="transform transition duration-300 hover:scale-110 cursor-pointer">
          <FaLinkedin
            onClick={handleVisitLinkedIn}
            onMouseOver={() => {
              handleText("thangmanhquach");
              handleImg("/image/new1.png");
            }}
            onMouseOut={() => {
              handleText("me -h");
              handleImg("/image/new3.png");
            }}
            className="gap-4 mr-10 text-4xl hover:text-blue-500"
          />
        </a>
        <a className="transform transition duration-300 hover:scale-110 cursor-pointer">
          <FaFacebook
            onClick={handleVisitFacebook}
            onMouseOver={() => {
              handleText("manh thang");
              handleImg("/image/avatar7.png");
            }}
            onMouseOut={() => {
              handleText("me -h");
              handleImg("/image/new3.png");
            }}
            className="gap-4 mr-10 text-4xl hover:text-blue-500"
          />
        </a>
      </main>
    </>
  );
}

export default Main;
