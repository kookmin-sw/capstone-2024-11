import React, { useState } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Container = styled.a`
  display: inline-block;
  position: relative;
  background-color: #9896f1;
  border-radius: 99px;
  padding: 0.4rem 3.5rem;
  color: white;
  text-decoration: none;
  font-size: 1.15rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  svg {
    position: absolute;
    width: 500%;
    height: 500%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;

const shapes = [
  "M254 286.11a50 50 0 0050-50H204a50 50 0 0050 50z",
  "M255.5 271a20 20 0 10-20-20 20 20 0 0020 20zm0 30a50 50 0 10-50-50 50 50 0 0050 50z",
  "M248.8 202.17a8 8 0 019.4 0l40.6 29.5a8 8 0 012.9 8.94l-15.5 47.73a8 8 0 01-7.61 5.52h-50.18a8 8 0 01-7.61-5.52l-15.5-47.73a8 8 0 012.9-8.94z",
  "M307.5 250a50 50 0 11-50-50 50 50 0 0150 50",
  "M248.08 204.07a11.91 11.91 0 0116.84 0l30.59 30.59a11.91 11.91 0 11-16.85 16.85l-10.25-10.25v47.41a11.91 11.91 0 11-23.82 0v-47.41l-10.25 10.25a11.91 11.91 0 01-16.85-16.85z",
  "M234 237a22.5 22.5 0 0045 0h27.5a50 50 0 01-100 0z",
  "M258 202.5a12 12 0 00-12 12v26h-26a12 12 0 000 24h26v26a12 12 0 0024 0v-26h26a12 12 0 000-24h-26v-26a12 12 0 00-12-12z",
];

const AnimatedButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    const container = document.querySelector(".anim-explode-container");
    const svg = container.querySelector(".anim-explode");
    const numberOfShapes = 10;
    const animatedShapes = [];

    for (let i = 0; i < numberOfShapes; i++) {
      const newElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
      newElement.setAttribute("d", gsap.utils.random(shapes));
      newElement.style.fill = gsap.utils.random(["#8EF6E4", "#A2D5F2", "#D59BF6", "#EDB1F1"]);
      svg.appendChild(newElement);
      animatedShapes.push(newElement);
    }

    function killShapes() {
      animatedShapes.forEach((shape) => {
        svg.removeChild(shape);
      });
    }

    gsap.set(animatedShapes, {
      transformOrigin: "center",
      scale: "random(0.4, 0.8)",
    });

    gsap.to(animatedShapes, {
      onComplete: killShapes,
      keyframes: [
        {
          rotate: "random(180, -180)",
          x: "random([-150, -100, -200, 200, 100, 150])",
          y: "random([-150, -100, -200, 200, 100, 150])",
          ease: "expo.out",
          duration: 4,
          stagger: {
            amount: 0.1,
          },
        },
        { opacity: 0, delay: -3 },
      ],
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container
      className="link anim-explode-container"
      href="#"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <p>hover me</p>
      <svg className="anim-explode" role="presentational" viewBox="0 0 500 500"></svg>
    </Container>
  );
};

export default AnimatedButton;
