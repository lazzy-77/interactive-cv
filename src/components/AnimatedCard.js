import React from 'react';
import { animated, useSpring, config } from 'react-spring';

/**
 * Component params or "props"
 * scale [value between 1-10]
 * rotationX
 * rotationY
 * mass
 * @param {*} params
 */

const AnimatedCard = (params) => {
  const multiplierScale = params.scale === undefined ? 1 : params.scale;

  const multiplierMass = params.mass === undefined ? 1 : params.mass;

  const multiplierX = params.x === undefined ? 1 : params.x;

  const multiplierY = params.y === undefined ? 1 : params.y;

  const clicked = params.onClick;

  const calc = (x, y) => [
    -(y - window.innerHeight / 3) / 30,
    (x - window.innerWidth / 3) / 30,
    1.05 * multiplierScale,
  ];
  const trans = (x, y, s) =>
    `perspective(100vw) rotateX(${x * multiplierX}deg) rotateY(${
      (y / 2) * multiplierY
    }deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.wobbly,
  }));
  return (
    <animated.div
      class={params.className}
      id={params.id}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
      onClick={clicked}
    >
      {params.children}
    </animated.div>
  );
};

export default AnimatedCard;
