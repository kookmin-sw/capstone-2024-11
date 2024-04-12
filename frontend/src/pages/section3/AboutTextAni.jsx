// import React, { useState } from "react";
// // import { useTrail, a } from "@react-spring/web";
// import { useTrail, a } from "@react-spring/web";
// import styled from "styled-components";

// const StyledTrail = styled.div`
//   position: relative;
//   width: 100%;
//   /* height: ${(props) => (props.open ? "110px" : "0")}; */
//   height: 80px;
//   line-height: 80px;
//   color: black;
//   font-size: 4em;
//   font-weight: 800;
//   letter-spacing: -0.05em;
//   will-change: transform, opacity;
//   /* overflow: hidden; */
// `;

// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   height: 100%;
//   justify-content: center;
// `;

// const Trail = ({ open, children }) => {
//   const items = React.Children.toArray(children);
//   const trail = useTrail(items.length, {
//     config: { mass: 5, tension: 2000, friction: 200 },
//     opacity: open ? 1 : 0,
//     x: open ? 0 : 20,
//     from: { opacity: 0, x: 20 },
//   });

//   return (
//     <StyledTrail open={open}>
//       {trail.map(({ x, height, opacity }, index) => (
//         <a.div key={index} style={{ opacity, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
//           <a.div style={{ height }}>{items[index]}</a.div>
//         </a.div>
//       ))}
//     </StyledTrail>
//   );
// };

// const AboutTextAni = () => {
//   const [open, set] = useState(true);
//   return (
//     <Container onClick={() => set((state) => !state)}>
//       <Trail open={open}>
//         <span>소프트웨어학부 20191660 전병우</span>
//         <span>소프트웨어학부 20191660 전병우</span>
//         <span>소프트웨어학부 20191660 전병우</span>
//         <span>소프트웨어학부 20191660 전병우</span>
//       </Trail>
//     </Container>
//   );
// };

// export default AboutTextAni;
import React, { useState, useEffect, useRef } from "react";
import { useTrail, a } from "@react-spring/web";
import styled from "styled-components";

const StyledTrail = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  line-height: 80px;
  color: black;
  font-size: 4em;
  font-weight: 800;
  letter-spacing: -0.05em;
  will-change: transform, opacity;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    from: { opacity: 0, x: 20 },
  });

  return (
    <StyledTrail>
      {trail.map(({ x, height, opacity }, index) => (
        <a.div key={index} style={{ opacity, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </StyledTrail>
  );
};

const AboutTextAni = () => {
  const [open, set] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          set(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Container ref={ref}>
      <Trail open={open}>
        <span>소프트웨어학부 20191660 전병우</span>
        <span>소프트웨어학부 20191660 전병우</span>
        <span>소프트웨어학부 20191660 전병우</span>
        <span>소프트웨어학부 20191660 전병우</span>
      </Trail>
    </Container>
  );
};

export default AboutTextAni;
