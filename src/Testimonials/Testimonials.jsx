import React, { useRef, useState, useEffect } from "react";
import next_icon from "../assets/next-icon.png";
import back_icon from "../assets/back-icon.png";
import user1 from "../assets/user-1.png";
import user2 from "../assets/user-2.png";
import user3 from "../assets/user-3.png";
import user4 from "../assets/user-4.png";
import "./Testimonials.css";

const Testimonials = () => {
  const slider = useRef();
  const [tx, setTx] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideForward = () => {
    if (isMobile) return;
    if (tx > -50) {
      const newTx = tx - 25;
      setTx(newTx);
      slider.current.style.transform = `translateX(${newTx}%)`;
    }
  };

  const slideBackward = () => {
    if (isMobile) return;
    if (tx < 0) {
      const newTx = tx + 25;
      setTx(newTx);
      slider.current.style.transform = `translateX(${newTx}%)`;
    }
  };

  return (
    <div className="Testimonials">
      {!isMobile && (
        <>
          <img
            src={next_icon}
            alt=""
            className="next-btn"
            onClick={slideForward}
          />
          <img
            src={back_icon}
            alt=""
            className="back-btn"
            onClick={slideBackward}
          />
        </>
      )}
      <div className="slider">
        <ul ref={slider}>
          {[user1, user2, user3, user4].map((userImg, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={userImg} alt="" />
                  <div>
                    <h3>William Jackson{index + 1}</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. This supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
