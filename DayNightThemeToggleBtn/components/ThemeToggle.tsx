'use client';

import React, { useEffect, useRef } from 'react';
import '@/app/styles/ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const $ = (sel: string) => {
      const nodes = root.querySelectorAll<HTMLElement>(sel);
      return nodes.length === 1 ? nodes[0] : nodes;
    };

    const mainButton       = $(".main-button")          as HTMLElement;
    const daytimeBackgrond = $(".daytime-backgrond")    as NodeListOf<HTMLElement>;
    const cloud            = $(".cloud")                as HTMLElement;
    const cloudList        = $(".cloud-son")            as NodeListOf<HTMLElement>;
    const cloudLight       = $(".cloud-light")          as HTMLElement;
    const moon             = $(".moon")                 as NodeListOf<HTMLElement>;
    const stars            = $(".stars")                as HTMLElement;
    const star             = $(".star")                 as NodeListOf<HTMLElement>;

    let isMoved = true;
    let isClicked = false;

    const handleClick = () => {
      if (isMoved) {
        mainButton.style.transform = 'translateX(0)';
        mainButton.style.backgroundColor = 'rgba(255, 195, 35,1)';
        mainButton.style.boxShadow = '3px 3px 5px rgba(0,0,0,.5), inset -3px -5px 3px -3px rgba(0,0,0,.5), inset 4px 5px 2px -2px rgba(255,230,80,1)';
        daytimeBackgrond.forEach(bg => (bg.style.transform = 'translateX(0)'));
        cloud.style.transform = 'translateY(10px)';
        cloudLight.style.transform = 'translateY(10px)';
        moon.forEach(m => (m.style.opacity = '0'));
        stars.style.transform = 'translateY(-125px)';
        stars.style.opacity = '0';
        root.classList.remove("components-dark");
        root.classList.add("components-light");
      } else {
        mainButton.style.transform = 'translateX(110px)';
        mainButton.style.backgroundColor = 'rgba(195, 200,210,1)';
        mainButton.style.boxShadow = '3px 3px 5px rgba(0,0,0,.5), inset -3px -5px 3px -3px rgba(0,0,0,.5), inset 4px 5px 2px -2px rgba(255,255,210,1)';
        daytimeBackgrond[0].style.transform = 'translateX(110px)';
        daytimeBackgrond[1].style.transform = 'translateX(80px)';
        daytimeBackgrond[2].style.transform = 'translateX(50px)';
        cloud.style.transform = 'translateY(80px)';
        cloudLight.style.transform = 'translateY(80px)';
        moon.forEach(m => (m.style.opacity = '1'));
        stars.style.transform = 'translateY(-62.5px)';
        stars.style.opacity = '1';
        root.classList.remove("components-light");
        root.classList.add("components-dark");
      }

      isClicked = true;
      setTimeout(() => (isClicked = false), 500);
      isMoved = !isMoved;
    };

    const spreadStars = [[10,36],[40,87],[26,16],[38,63],[20.5,72],[51.5,35]];
    const foldStars   = [[11,39],[39,91],[26,19],[37,66],[21,75],[51,38]];
    const spreadCloudR = [-24,-12,17,46,70,109,-23,-11,18,47,74,110];
    const spreadCloudB = [10,-27,-43,-39,-65,-54,10,-26,-42,-38,-64,-55];
    const foldCloudR   = [-20,-10,20,50,75,110,-20,-10,20,50,75,110];
    const foldCloudB   = [10,-25,-40,-35,-60,-50,10,-25,-40,-35,-60,-50];

    const handleMove = () => {
      if (isClicked) return;

      if (isMoved) {
        mainButton.style.transform = 'translateX(100px)';
        daytimeBackgrond[0].style.transform = 'translateX(100px)';
        daytimeBackgrond[1].style.transform = 'translateX(73px)';
        daytimeBackgrond[2].style.transform = 'translateX(46px)';
        star.forEach((s, i) => {
          s.style.top  = `${spreadStars[i][0]}px`;
          s.style.left = `${spreadStars[i][1]}px`;
        });
      } else {
        mainButton.style.transform = 'translateX(10px)';
        daytimeBackgrond[0].style.transform = 'translateX(10px)';
        daytimeBackgrond[1].style.transform = 'translateX(7px)';
        daytimeBackgrond[2].style.transform = 'translateX(4px)';
        cloudList.forEach((c, i) => {
          c.style.right  = `${spreadCloudR[i]}px`;
          c.style.bottom = `${spreadCloudB[i]}px`;
        });
      }
    };

    const handleOut = () => {
      if (isClicked) return;

      if (isMoved) {
        mainButton.style.transform = 'translateX(110px)';
        daytimeBackgrond[0].style.transform = 'translateX(110px)';
        daytimeBackgrond[1].style.transform = 'translateX(80px)';
        daytimeBackgrond[2].style.transform = 'translateX(50px)';
        star.forEach((s, i) => {
          s.style.top  = `${foldStars[i][0]}px`;
          s.style.left = `${foldStars[i][1]}px`;
        });
      } else {
        mainButton.style.transform = 'translateX(0)';
        daytimeBackgrond.forEach(bg => (bg.style.transform = 'translateX(0)'));
        cloudList.forEach((c, i) => {
          c.style.right  = `${foldCloudR[i]}px`;
          c.style.bottom = `${foldCloudB[i]}px`;
        });
      }
    };

    const floatCloud = (e: HTMLElement) => {
      const randomDir = () => (Math.random() < 0.5 ? '2px' : '-2px');
      e.style.transform = `translate(${randomDir()}, ${randomDir()})`;
    };
    const cloudTimer = window.setInterval(() => {
      cloudList.forEach(floatCloud);
    }, 1000);

    mainButton.addEventListener('click', handleClick);
    mainButton.addEventListener('mousemove', handleMove);
    mainButton.addEventListener('mouseout',  handleOut);

    return () => {
      mainButton.removeEventListener('click', handleClick);
      mainButton.removeEventListener('mousemove', handleMove);
      mainButton.removeEventListener('mouseout',  handleOut);
      clearInterval(cloudTimer);
    };
  }, []);

  return (
    <div ref={rootRef} className="components components-dark">
      <div className="main-button">
        <div className="moon" />
        <div className="moon" />
        <div className="moon" />
      </div>

      <div className="daytime-backgrond" />
      <div className="daytime-backgrond" />
      <div className="daytime-backgrond" />

      <div className="cloud">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="cloud-son" />
        ))}
      </div>
      <div className="cloud-light">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="cloud-son" />
        ))}
      </div>

      <div className="stars">
        {['big','big','medium','medium','small','small'].map((sz, i) => (
          <div key={i} className={`star ${sz}`}>
            {Array.from({ length: 4 }).map((__, j) => (
              <div key={j} className="star-son" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;
